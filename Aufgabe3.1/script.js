"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log(entry[0]);
            console.log(entry[1]);
        }
        let query = new URLSearchParams(formData); //Was kann ich statt 'any' benutzen in diesem Fall?
        let _url = "https://gissose2021esra.herokuapp.com/"; //Ich werde Hilfe hier brauchen es hat bei mir nicht so geklappt wie in der Anleitung :(
        _url = _url + query.toString();
        console.log(_url);
        let response = await fetch(_url);
        let antwort = await response.text();
        console.log(antwort);
        let rueckgabe = document.getElementById("ausgabe");
        rueckgabe.innerText = antwort;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData);
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map