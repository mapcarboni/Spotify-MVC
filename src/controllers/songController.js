const Song = require("../models/Song");
const SongList = require("../models/SongList");

const lista = new SongList();

const musica1 = new Song("Parece", "Luan Santana", "3:21", 100);
lista.addSong(musica1);

lista.addSong(new Song("Boiadeira", "Ana Castela", "3:11", 220));

const router = {
    addSong: (req, res) => {
        try {
            const { title, singer, duration, plays } = req.body;
            if (!title || !singer || !duration) {
                throw new Error("Preencha todos os campos!");
            }
            const music = new Song(title, singer, duration, plays);
            lista.addSong(music);
            res.status(200).json({ message: "Criado com sucesso", music });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar música",
                error: error.message,
            });
        }
    },

    getAllSongs: (req, res) => {
        try {
            const songs = lista.getAllSongs();
            res.status(200).json(songs);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar musicas",
                error: error.message,
            });
        }
    },

    getSongById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getSongById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar musica por id",
                error: error.message,
            });
        }
    },

    updateSong: (req, res) => {
        try {
            res.status(200).json(lista.updateSong(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteSong: (req, res) => {
        try {
            const song = req.params.id;
            lista.deleteSong(song);
            res.status(200).json({
                message: "Musica deletada com sucesso",
                song,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar musica",
                error: error.message,
            });
        }
    },

    getTop10Songs: (req, res) => {
        try {
            const songs = lista.getTop10Songs();
            res.status(200).json(songs);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar Top10",
                error: error.message,
            });
        }
    },
};

module.exports = router;
