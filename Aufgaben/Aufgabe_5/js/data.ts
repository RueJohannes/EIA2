namespace A5 {
    export interface product {
        name: string;
        price: number;
    }

    export let Darreichungsform: product[] = [{name: "Waffel", price: 0},{name: "Becher", price: 0}];
    export let Eissorte: product[] = [{name: "Cookie", price: 1.50}, {name: "Erdbeere", price: 1.50}, {name: "Joghurt", price: 1.50}, {name: "Latte Macchiato", price: 1.50}, {name: "Mango", price: 1.50}, {name: "Maracuja", price: 1.50}, {name: "Schokolade", price: 1.50}, {name: "Stracciatella", price: 1.50}, {name: "Vanille", price: 1.50}, {name: "Zitrone", price: 1.50}];
    export let Extras: product[] = [{name: "Sahne", price: 0.20}, {name: "Erdbeersoße", price: 0.20}, {name: "Schockosoße", price: 0.20}, {name: "Sträusel", price: 0.20}];
    export let Versandart: product[] = [{name: "Standardversand", price: 0.20}, {name: "Expressversand", price: 0.20}];
}