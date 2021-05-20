namespace Aufgabe25 {

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
    
    let image: HTMLImageElement = document.createElement("img");
    image.src = _auswahl.image;
    div.appendChild(image);
    
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
    function auswahlWaffel(_event: Event): void {
        console.log(_auswahl.sorte); 
        sessionStorage.setItem("Waffelbild", _auswahl.image); 
        location.href = "Kugel.html"; 
    }
    function auswahlKugel(_event: Event): void {
        console.log(_auswahl.sorte);
        sessionStorage.setItem("Kugelbild", _auswahl.image);
        location.href = "Sahne.html";
    }
    function auswahlSahne(_event: Event): void {
        console.log(_auswahl.sorte); 
        sessionStorage.setItem("Sahnebild", _auswahl.image);  
        location.href = "Endprodukt.html";
    } 
}
        
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

let eis: AlleAuswahl = konvertieren();
        
function konvertieren (): AlleAuswahl {
    let auswahl: AlleAuswahl = JSON.parse(teileJSON);
    return (auswahl);
}
auswahlZeigen(eis);    


let ausgewählt: HTMLDivElement = <HTMLDivElement> document.getElementById ("Ausgewählt");
ausgewählt.classList.add("AuswahlBisher");
       
if (document.querySelector ("title").getAttribute("id") == "Kugel") {
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("Waffelbild");
    ausgewählt.appendChild(auswahlImage);
}
else if (document.querySelector ("title"). getAttribute("id") == "Sahne") { 
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("Waffelbild");
    ausgewählt.appendChild(auswahlImage);
    let auswahlImage2: HTMLImageElement = document.createElement("img");
    auswahlImage2.src = sessionStorage.getItem("Kugelbild");
    ausgewählt.appendChild(auswahlImage2);
}

else if (document.querySelector ("title"). getAttribute("id") == "Ergebnis") { 
    let auswahlImage: HTMLImageElement = document.createElement ("img");
    auswahlImage.src = sessionStorage.getItem("Waffelbild");
    ausgewählt.appendChild(auswahlImage);
    let auswahlImage2: HTMLImageElement = document.createElement("img");
    auswahlImage2.src = sessionStorage.getItem("Kugelbild");
    ausgewählt.appendChild(auswahlImage2);
    let auswahlImage3: HTMLImageElement = document.createElement("img");
    auswahlImage3.src = sessionStorage.getItem("Sahnebild");
    ausgewählt.appendChild(auswahlImage3);
}
}
