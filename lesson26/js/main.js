let carObject = {
    concern: "Opel",
    model: "Corsa",
    year: "2011",
    speed: 18, //km/hr
    inroduse: function () {
        let inroduse = `${this.concern} produce model: ${this.model} that was represent to people in ${this.year} which run with speed ${this.speed} km/hour `

        console.log(inroduse);
    },
    duration: function (distance) {
        let left = distance % this.speed; //km
        let fullHours = (distance - left) / this.speed;
        let timesOut = (fullHours - (fullHours % 3)) / 3
        let minutes = Math.round(left * 60 / this.speed);
        console.log(`${fullHours+timesOut} hours and  ${minutes} minutes`);
    }
}
carObject.inroduse();
let distance = prompt("enter the distance You need to pass");
carObject.duration(distance);