console.log("Hallo Welt!");

//Aufgabe1
//a

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}
//a) Es wird "Alles", "Logo!" und "Klar?" ausgegeben
//erlaubt: kleingeschrieben und Zahlen
//nicht erlaubt: Leerzeichen, Umlaute, Variabelnamen/Funktionen doppelt verwenden
//b Zeile7, 8, 9 dann 13

//c

function a1(): void {
    let x: string = "Alles";
    console.log();
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x: string ): void {
    console.log(x + " " + "Klar?");
}
function func2(x: string): void {
    console.log(x + " " + "Gute!");
}






//Aufgabe2

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();
//das Programm zählt von 9 runter, solange die Zahl größer als 0 ist.


//Aufgabe4

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
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
/*
multiply(3, 5);
function multiply(x: number, y: number): number {
    let z: number = x * y;
    return z;
}
*/
//b

function max(x: number, y: number): void {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);

//c

function schleife(): void {
    let i: number = 1;
    let ergebnis: number = 0;
    while (i <= 100) {
        ergebnis += i;
        i += 1;
    }
    console.log(ergebnis);
}
schleife();

//d

function getRandom(): void {
    for (let i: number = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 100) + 1;
        console.log(random);
    }
}
getRandom();

//e

function factorial(n: number): void {
    let fakultat: number = n;
    if (n < 1) {
        console.log(1);
    } else {
        do {
            fakultat = fakultat * (n - 1);
            n = n - 1;

            console.log(fakultat);
        } while (n > 1);
    }
}
factorial(4);

//f

function leapyears(): void {
    for (let schaltjahr: number = 1900; schaltjahr < 2021; schaltjahr++) {
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

function string(): void {
    let s: string = "";
    while (s.length < 7) {
        s = s + "#";
        console.log(s);
    }
}
string();

//b

function fizz(): void {
    for (let i: number = 0; i < 100; i++) {
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

function fizzBuzz(): void {
    for (let i: number = 0; i < 100; i++) {
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

function schachbrett(): string {
    let brett: string = "";
    let leerzeichen: string = " ";

    for (let laenge: number = 0; laenge < 8; laenge++) {
        for (let breite: number = 0; breite < 8; breite++) {
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
