"use strict";
var Aufgabe34;
(function (Aufgabe34) {
    let serverResponse = document.getElementById("serverAntwort");
    let url;
    let query;
    async function saveData() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        url = "https://gissose2021esra.herokuapp.com"; //herokuapp link einfügen als url variable 
        //  url = "http://localhost:8100";
        url += "/safeData" + "?" + query.toString();
        let response = await fetch(url); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
    }
    let sendData = document.getElementById("sendData");
    sendData.addEventListener("click", saveData); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt
    async function getData() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        url = "https://gissose2021esra.herokuapp.com"; //herokuapp link einfügen als url variable 
        // url = "http://localhost:8100";
        url += "/getData";
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;
    }
    let pullData = document.getElementById("getData");
    pullData.addEventListener("click", getData);
})(Aufgabe34 || (Aufgabe34 = {}));
//# sourceMappingURL=script.js.map