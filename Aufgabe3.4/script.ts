import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {


let urlDB: string = "mongodb+srv://dbUser:<password>@isildaresra.6xflr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let port: number = Number(process.env.PORT); 
if (!port)
    port = 8100;

startServer(port); 

function startServer (_port: number | string): void {
    let server: Http.Server = Http. createServer();
    console.log("Gestartet");
    server.listen(_port);
    server.addListener("request", handleRequest);

}

async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> { 
    console.log("Angekommen");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let pathname: string = <string>url.pathname;
        let eingabe: Daten = {vorname: url.query.vorname + "", nachname: url.query.nachname + "", matrikel: url.query.matrikel + ""};

        if (pathname == "/Versenden") { 
        let daten: string = await abspeichern (urlDB, eingabe);
        _response.write(daten);
    }

        else if (pathname == "/Serveranfrage") { 
            let antwort: Daten[] = await dbAuslesen(urlDB);
            console.log(antwort);
            _response.write(JSON.stringify(antwort));
        }     
    }
    _response.end();
}
    
async function abspeichern(_url: string, _eingabe: Daten): Promise <string> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let infos: Mongo.Collection = mongoClient.db("Test").collection("Students");
    infos.insertOne (_eingabe);
    let antwort: string = "Gespeichert";
    return antwort;
}

async function dbAuslesen(_url: string): Promise <Daten[]> {
    let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let infos: Mongo.Collection = mongoClient.db("Test").collection("Students");
    let cursor: Mongo.Cursor = infos.find ();
    let result: Daten[] = await cursor.toArray();
    return result;
}

interface Daten {
    vorname: string;
    nachname: string;
    matrikel: string;
}

}