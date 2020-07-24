import Media from "./media";

export default class Song extends Media {
  constructor(title, duration, artist) {
    super(title, duration);

    this.artist = artist;
  }

  toHtml() {
    return `<div class="row py-3 ${
      this.isPlaying ? "current" : ""
    }">     <div class="col-sm-9">${this.title} - ${
      this.artist
    }</div>     <div class="col-sm-3">${this.duration}</div> </div>`;
  }
}
