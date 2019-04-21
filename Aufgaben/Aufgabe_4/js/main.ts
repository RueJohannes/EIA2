/*
Aufgabe: Aufgabe 4
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 20.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A4 {

    interface Konfiguration {
        name: string;
        id: number,
    }
    let sorteCookie: Konfiguration = {
        name: "Cookie",
        id: 1,
    }
    let sorteErdbeere: Konfiguration = {
        name: "Erdbeere",
        id: 2,
    }
    let sorteHaselnuss: Konfiguration = {
        name: "Haselnuss7",
        id: 3,
    }
    let sorteJoghurt: Konfiguration = {
        name: "Joghurt",
        id: 4,
    }
    let sorteLatteMacchiato: Konfiguration = {
        name: "Latte Macchiato",
        id: 5,
    }
    let sorteMango: Konfiguration = {
        name: "Mango",
        id: 6,
    }
    let sorteMaracuja: Konfiguration = {
        name: "Maracuja",
        id: 7,
    }
    let sorteSchokolade: Konfiguration = {
        name: "Schokolade",
        id: 8,
    }
    let sorteStracciatella: Konfiguration = {
        name: "Stracciatella",
        id: 9,
    }
    let sorteVanille: Konfiguration = {
        name: "Vanille",
        id: 10,
    }
    let zusatzSahne: Konfiguration = {
        name: "Sahne",
        id: 11,
    }
    let zusatzErdbeersosse: Konfiguration = {
        name: "Erdbeersoße",
        id: 12,
    }
    let zusatzSchokososse: Konfiguration = {
        name: "Schokosoße",
        id: 13,
    }
    let zusatzStrauusel: Konfiguration = {
        name: "Sträusel",
        id: 14,
    }
    
    let Sorten: Konfiguration[] = [sorteCookie, sorteErdbeere, sorteHaselnuss, sorteJoghurt, sorteLatteMacchiato, sorteMango, sorteMaracuja, sorteSchokolade, sorteStracciatella, sorteVanille,];
    let Zusätze: Konfiguration [] = [zusatzSahne, zusatzErdbeersosse, zusatzSchokososse, zusatzStrauusel,];
    let Zusammenfassung: Konfiguration [] = [];

    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        console.log(_event);
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        if (target.name == "Stepper") {
            let meter: HTMLMeterElement = <HTMLMeterElement>document.getElementsByTagName("meter")[0];
            meter.value = parseFloat(target.value);
        }
    }
}