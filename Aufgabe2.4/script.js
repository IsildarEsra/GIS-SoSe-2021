"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
//Aufgabe1.a
let eis = konvertieren();
function konvertieren() {
    let auswahl = JSON.parse(data_1.auswahlJSON);
    return (auswahl);
}
auswahlZeigen(eis);
function eisDiv(_auswahl, _index) {
    let div = document.createElement("div");
    div.classList.add("Eisergebnis");
    let image = document.createElement("img");
    image.src = _auswahl.image;
    div.appendChild(image);
    let span = document.createElement("span");
    span.innerText = _auswahl.sorte;
    div.appendChild(span);
    let button = document.createElement("button");
    button.innerText = "auswählen";
    button.addEventListener("click", auswahlEndergebnis);
    div.appendChild(button);
    if ((document.querySelector("title").getAttribute("id") == "ZweiteWahl")) {
        button.addEventListener("click", auswahlKugel);
        div.appendChild(button);
        function auswahlKugel(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("ZweiteWahl", _auswahl.image);
        }
    }
    if ((document.querySelector("title").getAttribute("id") == "DritteWahl")) {
        button.addEventListener("click", auswahlTopping);
        div.appendChild(button);
        function auswahlTopping(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("DritteWahl", _auswahl.image);
        }
    }
    return div;
    function auswahlEndergebnis(_event) {
        console.log(_auswahl.sorte);
        //Aufgabe1.b
        sessionStorage.setItem("ErsteWahl", _auswahl.image);
    }
}
//Aufgabe1.c 
function auswahlZeigen(_auswahl) {
    let anzeige = document.getElementById("Auswahl");
    if (document.querySelector("title").getAttribute("id") == "ErsteWahl") {
        for (let i = 0; i < _auswahl.waffeln.length; i++) {
            let div = eisDiv(_auswahl.waffeln[i], i);
            anzeige.appendChild(div);
        }
    }
    else if (document.querySelector("title").getAttribute("id") == "ZweiteWahl") {
        for (let i = 0; i < _auswahl.kugeln.length; i++) {
            let div = eisDiv(_auswahl.kugeln[i], i);
            anzeige.appendChild(div);
        }
    }
    else if (document.querySelector("title").getAttribute("id") == "DritteWahl") {
        for (let i = 0; i < _auswahl.sahnes.length; i++) {
            let div = eisDiv(_auswahl.sahnes[i], i);
            anzeige.appendChild(div);
        }
    }
}
//Aufgabe1.d
let ausgewählt = document.getElementById("Ausgewählt");
ausgewählt.classList.add("auswahlBisher");
if (document.querySelector("title").getAttribute("id") == "ZweiteWahl") {
    let auswahlImage = document.createElement("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    ausgewählt.appendChild(auswahlImage);
}
else if (document.querySelector("title").getAttribute("id") == "DritteWahl") {
    let auswahlImage = document.createElement("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    ausgewählt.appendChild(auswahlImage);
    let auswahlImage2 = document.createElement("img");
    auswahlImage2.src = sessionStorage.getItem("image2");
    ausgewählt.appendChild(auswahlImage2);
}
//Aufgabe 2:
else if (document.querySelector("title").getAttribute("id") == "Ergebnis") {
    let auswahlImage = document.createElement("img");
    auswahlImage.src = sessionStorage.getItem("image1");
    ausgewählt.appendChild(auswahlImage);
    let auswahlImage2 = document.createElement("img");
    auswahlImage2.src = sessionStorage.getItem("image2");
    ausgewählt.appendChild(auswahlImage2);
    let auswahlImage3 = document.createElement("img");
    auswahlImage3.src = sessionStorage.getItem("image3");
    ausgewählt.appendChild(auswahlImage3);
}
//# sourceMappingURL=script.js.map