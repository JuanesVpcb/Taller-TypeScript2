class Singer {
    name: string;
    image: string;
    bio: string;
    songs: string[];
    streams: number[];
    
    constructor(name: string, image: string, bio: string, songs: string[], streams: number[]) {
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.songs = songs;
        this.streams = streams;
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

    formatNumberWithCommas(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}