"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let jsonButton = document.getElementById("JSON");
    jsonButton.addEventListener("click", sendJSON);
    let htmlButton = document.getElementById("HTML");
    htmlButton.addEventListener("click", sendHTML);
    let ausgabe = document.getElementById("ausgabe");
    async function sendHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + query.toString();
        let antwort = await fetch(url);
        let response = await antwort.text();
        ausgabe.innerHTML = response;
    }
    async function sendJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + query.toString();
        let antwort = await fetch(url);
        let objektJson = await antwort.json();
        console.log(objektJson);
        ausgabe.innerHTML = objektJson.name;
        console.log(ausgabe);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map