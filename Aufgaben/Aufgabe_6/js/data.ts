namespace A6 {

    /** For interface Products
     *  beschreibt Details eines Produkts
     *  @var type Der Auswahltyp des Produkts
     *  @var name Name der Produktart
     *  @var id Name des Produkts
     *  @var value Preis des Produkts
     */
    export interface Products {
        type: string;
        name: string;
        id: string;
        value: string;
    }

    /**
     * Ein String Array welches Produktkategorien hält
     */
    export interface fieldsetboxes {
        [kategorie: string]: Products[];
    }

    /**
     * Arrays welche Produkte enthalten
     */
    export let data: fieldsetboxes = {
        "Darreichungsform": [
            {type: "radio", name: "darreichungsform", value: "0", id: "Waffel"},
            {type: "radio", name: "darreichungsform", value: "0", id: "Becher"}
        ],
        "Eissorten": [
            {type: "number", name: "Eissorten", value: "1.5", id: "Cookie"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Erdbeere"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Joghurt"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Latte Macchiato"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Mango"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Maracuja"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Schokolade"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Stracciatella"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Vanille"},
            {type: "number", name: "Eissorten", value: "1.5", id: "Zitrone"}
        ],
        "Extras": [
            {type: "checkbox", name: "Extras", value: "0.5", id: "Sahne"},
            {type: "checkbox", name: "Extras", value: "0.5", id: "Erdbeersoße"},
            {type: "checkbox", name: "Extras", value: "0.5", id: "Schockosoße"},
            {type: "checkbox", name: "Extras", value: "0.5", id: "Sträusel"}
        ],
        "Versandart": [
            {type: "radio", name: "versandart", value: "1", id: "Standardversand"},
            {type: "radio", name: "versandart", value: "1.5", id: "Expressversand"}
        ],
    };
}