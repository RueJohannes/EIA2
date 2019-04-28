/*
Aufgabe: Aufgabe 5
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 27.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    let preisDarreichungsform = 0;
    let preisSorte = 0;
    let preisExtras = 0;
    let preisVersandart = 0;
    let adresse = "";
    function writeHTML() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML += "<h3>Darreichungsform</h3>";
        for (let i = 0; i < darreichungsform.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + darreichungsform[i].name + " " + darreichungsform[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + darreichungsform[i].name;
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main.js.map