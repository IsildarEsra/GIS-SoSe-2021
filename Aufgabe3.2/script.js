"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let jsonButton = document.getElementById("JSON");
    jsonButton.addEventListener("click", sendJSON);
    let htmlButton = document.getElementById("HTML");
    htmlButton.addEventListener("click", sendHTML);
    let rueckgabe = document.getElementById("ausgabe");
    async function sendHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + query.toString();
        let response = await fetch(url);
        let antwort = await response.text();
        rueckgabe.innerHTML = antwort;
    }
    async function sendJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021esra.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + query.toString();
        let response = await fetch(url);
        let objektJson = await response.json();
        console.log(objektJson);
        rueckgabe.innerHTML = objektJson.name;
        console.log(rueckgabe);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map