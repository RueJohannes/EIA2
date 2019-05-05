/*
Aufgabe: Aufgabe 5
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 27.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A5;
(function (A5) {
    //Wenn die Seite lädt wird die Funktion init aufgerufen
    window.addEventListener("load", init);
    /**
     * Funktion seiteGenerieren wird mit dem Parameter data von data.ts aufgerufen
     */
    function init() {
        seiteGenerieren(A5.data);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            document.getElementById("button").addEventListener("click", bestellungPruefen);
        }
    }
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    /**
     *
     * @param _data mein Datensatz an Produktkategorien
     * @var kategoriePos Position/Name des Arrays welches Produkte der Produktkategorien enthält
     * @var value ist ein Array aus Produkten vom Array _data an der Position kategoriePos
     * @var div wird erstellt und an fieldset angehangen
     * div wird Text zugewiesen (kategoriePos)
     *
     */
    function seiteGenerieren(_data) {
        document.getElementById("inhalt").appendChild(fieldset);
        fieldset.appendChild(legend);
        legend.innerText = "Auswahl";
        // das gleiche wie for(let i = 0; i < _data.length; i++){}
        for (let kategoriePos in _data) {
            let value = _data[kategoriePos];
            let div = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = kategoriePos;
            //für jedes productPos in Value(=eine Produktkategorie) wird die function seiteAnzeigen aufgerufen
            for (let productsPos in value) {
                seiteAnzeigen(value[productsPos]);
            }
        }
    }
    /**
     * @param _product ist ein übergebenes Produkt
     * Für Produkte des Types number, checkbox radio werden die jeweiligen Elemente erstellt und Atribute gesetzt
     */
    function seiteAnzeigen(_product) {
        if (_product.type == "number") {
            let input = document.createElement("input");
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
        }
        else if (_product.type == "checkbox") {
            let input = document.createElement("input");
            let label = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _product.id;
            label.setAttribute("for", _product.id);
            input.setAttribute("type", _product.type);
            input.setAttribute("id", _product.id);
            input.setAttribute("name", _product.id);
            input.setAttribute("preis", _product.value);
        }
        else if (_product.type == "radio") {
            let input = document.createElement("input");
            let label = document.createElement("label");
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.innerText = _product.id;
            label.setAttribute("for", _product.id);
            input.setAttribute("type", _product.type);
            input.setAttribute("id", _product.id);
            input.setAttribute("name", _product.name);
            input.setAttribute("preis", _product.value);
        }
        else {
            console.log("Der Produkttyp ist ungültig!");
        }
    }
    /**
     *
     */
    function handleChange() {
        let allBoxes = document.getElementsByTagName("input");
        let sum = 0;
        document.getElementById("extras2").innerHTML = "";
        document.getElementById("darreichungsform2").innerHTML = "";
        document.getElementById("versandart2").innerHTML = "";
        document.getElementById("eissorte2").innerHTML = "";
        for (let i = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].checked == true) {
                sum += Number(allBoxes[i].getAttribute("preis"));
                if (allBoxes[i].type == "checkbox") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id} `;
                    document.getElementById("extras2").appendChild(ziel);
                }
                else if (allBoxes[i].name == "darreichungsform") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("darreichungsform2").appendChild(ziel);
                }
                else if (allBoxes[i].name == "versandart") {
                    let ziel = document.createElement("li");
                    ziel.innerHTML = `${allBoxes[i].id}`;
                    document.getElementById("versandart2").appendChild(ziel);
                }
            }
            if (allBoxes[i].type == "number" && Number(allBoxes[i].value) > 0) {
                sum += (Number(allBoxes[i].getAttribute("preis")) * Number(allBoxes[i].value));
                let ziel = document.createElement("li");
                ziel.innerHTML = `${allBoxes[i].value}x ${allBoxes[i].name} `;
                document.getElementById("eissorte2").appendChild(ziel);
            }
            document.getElementById("preis1").innerHTML = `Preis:   ${sum} €`;
        }
    }
    function bestellungPruefen() {
        let allBoxes = document.getElementsByTagName("input");
        let fehlend = "";
        let darreichungsformUeberprueft = false;
        let eissorteUeberprueft = false;
        let versandartUeberprueft = false;
        let adresseUeberprueft = true;
        for (let i = 0; i < allBoxes.length; i++) {
            if (allBoxes[i].type == "text")
                if (allBoxes[i].value == "") {
                    adresseUeberprueft = false;
                }
            if (allBoxes[i].type == "number") {
                if (Number(allBoxes[i].value) > 0) {
                    eissorteUeberprueft = true;
                }
            }
            if (allBoxes[i].name == "darreichungsform") {
                if (allBoxes[i].checked == true) {
                    darreichungsformUeberprueft = true;
                }
            }
            if (allBoxes[i].name == "versandart") {
                if (allBoxes[i].checked == true) {
                    versandartUeberprueft = true;
                }
            }
        }
        if (darreichungsformUeberprueft == false) {
            fehlend += "Darreichungsform, ";
        }
        if (eissorteUeberprueft == false) {
            fehlend += "Eissorte, ";
        }
        if (versandartUeberprueft == false) {
            fehlend += "Versandart, ";
        }
        if (adresseUeberprueft == false) {
            fehlend += "Adressdaten, ";
        }
        if (fehlend == "") {
            alert("Die Bestellung ist bei uns erfolgreich eingegangen. Vielen Dank!");
        }
        else {
            alert("Biite füllen Sie folgende Felder aus: " + fehlend);
        }
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=main.js.map