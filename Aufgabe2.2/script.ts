//Aufgabe 1a
function min(...nummern: number[]): number { 
    let minimum: number;
    for (let i: number = 0; i < nummern.length; i++) {
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

//Aufgabe1c
interface Student {     //1.
    name: string;
    alter: number; 
    matrikel: number; 
}

let s1: Student = {name: "Laura", alter: 20, matrikel: 123456};     //2.
let s2: Student = {name: "Susie", alter: 19, matrikel: 654321};
let s3: Student = {name: "Lena", alter: 19, matrikel: 456123};

let studentenArray: Student[] = [s1, s2, s3, {name: "Sarah", alter: 18, matrikel: 112233}];     //3.
console.log(studentenArray[0]);
console.log(studentenArray[1].matrikel);
console.log(studentenArray[2].name, studentenArray[3].alter);

function showInfo(name: string): void {     //4.
    let ausgabe: Student;
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

class Studi {           //5.
    name: string;
    alter: number; 
    matrikel: number; 

    erstelleStudi (_name: string, _alter: number, _matrikel: number): void {
        this.name = _name;
        this.alter = _alter;
        this.matrikel = _matrikel;
    }
    showInfo (): void {
        console.log(this.name, this.alter, this.matrikel);
    } 
} 
let studi: Studi = new Studi(); //zeigen dass man neuen Student erstellt
studi.erstelleStudi ("Leyla", 22, 876543); //neuen Student füllen 
studi.showInfo(); //Info über neuen Student zeigen