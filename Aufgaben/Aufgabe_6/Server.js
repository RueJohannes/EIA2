"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Ein Http Protokoll wird importiert
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //Auf der Console wird "Starting server" ausgegeben
    let port = Number(process.env.PORT); //Variable port vom Typ number wird festgelegt
    if (!port)
        port = 8100; //Port wird auf 8100 festgelegt
    let server = Http.createServer(); //Variable server vom Typ Http.Server wird mit neuem Server erstellt
    server.addListener("request", handleRequest); //Dem Server wird ein Listener hinzugefügt der bei "request" die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); //Dem Server wird ein Listener hinzugefügt der bei "listening" die Funktion handleRequest ausführt
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Auf der Console wird "Listening" ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log(_request.url); //Auf der Console wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Der Inhalt ("content-type", "text/html; charset=utf-8") wird bei _response im Header hinzugefügt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Der Inhalt ("Access-Control-Allow-Origin", "*") wird bei _response im Header hinzugefügt
        _response.write(_request.url); //der Inhalt der URL wird auf die Seite geschrieben
        _response.end(); //_response wird beendet
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map