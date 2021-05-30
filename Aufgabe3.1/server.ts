import * as Http from "http";

export namespace Aufgabe3_1 {
    console.log("Starting server"); //Ausgabe Konsole
    let port: number = Number(process.env.PORT); //port eine Nummer gegeben
    if (!port)
        port = 8100; //port den Wert 8100 gegeben

    let server: Http.Server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Funktion handleRequest wird aufgerufen
    server.addListener("listening", handleListen); //Funktion handleListen wird aufgerufen
    server.listen(port); //Server startet

    function handleListen(): void {
        console.log("Listening"); //Listening wird ausgegeben wenn die Funktion handleListen aufgerufen wird
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //Ausgabe Konsole
        console.log(_request.url); //Ausgabe Server
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften
        _response.setHeader("Access-Control-Allow-Origin", "*"); //erlaubt, dass jeder Zugriff hat 
        _response.write(_request.url); //url wird zurückgegeben als response
        _response.end(); //beendet
    }
}