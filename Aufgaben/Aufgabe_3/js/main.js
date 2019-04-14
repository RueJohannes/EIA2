/*
Aufgabe: Aufgabe 0
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 04.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let karo7 = {
    zahl: "7",
    symbol: "Karo",
};
let herz7 = {
    zahl: "7",
    symbol: "Herz",
};
let pik7 = {
    zahl: "7",
    symbol: "Pik",
};
let kreuz7 = {
    zahl: "7",
    symbol: "Kreuz",
};
let karo8 = {
    zahl: "8",
    symbol: "Karo",
};
let herz8 = {
    zahl: "8",
    symbol: "Herz",
};
let pik8 = {
    zahl: "8",
    symbol: "Pik",
};
let kreuz8 = {
    zahl: "8",
    symbol: "Kreuz",
};
let karo9 = {
    zahl: "9",
    symbol: "Karo",
};
let herz9 = {
    zahl: "9",
    symbol: "Herz",
};
let pik9 = {
    zahl: "9",
    symbol: "Pik",
};
let kreuz9 = {
    zahl: "9",
    symbol: "Kreuz",
};
let karo10 = {
    zahl: "10",
    symbol: "Karo",
};
let herz10 = {
    zahl: "10",
    symbol: "Herz",
};
let pik10 = {
    zahl: "10",
    symbol: "Pik",
};
let kreuz10 = {
    zahl: "10",
    symbol: "Kreuz",
};
let karoB = {
    zahl: "Bube",
    symbol: "Karo",
};
let herzB = {
    zahl: "Bube",
    symbol: "Herz",
};
let pikB = {
    zahl: "Bube",
    symbol: "Pik",
};
let kreuzB = {
    zahl: "Bube",
    symbol: "Kreuz",
};
let karoD = {
    zahl: "Dame",
    symbol: "Karo",
};
let herzD = {
    zahl: "Dame",
    symbol: "Herz",
};
let pikD = {
    zahl: "Dame",
    symbol: "Pik",
};
let kreuzD = {
    zahl: "Dame",
    symbol: "Kreuz",
};
let karoK = {
    zahl: "König",
    symbol: "Karo",
};
let herzK = {
    zahl: "König",
    symbol: "Herz",
};
let pikK = {
    zahl: "König",
    symbol: "Pik",
};
let kreuzK = {
    zahl: "König",
    symbol: "Kreuz",
};
let karoA = {
    zahl: "Ass",
    symbol: "Karo",
};
let herzA = {
    zahl: "Ass",
    symbol: "Herz",
};
let pikA = {
    zahl: "Ass",
    symbol: "Pik",
};
let kreuzA = {
    zahl: "Ass",
    symbol: "Kreuz",
};
let alleKarten = [karo7, herz7, pik7, kreuz7, karo8, herz8, pik8, kreuz8, karo9, herz9, pik9, kreuz9, karo10, herz10, pik10, kreuz10, karoB, herzB, pikB, kreuzB, karoD, herzD, pikD, kreuzD, karoK, herzK, pikK, kreuzK, karoA, herzA, pikA, kreuzA,];
let aufnahme = [];
let ablage = [];
let hand = [];
function box() {
    let anzahlHandkarten = prompt("Mit wie vielen Karten möchtest du spielen?");
    let mengeHandkarten = Number(anzahlHandkarten);
    if (mengeHandkarten > 0 && mengeHandkarten < 33) {
        handkartenZufälligZiehen(mengeHandkarten);
    }
    else {
        console.log("Kartenanzahl nicht möglich");
    }
}
document.addEventListener("DOMContentLoaded", box);
//Die Funktion Box wird ausfeführt, wenn DOM geladen ist
document.getElementById("card_stack_new").addEventListener("click", aufnahmeLMB);
document.getElementById("Sortieren").addEventListener("click", handkartenSortieren);
function handkartenZufälligZiehen(_mengeHandkarten) {
    // _ steht für Parameter. Parameter sind mitgegebene Werte aus anderen Funktionen
    let kartenInHtml = "";
    for (let i = 0; i < _mengeHandkarten; i++) {
        let zufall = Math.floor(Math.random() * alleKarten.length);
        hand.push(alleKarten[zufall]);
        alleKarten.splice(zufall, 1);
        kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`;
    }
    document.getElementById("cardBox 1").innerHTML = kartenInHtml;
}
function aufnahmeLMB(_handkarteZiehen) {
    if (_handkarteZiehen.type == "click") {
        handkartenZufälligZiehen(1);
    }
}
function aufnahmeLeertaste(_handkarteZiehen) {
    if (_handkarteZiehen.keyCode == 32) {
        handkartenZufälligZiehen(1);
    }
}
function handkartenAnzeigen() {
    let kartenInHtml = "";
    for (let i = 0; i < hand.length; i++) {
        kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`;
    }
    document.getElementById("cardBox 1").innerHTML = kartenInHtml;
}
function handkartenSortieren() {
    hand.sort(function (a, b) { return a - b; });
}
//# sourceMappingURL=main.js.map