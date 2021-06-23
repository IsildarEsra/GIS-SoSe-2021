"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe34 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe34;
(function (Aufgabe34) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    let databaseUrl = "mongodb+srv://dbUser:<hallogis>@isildaresra.6xflr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    // let databaseUrl: string = "mongodb://localhost:27017";
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt
    let result; //ergenbis in User interface form ausgeben lassen
    async function safe(_url, _eingabe) {
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse = "Daten wurden gespeichert";
        return serverResponse;
    }
    async function get(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 
        let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        let cursor = infos.find(); //datenbvank wirfd durchsucht 
        result = await cursor.toArray(); //datenbank wird ausgelesen
        return result;
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let eingabe = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
            if (url.pathname == "/safeData") {
                let daten = await safe(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/getData") {
                let antwort = await get(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                console.log(antwort);
                _response.write(JSON.stringify(antwort));
            }
        }
        _response.end();
    }
})(Aufgabe34 = exports.Aufgabe34 || (exports.Aufgabe34 = {}));
//# sourceMappingURL=server.js.map