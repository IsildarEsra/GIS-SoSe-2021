"use strict";
//Bei mir werden die Bilder nicht angezeigt und ich weiß nicht, ob es an meinem JSON-String liegt, oder bei den Funktionen, die sie anzeigen sollen :( Oder ob ich einfach nur den Pfad zu meinen Bildern falsch getippt hab
var Eis;
(function (Eis) {
    function divEis(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("Eisergebnis");
        let img = document.createElement("img");
        img.src = _auswahl.image;
        div.appendChild(img);
        let span = document.createElement("span");
        span.innerText = _auswahl.sorte;
        div.appendChild(span);
        let button = document.createElement("button");
        button.innerText = "wahl";
        div.appendChild(button);
        if ((document.querySelector("title").getAttribute("id") == "Waffel")) {
            button.addEventListener("click", auswahlWaffel);
        }
        if ((document.querySelector("title").getAttribute("id") == "Kugel")) {
            button.addEventListener("click", auswahlKugel);
        }
        if ((document.querySelector("title").getAttribute("id") == "Sahne")) {
            button.addEventListener("click", auswahlSahne);
        }
        return div;
        //Daten in SessionStorage speichern
        function auswahlWaffel(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Waffel", _auswahl.image);
            location.href = "Kugel.html";
        }
        function auswahlKugel(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Kugel", _auswahl.image);
            location.href = "Sahne.html";
        }
        function auswahlSahne(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Sahne", _auswahl.image);
            location.href = "Endprodukt.html";
        }
    }
    //Aufgabe1.c 
    function auswahlZeigen(_auswahl) {
        let anzeige = document.getElementById("Auswahl");
        if (document.querySelector("title").getAttribute("id") == "Waffel") {
            for (let i = 0; i < _auswahl.waffeln.length; i++) {
                let div = divEis(_auswahl.waffeln[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Kugel") {
            for (let i = 0; i < _auswahl.kugeln.length; i++) {
                let div = divEis(_auswahl.kugeln[i], i);
                anzeige.appendChild(div);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Sahne") {
            for (let i = 0; i < _auswahl.sahnes.length; i++) {
                let div = divEis(_auswahl.sahnes[i], i);
                anzeige.appendChild(div);
            }
        }
    }
    //Aufgabe1.a
    //Ich weiß nicht was hier falsch ist aber wenn ich die import { auswahlJSON } from "./data"; Zeile nicht drinnen habe wird mir das immer rot unterstrichen
    let eis = konvertieren();
    function konvertieren() {
        let auswahl = JSON.parse(Eis.auswahlJSON);
        return (auswahl);
    }
    auswahlZeigen(eis);
    //Aufgabe1.d
    let ausgewählt = document.getElementById("Ausgewählt");
    ausgewählt.classList.add("Ausgewählt");
    if (document.querySelector("title").getAttribute("id") == "Kugel") {
        let auswahlKugel = document.createElement("img");
        auswahlKugel.src = sessionStorage.getItem("Kugel");
        ausgewählt.appendChild(auswahlKugel);
    }
    else if (document.querySelector("title").getAttribute("id") == "Sahne") {
        let auswahlSahne = document.createElement("img");
        auswahlSahne.src = sessionStorage.getItem("Sahne");
        ausgewählt.appendChild(auswahlSahne);
        let auswahlKugel = document.createElement("img");
        auswahlKugel.src = sessionStorage.getItem("Kugel");
        ausgewählt.appendChild(auswahlKugel);
    }
    //Aufgabe 2:
    else if (document.querySelector("title").getAttribute("id") == "Ergebnis") {
        let auswahlWaffel = document.createElement("img");
        auswahlWaffel.src = sessionStorage.getItem("Waffel");
        ausgewählt.appendChild(auswahlWaffel);
        let auswahlKugel = document.createElement("img");
        auswahlKugel.src = sessionStorage.getItem("Kugel");
        ausgewählt.appendChild(auswahlKugel);
        let auswahlSahne = document.createElement("img");
        auswahlSahne.src = sessionStorage.getItem("Sahne");
        ausgewählt.appendChild(auswahlSahne);
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=script.js.map