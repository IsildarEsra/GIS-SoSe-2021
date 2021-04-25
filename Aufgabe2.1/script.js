"use strict";
console.log("Hallo Welt!");
//Aufgabe1
//a
function a1() {
    let x = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
//a) Es wird "Alles", "Logo!" und "Klar?" ausgegeben
//b Zeile7, 8, 9 dann 13
//c
function a1() {
    let x = "Alles";
    console.log();
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x) {
    console.log(x + " " + "Klar?");
}
function func2(x) {
    console.log(x + " " + "Gute!");
}
//Aufgabe2
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
//das Programm zählt von 9 runter, solange die Zahl größer als 0 ist.
//Aufgabe4
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//a) Hallo Bla Hallo Blubb Test wird ausgegeben
//b) global: kann von überall darauf zugegriffen werden
// lokal: werden in einer Methode erzeugt und existieren während einem Funktionsablauf
// Übergabeparameter: bsp. void, gibt an was nach Durchlauf zurückgegeben wird
//Normale Variablen können einen Datentyp haben Buchstaben ==> String
//Funktionen können mehrere Variablen und dadurch auch Datentypen haben
//Beide werden mit Variablen benannt und werden durch diese aufgerufen
//Aufgabe5
//a
function multiply(x, y) {
    let z = x * y;
    console.log(z);
}
multiply(x, y);
//b
function max(x, y) {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);
//c
function schleife() {
    let i = 1;
    let ergebnis = 0;
    while (i <= 100) {
        ergebnis += i;
        i += 1;
    }
    console.log(ergebnis);
}
schleife();
//d
function getRandom() {
    for (let i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
    }
}
getRandom();
//e
let n = 5;
let e;
function factorial(n) {
    if (n < 1) {
        console.log(1);
    }
    else {
        do {
            e = n + "*";
            console.log(e);
            break;
        } while (n > 1);
    }
}
factorial(n);
//f
function leapyears() {
    for (let schaltjahr = 1900; schaltjahr < 2021; schaltjahr++) {
        if (schaltjahr % 4 == 0 && schaltjahr % 100 != 0) {
            console.log(schaltjahr);
        }
        else if (schaltjahr % 400 == 0) {
            console.log(schaltjahr);
        }
    }
}
leapyears();
//Aufgabe6
//a
function string() {
    let s = "";
    while (s.length < 7) {
        s = s + "#";
        console.log(s);
    }
}
string();
//b
function fizz() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizz();
//c
function fizzBuzz() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();
//d
function schachbrett() {
    let brett = "";
    let leerzeichen = " ";
    for (let laenge = 0; laenge < 8; laenge++) {
        for (let breite = 0; breite < 8; breite++) {
            if (leerzeichen == "#") {
                brett = brett + "#";
                leerzeichen = " ";
            }
            else {
                brett = brett + "#";
                leerzeichen = " ";
            }
        }
    }
    brett = brett + "\n";
    if (leerzeichen == "#") {
        leerzeichen = " ";
    }
    else {
        leerzeichen = "#";
    }
    console.log(brett);
    return brett;
}
schachbrett();
//# sourceMappingURL=script.js.map