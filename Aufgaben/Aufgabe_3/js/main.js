/*
Aufgabe: Aufgabe 4
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 14.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
//Kartendeck
var A3;
(function (A3) {
    let karo7 = {
        zahl: "7",
        symbol: "Karo",
        id: 2,
    };
    let herz7 = {
        zahl: "7",
        symbol: "Herz",
        id: 3,
    };
    let pik7 = {
        zahl: "7",
        symbol: "Pik",
        id: 4,
    };
    let kreuz7 = {
        zahl: "7",
        symbol: "Kreuz",
        id: 5,
    };
    let karo8 = {
        zahl: "8",
        symbol: "Karo",
        id: 6,
    };
    let herz8 = {
        zahl: "8",
        symbol: "Herz",
        id: 7,
    };
    let pik8 = {
        zahl: "8",
        symbol: "Pik",
        id: 8,
    };
    let kreuz8 = {
        zahl: "8",
        symbol: "Kreuz",
        id: 9,
    };
    let karo9 = {
        zahl: "9",
        symbol: "Karo",
        id: 10,
    };
    let herz9 = {
        zahl: "9",
        symbol: "Herz",
        id: 11,
    };
    let pik9 = {
        zahl: "9",
        symbol: "Pik",
        id: 12,
    };
    let kreuz9 = {
        zahl: "9",
        symbol: "Kreuz",
        id: 13,
    };
    let karo10 = {
        zahl: "10",
        symbol: "Karo",
        id: 14,
    };
    let herz10 = {
        zahl: "10",
        symbol: "Herz",
        id: 15,
    };
    let pik10 = {
        zahl: "10",
        symbol: "Pik",
        id: 16,
    };
    let kreuz10 = {
        zahl: "10",
        symbol: "Kreuz",
        id: 17,
    };
    let karoB = {
        zahl: "Bube",
        symbol: "Karo",
        id: 18,
    };
    let herzB = {
        zahl: "Bube",
        symbol: "Herz",
        id: 19,
    };
    let pikB = {
        zahl: "Bube",
        symbol: "Pik",
        id: 20,
    };
    let kreuzB = {
        zahl: "Bube",
        symbol: "Kreuz",
        id: 21,
    };
    let karoD = {
        zahl: "Dame",
        symbol: "Karo",
        id: 22,
    };
    let herzD = {
        zahl: "Dame",
        symbol: "Herz",
        id: 23,
    };
    let pikD = {
        zahl: "Dame",
        symbol: "Pik",
        id: 24,
    };
    let kreuzD = {
        zahl: "Dame",
        symbol: "Kreuz",
        id: 25,
    };
    let karoK = {
        zahl: "König",
        symbol: "Karo",
        id: 26,
    };
    let herzK = {
        zahl: "König",
        symbol: "Herz",
        id: 27,
    };
    let pikK = {
        zahl: "König",
        symbol: "Pik",
        id: 28,
    };
    let kreuzK = {
        zahl: "König",
        symbol: "Kreuz",
        id: 29,
    };
    let karoA = {
        zahl: "Ass",
        symbol: "Karo",
        id: 30,
    };
    let herzA = {
        zahl: "Ass",
        symbol: "Herz",
        id: 31,
    };
    let pikA = {
        zahl: "Ass",
        symbol: "Pik",
        id: 32,
    };
    let kreuzA = {
        zahl: "Ass",
        symbol: "Kreuz",
        id: 33,
    };
    let alleKarten = [karo7, herz7, pik7, kreuz7, karo8, herz8, pik8, kreuz8, karo9, herz9, pik9, kreuz9, karo10, herz10, pik10, kreuz10, karoB, herzB, pikB, kreuzB, karoD, herzD, pikD, kreuzD, karoK, herzK, pikK, kreuzK, karoA, herzA, pikA, kreuzA,];
    let aufnahme = [];
    let ablage = [];
    let hand = [];
    document.addEventListener("DOMContentLoaded", handkartenAnzahlAbfrage);
    //Die Funktion handkartenAnzahlAbfrage wird ausfeführt, wenn DOM geladen ist
    document.getElementById("card_stack_new").addEventListener("click", aufnahmeLMB);
    document.addEventListener("keydown", aufnahmeLeertaste);
    document.getElementById("Sortieren").addEventListener("click", handSortieren);
    function handkartenAnzahlAbfrage() {
        let anzahlHandkarten = prompt("Mit wie vielen Karten möchtest du spielen?");
        let mengeHandkarten = Number(anzahlHandkarten);
        if (mengeHandkarten > 0 && mengeHandkarten < 33) {
            handkartenZufaelligZiehen(mengeHandkarten);
        }
        else {
            console.log("Kartenanzahl nicht möglich");
        }
    }
    function handkartenZufaelligZiehen(_mengeHandkarten) {
        // _ steht für Parameter. Parameter sind mitgegebene Werte aus anderen Funktionen
        let kartenInHtml = "";
        for (let i = 0; i < _mengeHandkarten; i++) {
            let zufall = Math.floor(Math.random() * alleKarten.length);
            hand.push(alleKarten[zufall]);
            alleKarten.splice(zufall, 1);
            handkartenAnzeigen();
        }
    }
    function aufnahmeLMB(_handkarteZiehen) {
        if (_handkarteZiehen.type == "click") {
            handkartenZufaelligZiehen(1);
        }
    }
    function aufnahmeLeertaste(_handkarteZiehen) {
        if (_handkarteZiehen.keyCode == 32) {
            handkartenZufaelligZiehen(1);
        }
    }
    function handkartenAnzeigen() {
        let kartenInHtml = "";
        for (let i = 0; i < hand.length; i++) {
            kartenInHtml += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl}</div>`;
            document.getElementById("cardBox 1").innerHTML = kartenInHtml;
            if (ablage.length > 0) {
                let handkarteAbgelegt = `<div class="${ablage[ablage.length - 1].symbol}"> ${ablage[ablage.length - 1].symbol} ${ablage[ablage.length - 1].zahl} </div> `;
                document.getElementById("card_stack_old").innerHTML = handkarteAbgelegt;
            }
        }
        function handkartenAblegen(_event) {
            let handkarteAuswahl = _event.target;
            console.log(handkarteAuswahl);
            for (let i = 0; i < hand.length; i++) {
                if (hand[i].id == Number(handkarteAuswahl.id)) {
                    ablage.push(hand[i]);
                    hand.splice(i, 1);
                    handkartenAnzeigen();
                }
            }
        }
        function handSortieren() {
            hand.sort(function (a, b) {
                return a.id - b.id;
            });
            handkartenAnzeigen();
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=main.js.map