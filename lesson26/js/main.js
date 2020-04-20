//#region Task -->1

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
        let timesOut = (fullHours - (fullHours % 4)) / 4
        let minutes = Math.round(left * 60 / this.speed);

        console.log(`${fullHours+timesOut} hours and  ${minutes} minutes`);
    }
}
carObject.inroduse();
let distance = prompt("enter the distance You need to pass");
carObject.duration(distance);

// #endregion

//#region Task --> 2


function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
};
let arrayNumbersFraction = [];
for (let i = 0; i < 4; i++) {
    let enryResult = Number(prompt(`Enter a simple ${i+1}  number`))
    let number = !!enryResult ? enryResult : 1;
    arrayNumbersFraction.push(number);
    console.log(arrayNumbersFraction);
}

let arrayNumbers = [];
let firstDigit = new Fraction(arrayNumbersFraction[0], arrayNumbersFraction[1]);
console.log(firstDigit);

let secondDigit = new Fraction(arrayNumbersFraction[2], arrayNumbersFraction[3]);
console.log(secondDigit);

arrayNumbers.push(firstDigit);
arrayNumbers.push(secondDigit);

function answer(string, int1, int2) {
    console.log(`That will be resault of ${string} a new 
    fraction:
     numerator   ${int1} and 
     denominator ${int2} `);
};

let digitConventor = {
    add: function (obj1, obj2) {
        answer("adding", (obj1.numerator * obj2.denominator) + (obj2.numerator * obj1.denominator), (obj1.denominator * obj2.denominator));
    },
    separate: function (obj1, obj2) {
        answer("separate", (obj1.numerator * obj2.denominator) - (obj2.numerator * obj1.denominator), (obj1.denominator * obj2.denominator));
    },
    multiply: function (obj1, obj2) {
        answer("multiply", (obj1.numerator * obj2.numerator), (obj1.denominator * obj2.denominator));
    },
    divide: function (obj1, obj2) {
        answer("divide", (obj1.numerator * obj2.denominator), (obj1.denominator * obj2.numerator));
    }
};

let simplifyFraction = function (obj1) {
    let first = obj1.numerator;
    let second = obj1.denominator;
    while (first != second) {
        if (first > second) {
            first = first - second;
        } else {
            second = second - first;
        }
    }
    obj1.numerator /= first;
    obj1.denominator /= first;
    answer("simplify", obj1.numerator, obj1.denominator);
};
let convertOperation = prompt("Enter digit to add:[1],separate: [2],multiply: [3], divide: [4]");
switch (convertOperation) {
    case "1":
        digitConventor.add(firstDigit, secondDigit);
        break;
    case "2":
        digitConventor.separate(firstDigit, secondDigit);
        break;
    case "3":
        digitConventor.multiply(firstDigit, secondDigit);
        break;
    case "4":
        digitConventor.divide(firstDigit, secondDigit);
        break;
    default:
        console.log("not one of this")
        break;
};
let simplify = prompt("Simplify content case 'Yes':[1],'No':[2]");
switch (simplify) {
    case "1":
        for (let i = 0; i < arrayNumbers.length; i++) {
            simplifyFraction(arrayNumbers[i]);
        }
        break;

    default:
        console.log("Thanks for watching")
        break;
};



//#endregion


//#region Task -->3

let myDate = new Date();
let current = myDate;
myDate = {
    inroduse: function () {
        let inroduse = `${current.getHours()} hours ${current.getMinutes()} minutes ${current.getSeconds()} seconds `;

        function answer() {
            console.log(inroduse);
        }
        answer();
        current.getMinutes()
    },
    setSeconds: function (params) {
        current.setSeconds(params);
    },
    setMinutes: function (params) {
        current.setMinutes(params);
    },
    setHours: function (params) {
        current.setHours(params);
    }
};
let condition = true;
do {
    let timeingSet = prompt("Enter digit to set Hours:[1], minutes: [2], seconds: [3], display time: [4]");

    function chekMethod(param) {
        switch (param) {
            case "1":
                let hour = +prompt("Enter hours:")
                myDate.setHours(current.getHours() + hour);
                chekMethod("4");
                break;
            case "2":
                let min = +prompt("Enter minutes")
                myDate.setMinutes(current.getMinutes() + min);
                chekMethod("4");
                break;
            case "3":
                let sec = +prompt("Enter seconds")
                myDate.setSeconds(current.getSeconds() + sec);
                chekMethod("4");
                break;
            case "4":
                myDate.inroduse()
                break;
            default:
                console.log("not one of this")
                break;
        };
    }
    chekMethod(timeingSet);
    condition = prompt("Continue type [1]  if no [0]")

} while (condition == true)







//#endregion