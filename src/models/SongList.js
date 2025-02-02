class SongList {
    constructor() {
        this.songs = [];
    }
    addSong(song) {
        this.songs.push(song);
    }
    getAllSongs() {
        return this.songs;
    }

    getSongById(id) {
        const song = this.songs.find((song) => song.id == id);
        if (!song) {
            throw new Error("Música não encontrada");
        }
        return song;
    }

    updateSong(id, updateData) {
        const song = getSongById(id);
        Object.assign(song, updateData);
        return song;
    }

    deleteSong(id) {
        this.songs = this.songs.filter((song) => song.id != id);
    }

    getTotalSongs() {
        return this.songs.length;
    }

    getTop10Songs() {
        return this.songs.sort((a, b) => b.plays - a.plays).slice(0, 10);
    }
}

module.exports = SongList;
