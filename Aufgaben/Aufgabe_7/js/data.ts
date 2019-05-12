namespace A7 {

    /** For interface Products
     *  beschreibt Details eines Produkts
     *  @var type Der Auswahltyp des Produkts
     *  @var name Name der Produktart
     *  @var id Name des Produkts
     *  @var price Preis des Produkts
     *  @var value Name oder Anzahl des Produkts
     */
    export interface Products {
        type: string;
        name: string;
        id: string;
        price: string;
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
            {type: "radio", name: "Darreichungsform", price: "0", value: "Waffel", id: "Waffel"},
            {type: "radio", name: "Darreichungsform", price: "0", value: "Becher",id: "Becher"}
        ],
        "Eissorten": [
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Cookie"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Erdbeere"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Joghurt"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Latte Macchiato"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Mango"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Maracuja"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Schokolade"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Stracciatella"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Vanille"},
            {type: "number", name: "Eissorten", price: "1.5", value: "0", id: "Zitrone"}
        ],
        "Extras": [
            {type: "checkbox", name: "Extras", price: "0.5", value: "Sahne", id: "Sahne"},
            {type: "checkbox", name: "Extras", price: "0.5", value: "Erdbeersoße", id: "Erdbeersoße"},
            {type: "checkbox", name: "Extras", price: "0.5", value: "Schockosoße", id: "Schockosoße"},
            {type: "checkbox", name: "Extras", price: "0.5", value: "Sträusel", id: "Sträusel"}
        ],
        "Versandart": [
            {type: "radio", name: "Versandart", price: "1", value: "Standardversand", id: "Standardversand"},
            {type: "radio", name: "Versandart", price: "1.5", value: "Expressversand", id: "Expressversand"}
        ],
    };
}