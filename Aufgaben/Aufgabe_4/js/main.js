/*
Aufgabe: Aufgabe 4
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 20.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    let sorteCookie = {
        name: "Cookie",
        id: 1,
    };
    let sorteErdbeere = {
        name: "Erdbeere",
        id: 2,
    };
    let sorteHaselnuss = {
        name: "Haselnuss7",
        id: 3,
    };
    let sorteJoghurt = {
        name: "Joghurt",
        id: 4,
    };
    let sorteLatteMacchiato = {
        name: "Latte Macchiato",
        id: 5,
    };
    let sorteMango = {
        name: "Mango",
        id: 6,
    };
    let sorteMaracuja = {
        name: "Maracuja",
        id: 7,
    };
    let sorteSchokolade = {
        name: "Schokolade",
        id: 8,
    };
    let sorteStracciatella = {
        name: "Stracciatella",
        id: 9,
    };
    let sorteVanille = {
        name: "Vanille",
        id: 10,
    };
    let zusatzSahne = {
        name: "Sahne",
        id: 11,
    };
    let zusatzErdbeersosse = {
        name: "Erdbeersoße",
        id: 12,
    };
    let zusatzSchokososse = {
        name: "Schokosoße",
        id: 13,
    };
    let zusatzStrauusel = {
        name: "Sträusel",
        id: 14,
    };
    let Sorten = [sorteCookie, sorteErdbeere, sorteHaselnuss, sorteJoghurt, sorteLatteMacchiato, sorteMango, sorteMaracuja, sorteSchokolade, sorteStracciatella, sorteVanille,];
    let Zusätze = [zusatzSahne, zusatzErdbeersosse, zusatzSchokososse, zusatzStrauusel,];
    let Zusammenfassung = [];
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        if (target.name == "Stepper") {
            let meter = document.getElementsByTagName("meter")[0];
            meter.value = parseFloat(target.value);
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=main.js.map