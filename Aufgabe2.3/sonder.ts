namespace Aufgabe2_3 {

    

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_Gesamt");
    export interface Eis {
        waffel: Waffel;
        eiskugel: Kugel;
        streusel: Streusel;
    }
    export let canvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_Waffel");
    export interface Waffel {
        sorte: string;
        farbe: string;
        form: CanvasRenderingContext2D;
    } 
    export let canvas3: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_Kugel");
    export interface Kugel {
        sorte: string; 
        farbe: string;
        form: CanvasRenderingContext2D;
    }
    export let canvas4: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("Canvas_Streusel");
    export interface Streusel {
        farbe: string;
        form: CanvasRenderingContext2D;
    }
}

//Aufgabe2.3d
/* Werde eine Hauptseite haben (Homepage.html) und dann für jede Auswahl eine Seite (Waffel, Kugel, Streusel) und dann die Schlussseite bei der man das Endprodukt sieht (Endprodukt.html).
Man soll zumindestens bei der Kugelauswahl einen Kreis, bei der Waffel eine Dreiecksform usw. sehen können und vielleicht schon direkt die Farbe, die die Auswahl haben würde. */