"use strict";
var Aufgabe25;
(function (Aufgabe25) {
    function divEis(_auswahl, _index) {
        let div = document.createElement("div");
        div.classList.add("Eisergebnis");
        let image = document.createElement("img");
        image.src = _auswahl.image;
        div.appendChild(image);
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
        function auswahlWaffel(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Waffelbild", _auswahl.image);
            location.href = "Kugel.html";
        }
        function auswahlKugel(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Kugelbild", _auswahl.image);
            location.href = "Sahne.html";
        }
        function auswahlSahne(_event) {
            console.log(_auswahl.sorte);
            sessionStorage.setItem("Sahnebild", _auswahl.image);
            location.href = "Endprodukt.html";
        }
    }
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
    //b
    async function einlesen(_url) {
        let reaktion = await fetch(_url);
        console.log(reaktion);
        let daten = await reaktion.json();
        auswahlZeigen(daten);
    }
    einlesen("https://isildaresra.github.io/GIS-SoSe-2021/Aufgabe2.5/data.json");
    let ausgewählt = document.getElementById("Ausgewählt");
    ausgewählt.classList.add("AuswahlBisher");
    if (document.querySelector("title").getAttribute("id") == "Kugel") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("Waffelbild");
        ausgewählt.appendChild(auswahlImage);
    }
    else if (document.querySelector("title").getAttribute("id") == "Sahne") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("Waffelbild");
        ausgewählt.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("Kugelbild");
        ausgewählt.appendChild(auswahlImage2);
    }
    else if (document.querySelector("title").getAttribute("id") == "Ergebnis") {
        let auswahlImage = document.createElement("img");
        auswahlImage.src = sessionStorage.getItem("Waffelbild");
        ausgewählt.appendChild(auswahlImage);
        let auswahlImage2 = document.createElement("img");
        auswahlImage2.src = sessionStorage.getItem("Kugelbild");
        ausgewählt.appendChild(auswahlImage2);
        let auswahlImage3 = document.createElement("img");
        auswahlImage3.src = sessionStorage.getItem("Sahnebild");
        ausgewählt.appendChild(auswahlImage3);
    }
})(Aufgabe25 || (Aufgabe25 = {}));
//# sourceMappingURL=script.js.map