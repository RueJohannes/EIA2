/*
Aufgabe: Aufgabe 0
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 04.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

//Kartendeck
interface Karten {
    zahl: string;
    symbol: string;
}
let karo7: Karten = {
    zahl: "7",
    symbol: "Karo",
}
let herz7: Karten = {
    zahl: "7",
    symbol: "Herz",
}
let pik7: Karten = {
    zahl: "7",
    symbol: "Pik",
}
let kreuz7: Karten = {
    zahl: "7",
    symbol: "Kreuz",
}
let karo8: Karten = {
    zahl: "8",
    symbol: "Karo",
}
let herz8: Karten = {
    zahl: "8",
    symbol: "Herz",
}
let pik8: Karten = {
    zahl: "8",
    symbol: "Pik",
}
let kreuz8: Karten = {
    zahl: "8",
    symbol: "Kreuz",
}
let karo9: Karten = {
    zahl: "9",
    symbol: "Karo",
}
let herz9: Karten = {
    zahl: "9",
    symbol: "Herz",
}
let pik9: Karten = {
    zahl: "9",
    symbol: "Pik",
}
let kreuz9: Karten = {
    zahl: "9",
    symbol: "Kreuz",
}
let karo10: Karten = {
    zahl: "10",
    symbol: "Karo",
}
let herz10: Karten = {
    zahl: "10",
    symbol: "Herz",
}
let pik10: Karten = {
    zahl: "10",
    symbol: "Pik",
}
let kreuz10: Karten = {
    zahl: "10",
    symbol: "Kreuz",
}
let karoB: Karten = {
    zahl: "Bube",
    symbol: "Karo",
}
let herzB: Karten = {
    zahl: "Bube",
    symbol: "Herz",
}
let pikB: Karten = {
    zahl: "Bube",
    symbol: "Pik",
}
let kreuzB: Karten = {
    zahl: "Bube",
    symbol: "Kreuz",
}
let karoD: Karten = {
    zahl: "Dame",
    symbol: "Karo",
}
let herzD: Karten = {
    zahl: "Dame",
    symbol: "Herz",
}
let pikD: Karten = {
    zahl: "Dame",
    symbol: "Pik",
}
let kreuzD: Karten = {
    zahl: "Dame",
    symbol: "Kreuz",
}
let karoK: Karten = {
    zahl: "König",
    symbol: "Karo",
}
let herzK: Karten = {
    zahl: "König",
    symbol: "Herz",
}
let pikK: Karten = {
    zahl: "König",
    symbol: "Pik",
}
let kreuzK: Karten = {
    zahl: "König",
    symbol: "Kreuz",
}
let karoA: Karten = {
    zahl: "Ass",
    symbol: "Karo",
}
let herzA: Karten = {
    zahl: "Ass",
    symbol: "Herz",
}
let pikA: Karten = {
    zahl: "Ass",
    symbol: "Pik",
}
let kreuzA: Karten = {
    zahl: "Ass",
    symbol: "Kreuz",
}

let alleKarten: Karten[] = [karo7, herz7, pik7, kreuz7, karo8, herz8, pik8, kreuz8, karo9, herz9, pik9, kreuz9, karo10, herz10, pik10, kreuz10, karoB, herzB, pikB, kreuzB, karoD, herzD, pikD, kreuzD, karoK, herzK, pikK, kreuzK, karoA, herzA, pikA, kreuzA,];
let aufnahme: Karten [] = [];
let ablage: Karten [] = [];
let hand: Karten [] = [];

function box() {
    let anzahlHandkarten: string = prompt("Mit wie vielen Karten möchtest du spielen?");
    let mengeHandkarten: number = Number(anzahlHandkarten);
    if (mengeHandkarten>0 && mengeHandkarten<33) {
        handkartenZufälligZiehen(mengeHandkarten);
    }
    else {
        console.log("Kartenanzahl nicht möglich")
    }
} 

document.addEventListener("DOMContentLoaded", box)
//Die Funktion Box wird ausfeführt, wenn DOM geladen ist
document.getElementById("card_stack_new").addEventListener("click", aufnahmeLMB);
document.getElementById("Sortieren").addEventListener("click", handkartenSortieren);

function handkartenZufälligZiehen(_mengeHandkarten:number) {
    // _ steht für Parameter. Parameter sind mitgegebene Werte aus anderen Funktionen
    let kartenInHtml: string = "";
    for (let i: number = 0; i < _mengeHandkarten; i++) {
        let zufall: number = Math.floor(Math.random() *alleKarten.length);
        hand.push(alleKarten[zufall]);
        alleKarten.splice(zufall, 1);        
        kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`
    }
    document.getElementById("cardBox 1").innerHTML = kartenInHtml;
}

function aufnahmeLMB(_handkarteZiehen: Event): void {
    if (_handkarteZiehen.type == "click") {
        handkartenZufälligZiehen(1);
    }
}

function aufnahmeLeertaste(_handkarteZiehen: KeyboardEvent): void {
    if (_handkarteZiehen.keyCode == 32) {
        handkartenZufälligZiehen(1);
    }
}

function handkartenAnzeigen(): void {
    let kartenInHtml: string = "";
    for (let i: number = 0; i < hand.length; i++) {     
        kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`
    }
    document.getElementById("cardBox 1").innerHTML = kartenInHtml;
}

function handkartenSortieren (): void {
    hand.sort(function(a, b){return a - b});     
}