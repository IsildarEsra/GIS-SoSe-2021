//Bei mir werden die Bilder nicht angezeigt und ich weiß nicht, ob es an meinem JSON-String liegt, oder bei den Funktionen, die sie anzeigen sollen :( Oder ob ich einfach nur den Pfad zu meinen Bildern falsch getippt hab
namespace Eis {

export interface Eisergebnis {
        sorte: string;
        image: string;
    }

export interface Waffel extends Eisergebnis {}
export interface Kugel extends Eisergebnis {}
export interface Sahne extends Eisergebnis {}
export interface AlleAuswahl {
        waffeln: Waffel[];
        kugeln: Kugel[];
        sahnes: Sahne[];
    }
export interface Auswahl {
        waffel: Waffel;
        kugel: Kugel;
        sahne: Sahne;
    }

function divEis (_auswahl: Eisergebnis, _index: number): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add ("Eisergebnis"); 
    
    let img: HTMLImageElement = document.createElement("img");
    img.src = _auswahl.image;
    div.appendChild(img);
    
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _auswahl.sorte;
    div.appendChild(span);
        
    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "wahl";
    div.appendChild(button);
    
    if ((document.querySelector("title").getAttribute("id") == "Waffel" )) {
        button.addEventListener("click", auswahlWaffel); 
    }
    
    if ((document.querySelector("title").getAttribute("id") == "Kugel" )) {
        button.addEventListener("click", auswahlKugel); 
    }
    
    if ((document.querySelector("title").getAttribute("id") == "Sahne" )) {
        button.addEventListener("click", auswahlSahne); 
    }
    
    return div;
//Daten in SessionStorage speichern
    function auswahlWaffel(_event: Event): void {
        console.log(_auswahl.sorte); 
        sessionStorage.setItem("Waffel", _auswahl.image); 
        location.href = "Kugel.html"; 
    }
    function auswahlKugel(_event: Event): void {
        console.log(_auswahl.sorte);
        sessionStorage.setItem("Kugel", _auswahl.image);
        location.href = "Sahne.html";
    }
    function auswahlSahne(_event: Event): void {
        console.log(_auswahl.sorte); 
        sessionStorage.setItem("Sahne", _auswahl.image);  
        location.href = "Endprodukt.html";
    } 
}
        
//Aufgabe1.c 
function auswahlZeigen (_auswahl: AlleAuswahl): void {
    let anzeige: HTMLDivElement = <HTMLDivElement> document.getElementById("Auswahl");
    
    if (document.querySelector ("title"). getAttribute("id") == "Waffel") {
        for (let i: number = 0; i < _auswahl.waffeln.length; i++) {  
            let div: HTMLDivElement = divEis (_auswahl.waffeln[i], i);
            anzeige.appendChild(div);
        }
    }
    else if (document.querySelector ("title"). getAttribute("id") == "Kugel") {
        for (let i: number = 0; i < _auswahl.kugeln.length; i++) {  
            let div: HTMLDivElement = divEis (_auswahl.kugeln[i], i);
            anzeige.appendChild(div);
        }
    }
    else if (document.querySelector ("title"). getAttribute("id") == "Sahne") {
        for (let i: number = 0; i < _auswahl.sahnes.length; i++) {  
            let div: HTMLDivElement = divEis (_auswahl.sahnes[i], i);
            anzeige.appendChild(div);
        }
    }
}
//Aufgabe1.a
//Ich weiß nicht was hier falsch ist aber wenn ich die import { auswahlJSON } from "./data"; Zeile nicht drinnen habe wird mir das immer rot unterstrichen
let eis: AlleAuswahl = konvertieren();
        
function konvertieren (): AlleAuswahl {
    let auswahl: AlleAuswahl = JSON.parse(auswahlJSON);
    return (auswahl);
}
auswahlZeigen(eis);    

//Aufgabe1.d
let ausgewählt: HTMLDivElement = <HTMLDivElement> document.getElementById ("Ausgewählt");
ausgewählt.classList.add("Ausgewählt");
       
if (document.querySelector ("title").getAttribute("id") == "Kugel") {
    let auswahlKugel: HTMLImageElement = document.createElement ("img");
    auswahlKugel.src = sessionStorage.getItem("Kugel");
    ausgewählt.appendChild(auswahlKugel);
}
else if (document.querySelector ("title"). getAttribute("id") == "Sahne") { 
    let auswahlSahne: HTMLImageElement = document.createElement ("img");
    auswahlSahne.src = sessionStorage.getItem("Sahne");
    ausgewählt.appendChild(auswahlSahne);
    let auswahlKugel: HTMLImageElement = document.createElement("img");
    auswahlKugel.src = sessionStorage.getItem("Kugel");
    ausgewählt.appendChild(auswahlKugel);
}
//Aufgabe 2:
else if (document.querySelector ("title"). getAttribute("id") == "Ergebnis") { 
    let auswahlWaffel: HTMLImageElement = document.createElement ("img");
    auswahlWaffel.src = sessionStorage.getItem("Waffel");
    ausgewählt.appendChild(auswahlWaffel);
    let auswahlKugel: HTMLImageElement = document.createElement("img");
    auswahlKugel.src = sessionStorage.getItem("Kugel");
    ausgewählt.appendChild(auswahlKugel);
    let auswahlSahne: HTMLImageElement = document.createElement("img");
    auswahlSahne.src = sessionStorage.getItem("Sahne");
    ausgewählt.appendChild(auswahlSahne);
}
}
