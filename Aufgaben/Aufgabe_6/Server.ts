import * as Http from "http"; //Ein Http Protokoll wird importiert

namespace L05_Server { //Code wird durch namespace gruppiert
	console.log("Starting server"); //Auf der Console wird "Starting server" ausgegeben
	let port: number = Number(process.env.PORT); //Variable port vom Typ number wird festgelegt
	if (!port)
		port = 8100; //Port wird auf 8100 festgelegt

	let server: Http.Server = Http.createServer(); //Variable server vom Typ Http.Server wird mit neuem Server erstellt
	server.addListener("request", handleRequest); //Dem Server wird ein Listener hinzugefügt der bei "request" die Funktion handleRequest ausführt
	server.addListener("listening", handleListen); //Dem Server wird ein Listener hinzugefügt der bei "listening" die Funktion handleRequest ausführt
	server.listen(port);

	function handleListen(): void { //Funktion handleListen vom Typ void
		console.log("Listening"); //Auf der Console wird "Listening" ausgegeben
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Funktion handleRequest vom Typ void wird durch die Parametern request und _response vom Typ Http.IncomingMessage und Http.ServerResponse dafür verantwortlich Anfragen anzunehmen und darauf zu reagieren
		console.log("I hear voices!"); //Auf der Console wird "I hear voices!" ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //Der Inhalt ("content-type", "text/html; charset=utf-8") wird bei _response im Header hinzugefügt
		_response.setHeader("Access-Control-Allow-Origin", "*"); //Der Inhalt ("Access-Control-Allow-Origin", "*") wird bei _response im Header hinzugefügt

		_response.write(_request.url); //der Inhalt wird an die URL gesendet

		_response.end(); //_response wird beendet
	}
}