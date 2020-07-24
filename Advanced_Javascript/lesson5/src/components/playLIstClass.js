class PlayList {
  constructor() {
    this.songs = [];
    this.currentIndex = 0;
  }

  add(song) {
    this.songs.push(song);
  }
  play() {
    let song = this.songs[this.currentIndex];
    song.play();
  }
  stop() {
    let song = this.songs[this.currentIndex];
    song.stop();
  }
  next() {
    this.stop();
    this.currentIndex++;
    if (this.currentIndex === this.songs.length) {
      this.currentIndex = 0;
    }
    let song = this.songs[this.currentIndex];
    song.play();
  }
  render(list) {
    list.innerHTML = "";

    return this.songs.forEach((song) => {
      list.innerHTML += song.toHtml();
    });
  }
}
export default PlayList;
