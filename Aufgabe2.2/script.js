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
/*
function isEven(nummer: number): boolean {
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
*/
function isEven(_nummer) {
    if (_nummer == 0)
        return true;
    if (_nummer == 1)
        return false;
    let result;
    if (_nummer > 0)
        result = isEven(_nummer - 2);
    if (_nummer < 0)
        result = isEven(_nummer + 2);
    return result;
}
console.log(isEven(-1));
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
//Aufgabe2a
/*
let nummerArray: number [] = [3, 4, 8, 15, 18]; //NummerArray erstellen
function backwards(): void {
    nummerArray.reverse();                      // reverse-Befehl
}
console.log(nummerArray.reverse());             // Ausgabe
backwards();
*/
let nummerArray = [3, 4, 8, 15, 18];
let nummerArrayBack = backwards(nummerArray);
function backwards(_arr) {
    let reversed = [];
    for (let i = _arr.length; i > 0; i--) {
        reversed.push(_arr[i - 1]);
    }
    return reversed;
}
console.log(nummerArray);
console.log(nummerArrayBack);
//Aufgabe2b
function join(array1, array2) {
    let joined = [array1.length + array2.length];
    for (let i = 0; i < array1.length; i++) {
        joined[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        joined[i + array1.length] = array2[i];
    }
    return joined;
}
console.log(join([12, 2000, 88], [15, 9001, -440]));
//Aufgabe2c
let arr = [5, 42, 17, 2018, -10, 60, -10010];
function split(_arr, _ersteNummer, _zweiteNummer) {
    let arrayMittig = [];
    for (let i = _ersteNummer; i <= _zweiteNummer; i++) {
        arrayMittig.push(_arr[i]);
    }
    return arrayMittig;
}
console.log(split(arr, 1, 2));
//Aufgabe3a
let canvas = document.getElementById("Canvas_a");
let contextBoden = canvas.getContext("2d");
contextBoden.fillStyle = "lightgreen";
contextBoden.fillRect(10, 300, 400, 50);
let contextHimmel = canvas.getContext("2d");
contextHimmel.fillStyle = "lightblue";
contextHimmel.fillRect(10, 10, 400, 300);
let contextWolke = canvas.getContext("2d");
contextWolke.fillStyle = "white";
contextWolke.beginPath();
contextWolke.ellipse(310, 60, 40, 70, Math.PI / 3, 0, 2 * Math.PI);
contextWolke.fill();
let contextHaus = canvas.getContext("2d");
contextHaus.fillStyle = "yellow";
contextHaus.fillRect(150, 210, 100, 100);
let contextDach = canvas.getContext("2d");
contextDach.fillStyle = "brown";
contextDach.beginPath();
contextDach.moveTo(150, 210);
contextDach.lineTo(200, 160);
contextDach.lineTo(250, 210);
contextDach.fill();
let contextBaumstamm = canvas.getContext("2d");
contextBaumstamm.fillStyle = "brown";
contextBaumstamm.fillRect(70, 210, 15, 100);
let contextBaumkrone = canvas.getContext("2d");
contextBaumkrone.fillStyle = "green";
contextBaumkrone.beginPath();
contextBaumkrone.ellipse(70, 210, 65, 70, Math.PI / 3, 0, 2 * Math.PI);
contextBaumkrone.fill();
//Aufgabe3b
class Rechteck {
    constructor(_x, _y, _breit, _hoch) {
        this.canvas2 = document.getElementById("Canvas_b");
        this.contextRechteck = this.canvas2.getContext("2d");
        this.x = _x;
        this.y = _y;
        this.breit = _breit;
        this.hoch = _hoch;
    }
    Rechteck() {
        this.contextRechteck.strokeRect(this.x, this.y, this.breit, this.hoch);
    }
}
let rechteck1 = new Rechteck(50, 70, 50, 70);
rechteck1.Rechteck();
//Aufgabe3c und d
class Rechte {
    constructor() {
        this.canvas3 = document.getElementById("Canvas_c");
        this.contextRechteck = this.canvas3.getContext("2d");
        this.x = Math.random() * (300 - 0);
        this.y = Math.random() * (300 - 0);
        this.breit = Math.random() * (300 - 0);
        this.hoch = Math.random() * (300 - 0);
    }
    drawRect() {
        this.contextRechteck.fillStyle = "pink";
        this.contextRechteck.fillRect(this.x, this.y, this.breit, this.hoch);
    }
}
let rechteckzufall = new Rechte();
rechteckzufall.drawRect();
//Aufgabee
class Rechtecke {
    constructor() {
        this.canvas4 = document.getElementById("Canvas_e");
        this.contextRechteck = this.canvas4.getContext("2d");
        this.x = Math.random() * (300 - 0);
        this.y = Math.random() * (300 - 0);
        this.breit = Math.random() * (300 - 0);
        this.hoch = Math.random() * (300 - 0);
    }
    drawRect() {
        this.contextRechteck.fillStyle = "pink";
        this.contextRechteck.fillRect(this.x, this.y, this.breit, this.hoch); //Bis hier gleich wie bei c und d aber mein array hatte nicht funktioniert also weiß ich nicht was ich machen soll
    }
}
let rechteckArray = [];
for (let i = 0; i < 5; i++) {
    rechteckArray.push(new Rechtecke());
    rechteckArray[i].drawRect();
}
//# sourceMappingURL=script.js.map