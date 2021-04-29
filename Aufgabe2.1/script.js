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
//erlaubt: kleingeschrieben und Zahlen
//nicht erlaubt: Leerzeichen, Umlaute, Variabelnamen/Funktionen doppelt verwenden
//b Zeile7, 8, 9 dann 13
//c
function a2() {
    let x = "Alles";
    console.log();
    func2(x);
    func3(x);
    console.log(x + " " + "Logo!");
}
a2();
function func2(x) {
    console.log(x + " " + "Klar?");
}
function func3(x) {
    console.log(x + " " + "Gute!");
}
//Aufgabe2
function a7() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a7();
//das Programm zählt von 9 runter, solange die Zahl größer als 0 ist.
//Aufgabe4
let x = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x);
function func4(y) {
    y = "Bla";
    console.log(y);
}
function func5() {
    let x = "Blubb";
    console.log(x);
}
function func6() {
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
multiply(3, 5);
function multiply(x, y) {
    return x * y;
}
//b
function max(x, y) {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(4, 7);
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
        let random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
    }
}
getRandom();
//e
function factorial(n) {
    let fakultat = n;
    if (n < 1) {
        console.log(1);
    }
    else {
        do {
            fakultat = fakultat * (n - 1);
            n = n - 1;
        } while (n > 1);
    }
    return fakultat;
}
console.log(factorial(4));
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
function schach() {
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
schach();
//e
let groesse = 40;
schachbrett(groesse);
function schachbrett(gr) {
    let brett = " ";
    for (let zeilen = 1; zeilen < gr + 1; zeilen++) {
        for (let position = 1; position < gr + 1; position++) {
            if (zeilen % 2 !== 0 && position % 2 !== 0 || zeilen % 2 == 0 && position % 2 == 0) {
                brett = brett + " ";
            }
            else {
                brett = brett + "#";
            }
        }
        brett = brett + "\n";
    }
    console.log(brett);
}
//# sourceMappingURL=script.js.map