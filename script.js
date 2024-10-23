console.log("Hello World!")

// Variable

// Let variable named age saving a number 28 as data
let age = 25;
console.log(age);
console.log(typeof age);
// noe som endrer seg, som alder fordi man har bursdag hvert år

// Const variable named name saving a string Lise as data
const name = "Lise";
console.log(name);
console.log(typeof name);
// gjerne noe som ikke endrer seg, som navnet mitt Lise. Kode som bruker tekst må ha "" for at det skal bli erkjent som skrift. Hermetegn med "" eller '' er opp til personlig preferanse

// hva som står som navn er ubetydelig for koden

// hvis noe kommer med strek over betyr det at javascript foretrekker ett annet navn ovenfor det som er brukt. Slik som "name" er over, det funker, men den vil egentlig at vi skal bruke noe annet 

// Const variable named isPresent saving a boolean false as data
const isPresent = false;
console.log(isPresent);
console.log(typeof isPresent);

// Const variable named firstName saving a string Lise as data
const firstName = "Lise";

// Const variable named lastName saving a string Fyllingen as data
const lastName = "Fyllingen";

/*
Let variable named fullName saving a series of strings and variable names
*/
let fullName = "My name is" + " " + firstName + " " + lastName + "!";
// Reusing the variable name fullName to view the template string method
fullName = `My name is ${firstName} ${lastName}!`
console.log(fullName);
console.log(typeof fullName);
// + " " + = mellomrom

// A variable using DOM Manipulation to display text to a HTML element
const htmlElement = document.querySelector("#javaScriptData");
htmlElement.textContent = fullName;

// en linje kommentar
/*
flere linjer kommentar
*/