/*
Aufgabe: Aufgabe 5
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 27.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe5 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);

    let preisDarreichungsform: number = 0;
    let preisSorte: number = 0;
    let preisExtras: number = 0;
    let preisVersandart: number = 0;
    let adresse: string = "";

    function writeHTML() {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML += "<h3>Darreichungsform</h3>";
        for (let i: number = 0; i < darreichungsform.length; i++) {
            childNodeHTML += "<input type='radio' name='Radiogroup' value='" + i + darreichungsform[i].name + " " + darreichungsform[i].preis + " Euro'  id='radio" + i + "' />";
            childNodeHTML += "<label for='check" + i + "'>" + darreichungsform[i].name;
        }
    }