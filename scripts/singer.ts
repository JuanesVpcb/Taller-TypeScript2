class Singer {
    name: string;
    image: string;
    bio: string;
    songs: string[];
    streams: number[];
    age: number;
    
    constructor(name: string, image: string, bio: string, songs: string[], streams: number[], age: number) {
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.songs = songs;
        this.streams = streams;
        this.age = age;
    }

    get getImagen(): string {
        return `<img src="${this.image}" alt="${this.name}" class=img-fluid>`;
    }

    get getSongs(): string {
        const mergedSongs: string[] = this.songs.map((song, index) => `${song} (${this.formatNumberWithCommas(this.streams[index])} streams)`);
        const listedSongs: string = mergedSongs.map(song => `<li>${song}</li>`).join('');
        return `
        <ol>
            ${listedSongs}
        </ol>
        `;
    }

    get getListedSongs(): string {
        const songsWithoutLast = this.songs.slice(0, -1).join(', ');
        const lastSong = this.songs[this.songs.length - 1];
        return `${songsWithoutLast} and ${lastSong}`;
    }

    formatNumberWithCommas(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}