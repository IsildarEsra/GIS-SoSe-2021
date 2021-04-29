"use strict";
//Aufgabe 1a
function min(...nummern) {
    let minimum;
    for (let i = 0; i < nummern.length; i++) {
        if (i == 0) {
            minimum = nummern[i];
        }
        else if (nummern[i] < minimum) {
            minimum = nummern[i];
        }
    }
    return minimum;
}
console.log(min(5, 3, 2, 6));
//Aufgabe1b
function isEven(nummer) {
    if (nummer == 0) {
        return true;
    }
    else if (nummer == 1) {
        return false;
    }
    else if (nummer < 0) {
        return isEven(-nummer); //Hier wird bei negativen Zahlen das Vorzeichen geändert - * - = +
    }
    else {
        return isEven(nummer - 2);
    }
}
console.log(isEven(-1)); //Bei -1 kommt ein Error, also muss man noch ein else if hinzufügen, dass bei negativen Zahlen das Vorzeichen ändert. Danach kommt dann false raus.
let s1 = { name: "Laura", alter: 20, matrikel: 123456 }; //2.
let s2 = { name: "Susie", alter: 19, matrikel: 654321 };
let s3 = { name: "Lena", alter: 19, matrikel: 456123 };
let studentenArray = [s1, s2, s3, { name: "Sarah", alter: 18, matrikel: 112233 }]; //3.
console.log(studentenArray[0]);
console.log(studentenArray[1].matrikel);
console.log(studentenArray[2].name, studentenArray[3].alter);
function showInfo(name) {
    let ausgabe;
    if (name == "Laura") {
        ausgabe = s1;
    }
    if (name == "Susie") {
        ausgabe = s2;
    }
    if (name == "Lena") {
        ausgabe = s3;
    }
    console.log(ausgabe);
}
showInfo("Laura");
showInfo("Susie");
showInfo("Lena");
class Studi {
    erstelleStudi(_name, _alter, _matrikel) {
        this.name = _name;
        this.alter = _alter;
        this.matrikel = _matrikel;
    }
    showInfo() {
        console.log(this.name, this.alter, this.matrikel);
    }
}
let studi = new Studi(); //zeigen dass man neuen Student erstellt
studi.erstelleStudi("Leyla", 22, 876543); //neuen Student füllen 
studi.showInfo(); //Info über neuen Student zeigen
//# sourceMappingURL=script.js.map