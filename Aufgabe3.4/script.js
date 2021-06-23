"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let urlDB = "mongodb+srv://dbUser:<hallogis>@isildaresra.6xflr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Gestartet");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        console.log("Angekommen");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname;
            let eingabe = { vorname: url.query.vorname + "", nachname: url.query.nachname + "", matrikel: url.query.matrikel + "" };
            if (pathname == "/Versenden") {
                let daten = await abspeichern(urlDB, eingabe);
                _response.write(daten);
            }
            else if (pathname == "/Serveranfrage") {
                let antwort = await dbAuslesen(urlDB);
                console.log(antwort);
                _response.write(JSON.stringify(antwort));
            }
        }
        _response.end();
    }
    async function abspeichern(_url, _eingabe) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students");
        infos.insertOne(_eingabe);
        let antwort = "Gespeichert";
        return antwort;
    }
    async function dbAuslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students");
        let cursor = infos.find();
        let result = await cursor.toArray();
        return result;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map