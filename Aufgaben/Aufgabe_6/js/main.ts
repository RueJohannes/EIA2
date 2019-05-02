/*
Aufgabe: Aufgabe 5
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 27.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A5 {

    //Wenn die Seite lädt wird die Funktion init aufgerufen
    window.addEventListener("load", init);
    
    //SERVER
    let address: string = "http://localhost:8100";

    /**
     * Funktion generateSite wird mit dem Parameter data von data.ts aufgerufen
     */
    function init(): void {
        generateSite(data);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            document.getElementById("button").addEventListener("click", bestellungPrüfen);
            sendRequestWithCustomData(fieldset.ha);
        }
    }
    
    //SERVER
    function sendRequestWithCustomData(_product: Products): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    /**
     * 
     * @param _data mein Datensatz an Produktkategorien
     * @var kategoriePos Position/Name des Arrays welches Produkte der Produktkategorien enthält
     * @var value ist ein Array aus Produkten vom Array _data an der Position kategoriePos
     * @var div wird erstellt und an fieldset angehangen
     * div wird Text zugewiesen (kategoriePos)
     * 
     */
    function generateSite(_data: fieldsetboxes): void {
        document.getElementById("inhalt").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Auswahl";
            
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let kategoriePos in _data) {
            let value: Products[] = _data[kategoriePos];
            let div: HTMLDivElement = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = kategoriePos;

            //für jedes productPos in Value(=eine Produktkategorie) wird die function displaySite aufgerufen
            for (let productsPos in value) {
                displaySite(value[productsPos]);
            }
            
        }
    }

    /**
     * @param _product ist ein übergebenes Produkt
     * Für Produkte des Types number, checkbox radio werden die jeweiligen Elemente erstellt und Atribute gesetzt
     */
    function displaySite(_product: Products): void {
        if (_product.type == "number") {
            let input: HTMLInputElement = document.createElement("input");
            fieldset.appendChild(input);
            input.before(_product.id);
            input.setAttribute("name", _product.id);
            input.setAttribute("type", _product.type);
            input.setAttribute("id", _product.id);
            input.setAttribute("value", "0");
            input.setAttribute("step", "1");
            input.setAttribute("max", "5");
            input.setAttribute("min", "0");
            input.setAttribute("preis", _product.value);

        } else if (_product.type == "checkbox") {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _product.id;
            label.setAttribute("for", _product.id);
            input.setAttribute("type", _product.type);
            input.setAttribute("id", _product.id);
            input.setAttribute("name", _product.id);
            input.setAttribute("preis", _product.value);

        } else if (_product.type == "radio") {
            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _product.id;
            label.setAttribute("for", _product.id);
            input.setAttribute("type", _product.type);
            input.setAttribute("id", _product.id);
            input.setAttribute("name", _product.name);
            input.setAttribute("preis", _product.value);
        } else {
            console.log("Der Produkttyp ist ungültig!");
        }
    }


    /**
     * 
     */
    function handleChange(): void {
        let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let sum: number = 0;
        
        document.getElementById("extras2").innerHTML = "";
        document.getElementById("darreichungsform2").innerHTML = "";
        document.getElementById("versandart2").innerHTML = "";
        document.getElementById("eissorte2").innerHTML = "";

        for (let i: number = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].checked == true) {
                sum += Number(allBoxes[i].getAttribute("preis"));
                if (allBoxes[i].type == "checkbox") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}, `;
                    document.getElementById("extras2").appendChild(ziel);
                } else if (allBoxes[i].name == "darreichungsform") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("darreichungsform2").appendChild(ziel);
                } else if (allBoxes[i].name == "versandart") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("versandart2").appendChild(ziel);
                }
            }
            if (allBoxes[i].type == "number" && Number(allBoxes[i].value) > 0) {
                sum += (Number(allBoxes[i].getAttribute("preis")) * Number(allBoxes[i].value));
                let ziel = document.createElement("li");
                ziel.innerHTML = `${allBoxes[i].value}x ${allBoxes[i].name}, `;
                document.getElementById("eissorte2").appendChild(ziel);
            }
            document.getElementById("preis").innerHTML = `Preis:   ${sum} €`;
        }

    }


    function bestellungPrüfen(): void {
        let allBoxes: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let missing: string = "";
        let eischecked: boolean = false;
        let versandartchecked: boolean = false;
        let adchecked: boolean =  true;
        let darreichungsformchecked: boolean = false;

        for (let i: number = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].type == "text")
                if (allBoxes[i].value == "") {
                    adchecked = false;
                }
            if (allBoxes[i].type == "number") {
                if (Number(allBoxes[i].value) > 0) {
                    eischecked = true;
                }
            }
            if (allBoxes[i].name == "darreichungsform") {
                if (allBoxes[i].checked == true) {
                    darreichungsformchecked = true;
                }
            }
            if (allBoxes[i].name == "versandart") {
                if (allBoxes[i].checked == true) {
                    versandartchecked = true;
                }
            }
        }
        if (darreichungsformchecked == false) {
            missing += "Darreichungsform, ";
        }
        if (eischecked == false) {
            missing += "Eissorte, ";
        }
        if (versandartchecked == false) {
            missing += "Versandart, ";
        }
        if (adchecked == false) {
            missing += "Adressdaten, ";
        }
        if (missing == "") {
            alert("Die Bestellung ist bei uns erfolgreich eingegangen, vielen Dank")
        } else {
            alert("Folgende Angabe(n) fehlt: " + missing);
        }
    }

}

/*
window.addEventListener("load", init);

function init(_event: Event): void {
    console.log("Init");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        console.log(fieldset)
        fieldset.addEventListener("change", handleChange);
        document.getElementById("bestellübersicht").addEventListener("click", auftragUeberpruefen);
    }
}

function handleChange(_event: Event): void {
    let Felder: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let anzahl: number = 0;
    let preis: number = 0;
    document.getElementById("zusammenfassungDarreichungsform").innerHTML = "";
    document.getElementById("zusammenfassungKugelgroesse").innerHTML = "";
    document.getElementById("zusammenfassungSorte").innerHTML = "";
    document.getElementById("zusammenfassungZusätze").innerHTML = "";
    document.getElementById("zusammenfassungVersandart").innerHTML = "";
    document.getElementById("zusammenfassungPreis").innerHTML = "Preis: ";
    for (let i: number = 0; i < Felder.length; i++) {
        if (Felder[i].checked == true) {
            preis = Number(Felder[i].value);
            anzahl += preis;
            console.log(anzahl);
            if (Felder[i].name == "Checkbox1" || Felder[i].name == "Checkbox2" || Felder[i].name == "Checkbox3" || Felder[i].name == "Checkbox4") {
                let ziel = document.createElement("ul");
                ziel.innerHTML = `${Felder[i].id}, `;
                document.getElementById("zusammenfassungZusätze").appendChild(ziel);
            } else if (Felder[i].name == "Radiogroup1") {
                let ziel = document.createElement("ul");
                ziel.innerHTML = `${Felder[i].id}`;
                document.getElementById("zusammenfassungDarreichungsform").appendChild(ziel);
            } else if (Felder[i].name == "Radiogroup2") {
                let ziel = document.createElement("ul");
                ziel.innerHTML = `${Felder[i].id}`;
                document.getElementById("zusammenfassungKugelgroesse").appendChild(ziel);
            } else if (Felder[i].name == "Radiogroup3") {
                let ziel = document.createElement("ul");
                ziel.innerHTML = `${Felder[i].id}`;
                document.getElementById("zusammenfassungVersandart").appendChild(ziel);
            }
        }
        if ((Felder[i].name == "StepperCookie" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperErdbeere" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperHaselnuss" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperJoghurt" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperLatteMacchiato" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperMango" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperMaracuja" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperSchokolade" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperStracciatella" && Number(Felder[i].value) > 0) || (Felder[i].name == "StepperVanille" && Number(Felder[i].value) > 0)) {
            preis = Number(Felder[i].value);
            anzahl += preis;
            console.log(anzahl);
            let ziel = document.createElement("ul");
            ziel.innerHTML = `${Felder[i].value} Kugeln ${Felder[i].name}, `;
            document.getElementById("zusammenfassungSorte").appendChild(ziel);
        }
        document.getElementById("zusammenfassungPreis").innerHTML = `Preis: ${anzahl} €`;
    }

}

function auftragUeberpruefen(): void {
    let Felder: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log("bestellübersicht");
    let fehlt: string = "";
    let eissorte: number = 0;
    let versandart: number = 0;
    let lieferadresse: number = 0;
    for (let i: number = 0; i < 8; i++) {
        if (Number(Felder[i].value) > 0) {
            eissorte = 1;
            console.log(eissorte);
        }
    }
    if (eissorte == 0) {
        fehlt += "Sorte, ";
    }
    if (Felder[11].checked == false && Felder[12].checked == false) {
        fehlt += "Darreichungsform, ";
        console.log(Felder[5].checked);
        console.log(Felder[6].checked);
    }
    for (let i: number = 13; i < 16; i++) {
        if (Felder[i].checked == true) {
            versandart = 1;
        }
    }
    if (versandart == 0) {
        fehlt += "Versandart, ";
    }
    for (let i: number = 16; i < 20; i++) {
        if (Felder[i].value == "") {
            lieferadresse++;
        }
    }
    if (lieferadresse > 0) {
        fehlt += "Lieferadresse, ";
    }
    if (fehlt == "") {
        alert("Vielen Dank führ Ihren Einkauf!")
    } else {
        alert("Folgende Angabe fehlt: " + fehlt);
    }
}
}
*/