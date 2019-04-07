/*
Aufgabe: Aufgabe 0
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 22.03.2019

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
    zahl: "B",
    symbol: "Karo",
}
let herzB: Karten = {
    zahl: "B",
    symbol: "Herz",
}
let pikB: Karten = {
    zahl: "B",
    symbol: "Pik",
}
let kreuzB: Karten = {
    zahl: "B",
    symbol: "Kreuz",
}
let karoD: Karten = {
    zahl: "D",
    symbol: "Karo",
}
let herzD: Karten = {
    zahl: "D",
    symbol: "Herz",
}
let pikD: Karten = {
    zahl: "D",
    symbol: "Pik",
}
let kreuzD: Karten = {
    zahl: "D",
    symbol: "Kreuz",
}
let karoK: Karten = {
    zahl: "K",
    symbol: "Karo",
}
let herzK: Karten = {
    zahl: "K",
    symbol: "Herz",
}
let pikK: Karten = {
    zahl: "K",
    symbol: "Pik",
}
let kreuzK: Karten = {
    zahl: "K",
    symbol: "Kreuz",
}
let karoA: Karten = {
    zahl: "A",
    symbol: "Karo",
}
let herzA: Karten = {
    zahl: "A",
    symbol: "Herz",
}
let pikA: Karten = {
    zahl: "A",
    symbol: "Pik",
}
let kreuzA: Karten = {
    zahl: "A",
    symbol: "Kreuz",
}

function Box() {
    var anzahlHandkarten=prompt("Mit wie vielen Karten möchtest du spielen?");
    var node: HTMLElement=document.getElementById("frage");
} 
document.addEventListener("DOMContentLoaded", Box)