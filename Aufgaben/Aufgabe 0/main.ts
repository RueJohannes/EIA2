/*
Aufgabe: Aufgabe 0
Name: Johannes Rümenapp
Matrikel: 261175
Datum: 22.03.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

function Box() {
    var Name=prompt("Kannst du mir deinen Namen verraten?");
    var node: HTMLElement=document.getElementById("frage");
    node.innerHTML += "Hallo ";
    node.innerHTML += Name;
    node.innerHTML += ", wie geht es dir?";
    console.log("Hallo", Name, ", wie geht es dir?")
    } 
document.addEventListener("DOMContentLoaded", Box)