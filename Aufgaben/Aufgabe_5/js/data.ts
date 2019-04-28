/*
Aufgabe: Aufgabe 5
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 27.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A5 {
    export interface product {
        name: string;
        preis: number;
    }

    export let darreichungsform: product[] = [{name: "Waffel", preis: 0},{name: "Becher", preis: 0}];
    export let eissorte: product[] = [{name: "Cookie", preis: 1.50}, {name: "Erdbeere", preis: 1.50}, {name: "Joghurt", preis: 1.50}, {name: "Latte Macchiato", preis: 1.50}, {name: "Mango", preis: 1.50}, {name: "Maracuja", preis: 1.50}, {name: "Schokolade", preis: 1.50}, {name: "Stracciatella", preis: 1.50}, {name: "Vanille", preis: 1.50}, {name: "Zitrone", preis: 1.50}];
    export let extras: product[] = [{name: "Sahne", preis: 0.20}, {name: "Erdbeersoße", preis: 0.20}, {name: "Schockosoße", preis: 0.20}, {name: "Sträusel", preis: 0.20}];
    export let versandart: product[] = [{name: "Standardversand", preis: 0.20}, {name: "Expressversand", preis: 0.20}];
}