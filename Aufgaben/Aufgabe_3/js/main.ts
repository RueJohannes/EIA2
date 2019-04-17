/*
Aufgabe: Aufgabe 4
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 14.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

//Kartendeck

namespace A3 {
    interface Karten {
        zahl: string;
        symbol: string;
        id: number,
    }
    let karo7: Karten = {
        zahl: "7",
        symbol: "Karo",
        id: 2,
    }
    let herz7: Karten = {
        zahl: "7",
        symbol: "Herz",
        id: 3,
    }
    let pik7: Karten = {
        zahl: "7",
        symbol: "Pik",
        id: 4,
    }
    let kreuz7: Karten = {
        zahl: "7",
        symbol: "Kreuz",
        id: 5,
    }
    let karo8: Karten = {
        zahl: "8",
        symbol: "Karo",
        id: 6,
    }
    let herz8: Karten = {
        zahl: "8",
        symbol: "Herz",
        id: 7,
    }
    let pik8: Karten = {
        zahl: "8",
        symbol: "Pik",
        id: 8,
    }
    let kreuz8: Karten = {
        zahl: "8",
        symbol: "Kreuz",
        id: 9,
    }
    let karo9: Karten = {
        zahl: "9",
        symbol: "Karo",
        id: 10,
    }
    let herz9: Karten = {
        zahl: "9",
        symbol: "Herz",
        id: 11,
    }
    let pik9: Karten = {
        zahl: "9",
        symbol: "Pik",
        id: 12,
    }
    let kreuz9: Karten = {
        zahl: "9",
        symbol: "Kreuz",
        id: 13,
    }
    let karo10: Karten = {
        zahl: "10",
        symbol: "Karo",
        id: 14,
    }
    let herz10: Karten = {
        zahl: "10",
        symbol: "Herz",
        id: 15,
    }
    let pik10: Karten = {
        zahl: "10",
        symbol: "Pik",
        id: 16,
    }
    let kreuz10: Karten = {
        zahl: "10",
        symbol: "Kreuz",
        id: 17,
    }
    let karoB: Karten = {
        zahl: "Bube",
        symbol: "Karo",
        id: 18,
    }
    let herzB: Karten = {
        zahl: "Bube",
        symbol: "Herz",
        id: 19,
    }
    let pikB: Karten = {
        zahl: "Bube",
        symbol: "Pik",
        id: 20,
    }
    let kreuzB: Karten = {
        zahl: "Bube",
        symbol: "Kreuz",
        id: 21,
    }
    let karoD: Karten = {
        zahl: "Dame",
        symbol: "Karo",
        id: 22,
    }
    let herzD: Karten = {
        zahl: "Dame",
        symbol: "Herz",
        id: 23,
    }
    let pikD: Karten = {
        zahl: "Dame",
        symbol: "Pik",
        id: 24,
    }
    let kreuzD: Karten = {
        zahl: "Dame",
        symbol: "Kreuz",
        id: 25,
    }
    let karoK: Karten = {
        zahl: "König",
        symbol: "Karo",
        id: 26,
    }
    let herzK: Karten = {
        zahl: "König",
        symbol: "Herz",
        id: 27,
    }
    let pikK: Karten = {
        zahl: "König",
        symbol: "Pik",
        id: 28,
    }
    let kreuzK: Karten = {
        zahl: "König",
        symbol: "Kreuz",
        id: 29,
    }
    let karoA: Karten = {
        zahl: "Ass",
        symbol: "Karo",
        id: 30,
    }
    let herzA: Karten = {
        zahl: "Ass",
        symbol: "Herz",
        id: 31,
    }
    let pikA: Karten = {
        zahl: "Ass",
        symbol: "Pik",
        id: 32,
    }
    let kreuzA: Karten = {
        zahl: "Ass",
        symbol: "Kreuz",
        id: 33,
    }
    
    let alleKarten: Karten[] = [karo7, herz7, pik7, kreuz7, karo8, herz8, pik8, kreuz8, karo9, herz9, pik9, kreuz9, karo10, herz10, pik10, kreuz10, karoB, herzB, pikB, kreuzB, karoD, herzD, pikD, kreuzD, karoK, herzK, pikK, kreuzK, karoA, herzA, pikA, kreuzA,];
    let aufnahme: Karten [] = [];
    let ablage: Karten [] = [];
    let hand: Karten [] = [];
    
    document.addEventListener("DOMContentLoaded", handkartenAnzahlAbfrage)
    //Die Funktion handkartenAnzahlAbfrage wird ausfeführt, wenn DOM geladen ist
    document.getElementById("card_stack_new").addEventListener("click", aufnahmeLMB);
    document.addEventListener("keydown", aufnahmeLeertaste);
    document.getElementById("Sortieren").addEventListener("click", handSortieren);
    
    function handkartenAnzahlAbfrage() {
        let anzahlHandkarten: string = prompt("Mit wie vielen Karten möchtest du spielen?");
        let mengeHandkarten: number = Number(anzahlHandkarten);
        if (mengeHandkarten>0 && mengeHandkarten<33) {
            handkartenZufaelligZiehen(mengeHandkarten);
        }
        else {
            console.log("Kartenanzahl nicht möglich")
        }
    }
    
    function handkartenZufaelligZiehen(_mengeHandkarten:number) {
        // _ steht für Parameter. Parameter sind mitgegebene Werte aus anderen Funktionen
        let kartenInHtml: string = "";
        for (let i: number = 0; i < _mengeHandkarten; i++) {
            let zufall: number = Math.floor(Math.random() *alleKarten.length);
            hand.push(alleKarten[zufall]);
            alleKarten.splice(zufall, 1);
            handkartenAnzeigen();
        }
    }

    function aufnahmeLMB(_handkarteZiehen: Event): void {
        if (_handkarteZiehen.type == "click") {
            handkartenZufaelligZiehen(1);
        }
    }
    
    function aufnahmeLeertaste(_handkarteZiehen: KeyboardEvent): void {
        if (_handkarteZiehen.keyCode == 32) {
            handkartenZufaelligZiehen(1);
        }
    }
    
    function handkartenAnzeigen(): void {
        let kartenInHtml: string = "";
        for (let i: number = 0; i < hand.length; i++) {     
            kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`
        document.getElementById("cardBox 1").innerHTML = kartenInHtml;
        if (ablage.length > 0) {
            let handkarteAbgelegt: string = `<div class="${ablage[ablage.length - 1].symbol}"> ${ablage[ablage.length - 1].symbol} ${ablage[ablage.length - 1].zahl} </div> `;
        document.getElementById("card_stack_old").innerHTML = handkarteAbgelegt;
        }
    }
    
    function handkartenAblegen(_event:Event) {
        let handkarteAuswahl: HTMLElement = <HTMLElement>_event.target;
        console.log(handkarteAuswahl);
        for (let i: number = 0; i < hand.length; i++) {
            if (hand[i].id == Number(handkarteAuswahl.id)) {
                ablage.push(hand[i]);
                hand.splice(i, 1);
                handkartenAnzeigen();
            }
            
        }
    }
    
    function handSortieren (): void {
        hand.sort(function(a: Karten, b: Karten):number {
            return a.id - b.id
            }
        );
        handkartenAnzeigen();     
    }
    
}