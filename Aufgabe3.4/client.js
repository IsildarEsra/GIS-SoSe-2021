"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonVerschicken = document.getElementById("Versenden");
    buttonVerschicken.addEventListener("click", versenden);
    let buttonAusgabe = document.getElementById("Serveranfrage");
    buttonAusgabe.addEventListener("click", serveranfrage);
    let rueckgabe = document.getElementById("Ausgabe");
    async function versenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/Versenden";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    async function serveranfrage() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/Serveranfrage";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        rueckgabe.innerHTML = ausgabe;
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map