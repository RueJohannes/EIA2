/*
Aufgabe: Aufgabe 4
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 20.04.2019

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            console.log(fieldset);
            fieldset.addEventListener("change", handleChange);
            document.getElementById("bestellübersicht").addEventListener("click", auftragUeberpruefen);
        }
    }
    function handleChange(_event) {
        let Felder = document.getElementsByTagName("input");
        let anzahl = 0;
        let preis = 0;
        document.getElementById("zusammenfassungDarreichungsform").innerHTML = "";
        document.getElementById("zusammenfassungKugelgroesse").innerHTML = "";
        document.getElementById("zusammenfassungSorte").innerHTML = "";
        document.getElementById("zusammenfassungZusätze").innerHTML = "";
        document.getElementById("zusammenfassungVersandart").innerHTML = "";
        document.getElementById("zusammenfassungPreis").innerHTML = "Preis: ";
        for (let i = 0; i < Felder.length; i++) {
            if (Felder[i].checked == true) {
                preis = Number(Felder[i].value);
                anzahl += preis;
                console.log(anzahl);
                if (Felder[i].name == "Checkbox1" || Felder[i].name == "Checkbox2" || Felder[i].name == "Checkbox3" || Felder[i].name == "Checkbox4") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${Felder[i].id}, `;
                    document.getElementById("zusammenfassungZusätze").appendChild(ziel);
                }
                else if (Felder[i].name == "Radiogroup1") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${Felder[i].id}`;
                    document.getElementById("zusammenfassungDarreichungsform").appendChild(ziel);
                }
                else if (Felder[i].name == "Radiogroup2") {
                    let ziel = document.createElement("ul");
                    ziel.innerHTML = `${Felder[i].id}`;
                    document.getElementById("zusammenfassungKugelgroesse").appendChild(ziel);
                }
                else if (Felder[i].name == "Radiogroup3") {
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
    function auftragUeberpruefen() {
        let Felder = document.getElementsByTagName("input");
        console.log("bestellübersicht");
        let fehlt = "";
        let eissorte = 0;
        let versandart = 0;
        let lieferadresse = 0;
        for (let i = 0; i < 8; i++) {
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
        for (let i = 13; i < 16; i++) {
            if (Felder[i].checked == true) {
                versandart = 1;
            }
        }
        if (versandart == 0) {
            fehlt += "Versandart, ";
        }
        for (let i = 16; i < 20; i++) {
            if (Felder[i].value == "") {
                lieferadresse++;
            }
        }
        if (lieferadresse > 0) {
            fehlt += "Lieferadresse, ";
        }
        if (fehlt == "") {
            alert("Vielen Dank führ Ihren Einkauf!");
        }
        else {
            alert("Folgende Angabe fehlt: " + fehlt);
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=main.js.map