import Song from "./components/songClass";
import Movie from "./components/movie";
import PlayList from "./components/playLIstClass";

const playList = new PlayList();
const s1 = new Song("TEST", "Tom", "03:12");
const s2 = new Song("TEST 1", "Bill", "05:22");
const m1 = new Movie("Man of steel", 2012, "02:33:15");
playList.add(m1);

playList.add(s1);
playList.add(s2);
const list = document.getElementById("list");
playList.render(list);
const play = document.getElementById("btn-play");
const stop = document.getElementById("btn-stop");
const next = document.getElementById("btn-next");

play.onclick = function () {
  playList.play();
  playList.render(list);
};
stop.onclick = function () {
  playList.stop();
  playList.render(list);
};
next.onclick = function () {
  playList.next();
  playList.render(list);
};

// var person1={
//     firstName:'Fill',
//     greet:()=>{
// console.log(`hello, ${this.firstName}`)
//     }
// }
// function createPerson(firstName,lastName) {
//     return {
//         firstName,
//         lastName,
//         getFullName:()=>{
//             console.log(`Hello ${this.firstName}  ${this.lastName}`);
//         }
//     }

// // }
// var Person=function createPerson(firstName,lastName) {

//         this.firstName=firstName;
//         this.lastName=lastName;

// }
// Person.prototype.getfullName=()=>{
//     console.log(`Hello ${this.firstName}  ${this.lastName}`);
// }

// var user1=createPerson("Ivan","Goodman");
