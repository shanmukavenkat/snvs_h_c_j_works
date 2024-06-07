class Musicinstruments {
    constructor(music) {
        this.music = music;
    }
    setSecondValue() {
        return this;
    }
}
let musicArray = ["Piano", "Guitar", "Drums"];
let newMusic = new Musicinstruments(musicArray);
console.log(newMusic.music);