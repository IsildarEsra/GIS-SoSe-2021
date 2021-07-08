"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RezeptTool = void 0;
//imports von externen Abhängigkeiten
const Http = require("http");
const Url = require("url");
const mongodb_1 = require("mongodb");
//db connection url
const uri = "mongodb+srv://dbUser:hallogis@isildaresra.6xflr.mongodb.net/rezepttool?retryWrites=true&w=majority";
//db client
const dbclient = new mongodb_1.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//Wenn erfolgreich connected: Meldung ausgeben
dbclient.connect(() => {
    console.log("DB Connected!");
});
var RezeptTool;
(function (RezeptTool) {
    //Erzeugen Server objekt
    const server = Http.createServer();
    //Listener an das Objekt setzen
    server.addListener("request", handleRequest);
    //auf Port 8100 hören oder einen Port der von heroku zugewiesen wird
    server.listen(process.env.PORT || 8100);
    console.log("Server listening..");
    /**
     * Allgemeiner Requesthandler (nimmt jeden Request vom Client entgegen)
     */
    async function handleRequest(_request, _response) {
        //Rückgabetyp: JSON String
        _response.setHeader("content-type", "application/json");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Nimmt GET Request entgegen
        if (_request.method === "GET") {
            //Response berechnen in getRequest Funktion
            let response = await getRequest(_request);
            _response.write(response);
        }
        //Alle anderen Requestarten bekommen leere Antwort
        else {
            _response.write(`${_request.method} NOT SUPPORTED`);
        }
        _response.end();
    }
    /**
     * Funktion, welche Antwort an den Client berechnet
     * @param request
     * @returns
     */
    async function getRequest(request) {
        //URL Objekt wird erzeugt, um URL dann aufzuteilen in Path und SearchParams
        let url = new Url.URL(request.url, "http://localhost:8100/");
        console.log("POST", url.pathname);
        // protokoll           host             path                 parameter
        //  http://      localhost:8100     /showmyrezepte            ?user=Esra
        //Standardantwort, wenn kein gültiger Path übergeben wird -> z.b. /help
        let response = "error";
        //Antwort berechnen, je nach path
        switch (url.pathname) {
            case "/showrezepte":
                response = await getAllRez(url.searchParams);
                break;
            case "/showlikedrezepte":
                response = await getLikedRez(url.searchParams);
                break;
            case "/showmyrezepte":
                response = await getMyRez(url.searchParams);
                break;
            case "/login":
                response = await login(url.searchParams);
                break;
            case "/register":
                response = await register(url.searchParams);
                break;
            case "/createrezept":
                response = await createRez(url.searchParams);
                break;
            case "/editrezept":
                response = await editRez(url.searchParams);
                break;
            case "/likerezept":
                response = await likeRez(url.searchParams);
                break;
            case "/unlikerezept":
                response = await unlikeRez(url.searchParams);
                break;
            case "/deleterezept":
                response = await deleteRez(url.searchParams);
                break;
        }
        return response;
    }
    /**
     * Einloggen
     * @param params
     * @returns
     */
    async function login(params) {
        let username = params.get("username");
        let password = params.get("password");
        if (!username || !password) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let user = await dbclient.db("rezepttool").collection("user").findOne({ username: username, password: password });
        if (!user) {
            return JSON.stringify({ error: true, message: "Es wurde kein Nutzer mit dieser Name/Password-Kombination gefunden." });
        }
        return JSON.stringify(user);
    }
    /**
     * User registrieren
     * @param params
     * @returns
     */
    async function register(params) {
        let username = params.get("username");
        let password = params.get("password");
        if (!username || !password) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let userExist = await dbclient.db("rezepttool").collection("user").findOne({ username: username });
        if (userExist) {
            return JSON.stringify({ error: true, message: "Der User ist bereits vorhanden." });
        }
        let user = await dbclient.db("rezepttool").collection("user").insertOne({ username: username, password: password });
        if (!user || !user.insertedId) {
            return JSON.stringify({ error: true, message: "Der User konnte nicht angelegt werden." });
        }
        return JSON.stringify({ ok: true });
    }
    /**
     * Ein Rezept erstellen
     * @param params
     * @returns
     */
    async function createRez(params) {
        //parameter aus Request auslesen
        let title = params.get("title");
        let description = params.get("description");
        let ingredients = JSON.parse(params.get("ingredients"));
        let user = params.get("user");
        //parameter validieren
        if (!title || !description || !ingredients || !user) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        //Gibt es das Rezept bereits?
        let rezExist = await dbclient.db("rezepttool").collection("rezepte").findOne({ title: title });
        //Wenn ja: error
        if (rezExist) {
            return JSON.stringify({ error: true, message: "Es gibt bereits ein Rezept mit dem Namen." });
        }
        //Rezept erstellen
        let rez = await dbclient.db("rezepttool").collection("rezepte").insertOne({ title: title, description: description, ingredients: ingredients, user: user });
        //Konnte das Rezept erstellt werden?
        if (!rez || !rez.insertedId) {
            //Nein: error
            return JSON.stringify({ error: true, message: "Das Rezept konnte nicht angelegt werden." });
        }
        //Rezept erfolgreich erstellt
        return JSON.stringify({ ok: true });
    }
    /**
     * Ein Rezept editieren
     * @param params
     * @returns
     */
    async function editRez(params) {
        let title = params.get("title");
        let newTitle = params.get("newTitle");
        let description = params.get("description");
        let ingredients = JSON.parse(params.get("ingredients"));
        if (!title || !description || !ingredients) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let rezExist = await dbclient.db("rezepttool").collection("rezepte").findOne({ title: newTitle });
        if (rezExist) {
            return JSON.stringify({ error: true, message: "Es gibt bereits ein Rezept mit dem Namen." });
        }
        let update = await dbclient.db("rezepttool").collection("rezepte").findOneAndUpdate({ title: title }, { $set: { title: title, description: description, ingredients: ingredients } });
        if (!update) {
            return JSON.stringify({ error: true, message: "Das Rezept konnte nicht editiert werden." });
        }
        return JSON.stringify({ ok: update.ok });
    }
    /**
     * Ein Rezept liken
     * @param params
     * @returns
     */
    async function likeRez(params) {
        let user = params.get("user");
        let rezept = params.get("rezept");
        if (!user || !rezept) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let likeExist = await dbclient.db("rezepttool").collection("userlikesrezept").findOne({ rezeptName: rezept, userName: user });
        if (likeExist) {
            return JSON.stringify({ error: true, message: "Du likest das Rezept bereits." });
        }
        let like = await dbclient.db("rezepttool").collection("userlikesrezept").insertOne({ userName: user, rezeptName: rezept });
        if (!like) {
            return JSON.stringify({ error: true, message: "Like konnte nicht erzeugt werden." });
        }
        return JSON.stringify(like);
    }
    /**
     * Like von einem Rezept entfernen
     * @param params
     * @returns
     */
    async function unlikeRez(params) {
        let user = params.get("user");
        let rezept = params.get("rezept");
        if (!user || !rezept) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        await dbclient.db("rezepttool").collection("userlikesrezept").deleteMany({ rezeptName: rezept, userName: user });
        return JSON.stringify({ ok: true });
    }
    /**
     * Ein Rezept löschen
     * @param params
     * @returns
     */
    async function deleteRez(params) {
        let user = params.get("user");
        let rezept = params.get("rezept");
        if (!rezept || !user) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        await dbclient.db("rezepttool").collection("rezepte").deleteOne({ title: rezept, user: user });
        return JSON.stringify({ ok: true });
    }
    /**
     * Alle Rezepte ausgeben
     * @returns
     */
    async function getAllRez(params) {
        let user = params.get("user");
        if (!user) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let rezepte = await dbclient.db("rezepttool").collection("rezepte").find({}).toArray();
        for (let rezept of rezepte) {
            let liked = await dbclient.db("rezepttool").collection("userlikesrezept").find({ userName: user, rezeptName: rezept.title }).toArray();
            if (liked.length > 0) {
                rezept.liked = true;
            }
            else {
                rezept.liked = false;
            }
        }
        return JSON.stringify(rezepte);
    }
    /**
     * Alle favorisierten Rezepte eines Users ausgeben
     * @param params
     * @returns
     */
    async function getLikedRez(params) {
        let user = params.get("user");
        if (!user) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let likes = await dbclient.db("rezepttool").collection("userlikesrezept").find({ userName: user }).toArray();
        let titles = [];
        for (let like of likes) {
            titles.push(like.rezeptName);
        }
        let rezepte = await dbclient.db("rezepttool").collection("rezepte").find({ title: { $in: titles } }).toArray();
        return JSON.stringify(rezepte);
    }
    /**
     * Alle erstellten Rezepte eines Users ausgeben
     * @param params
     * @returns
     */
    async function getMyRez(params) {
        let user = params.get("user");
        if (!user) {
            return JSON.stringify({ error: true, message: "Es wurden nicht ausreichend Parameter übertragen." });
        }
        let rezepte = await dbclient.db("rezepttool").collection("rezepte").find({ user: user }).toArray();
        return JSON.stringify(rezepte);
    }
})(RezeptTool = exports.RezeptTool || (exports.RezeptTool = {}));
//# sourceMappingURL=server.js.map