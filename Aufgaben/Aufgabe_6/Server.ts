function aufnahmeLMB(_event: Event): void {
    if (_event.type == "click") {
        karteAusgeben(1);
    }
}
function aufnahmeLeertaste(_event: KeyboardEvent): void {
    if (_event.keyCode == 32) {
        karteAusgeben(1);

    }
}
function handkartenAnzeigen(): void {
    aufnahme = "";
    for (let i: number = 0; i < hand.length; i++) 
        aufnahme += `<div class="${hand[i].symbol}"> ${hand[i].symbol} ${hand[i].zahl} </div> `;
    document.getElementById("Handkarten").innerHTML = aufnahme; 
    for (let i: number = 0; i < hand.length; i++) {  
        document.getElementById(hand[i].id.toString()).addEventListener("click", karteAblegen);
    }
    if (ablage.length > 0) {
        let abgelegt: string = `<div class="${ablageStapel[ablageStapel.length - 1].farbe}" id="${ablageStapel[ablageStapel.length - 1].id}"> ${ablageStapel[ablageStapel.length - 1].farbe} ${ablageStapel[ablageStapel.length - 1].wert} </div> `;
        document.getElementById("Ablage").innerHTML = abgelegt;
    }
}
function karteAblegen(_event: Event): void {
    let domCard: HTMLElement = <HTMLElement>_event.target;
    console.log(domCard);
    for (let i: number = 0; i < hand.length; i++) {
        if (hand[i].id == Number(domCard.id)) {
            console.log (hand[i].id);
            ablageStapel.push(hand[i]);
            hand.splice(i, 1);
            kartenAnzeigen();
        }
    }
}
function handkartenSortieren (): void {
    hand.sort(function (a: Karte, b: Karte ): number {
        return a.id - b.id;        
        }
    );
    kartenAnzeigen();
}
/*
function handleKeydown(_event: Event): void {
    if (_event. == )
    console.log(_event);
}
*/
kartenAnzahl();
}