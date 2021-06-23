import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe34 {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);


    interface User {
        password: string;
        benutzername: string;
        email: string;
    } //Interface für user angelegt

    let databaseUrl: string = "mongodb+srv://dbUser:<hallogis>@isildaresra.6xflr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    // let databaseUrl: string = "mongodb://localhost:27017";
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt

    let result: User[]; //ergenbis in User interface form ausgeben lassen

    async function safe(_url: string, _eingabe: User): Promise<string> {
        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse: string = "Daten wurden gespeichert";
        return serverResponse;
    }

    async function get(_url: string): Promise<User[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        let cursor: Mongo.Cursor = infos.find(); //datenbvank wirfd durchsucht 
        result = await cursor.toArray(); //datenbank wird ausgelesen
        return result;

    }



    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");



        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let eingabe: User = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };

            if (url.pathname == "/safeData") {
                let daten: string = await safe(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/getData") {
                let antwort: User[] = await get(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                console.log(antwort);
                _response.write(JSON.stringify(antwort));
            }
        }



        _response.end();

    }


}