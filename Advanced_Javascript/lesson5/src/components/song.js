function Song(title, duration, artist) {
  this.title = title;
  this.duration = duration;
  this.artist = artist;
  this.isPlaying = false;
}
Song.prototype.play = function () {
  this.isPlaying = true;
};
Song.prototype.stop = function () {
  this.isPlaying = false;
};
Song.prototype.toHtml = function () {
  return `<div class="row py-3 ${
    this.isPlaying ? "current" : ""
  }">     <div class="col-sm-9">${this.title} - ${
    this.artist
  }</div>     <div class="col-sm-3">${this.duration}</div> </div>`;
};
export default Song;
