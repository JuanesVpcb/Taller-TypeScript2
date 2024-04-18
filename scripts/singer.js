"use strict";
class Singer {
    constructor(name, image, bio, songs, streams, age) {
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.songs = songs;
        this.streams = streams;
        this.age = age;
    }
    get getImagen() {
        return `<img src="${this.image}" alt="${this.name}" class=img-fluid>`;
    }
    get getSongs() {
        const mergedSongs = this.songs.map((song, index) => `${song} (${this.formatNumberWithCommas(this.streams[index])} streams)`);
        const listedSongs = mergedSongs.map(song => `<li>${song}</li>`).join('');
        return `
        <ol>
            ${listedSongs}
        </ol>
        `;
    }
    get getListedSongs() {
        const songsWithoutLast = this.songs.slice(0, -1).join(', ');
        const lastSong = this.songs[this.songs.length - 1];
        return `${songsWithoutLast} and ${lastSong}`;
    }
    formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
