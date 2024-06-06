// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

//Chiedo l'età al passeggero
let userAge = parseInt(prompt("Quanti anni hai?"));
console.log("Età del passeggero: " + userAge);

//Chiedo chilometri che deve percorrere
let travelKm = prompt("Quanti chilometri devi percorrere?");
console.log("Chilometri che vanno percorsi: " + travelKm);

//Calcolo il costo totale del viaggio totale km * 0,21€
let travelPrice = travelKm * 0.21;
travelPrice = parseFloat(travelPrice.toFixed(2));
console.log("Prezzo totale senza sconti: " + travelPrice);

//Dichiaro la variabile del prezzo finale
let finalPrice;

//Togliamo il 20% da costo del biglietto ai ragazzi >18
if (userAge < 18) {
  //se l'user è minorenne
  //calcolo del valore dello sconto
  let discount20 = (travelPrice * 20) / 100;
  discount20 = parseFloat(discount20.toFixed(2));

  //calcolo del prezzo finale scontato
  finalPrice = travelPrice - discount20;
  finalPrice = parseFloat(finalPrice.toFixed(2));

  console.log("Quantità sconto: " + discount20, "Prezzo finale: " + finalPrice);
  //Togliamo il 40% dal costo del biglietto alle persone over 65
} else if (userAge >= 65) {
  //se l'utente è over 65
  //calcoliamo il valore dello sconto
  let discount40 = (travelPrice * 40) / 100;
  discount40 = parseFloat(discount40.toFixed(2));

  //calcoliamo il prezzo finale
  finalPrice = travelPrice - discount40;
  finalPrice = parseFloat(finalPrice.toFixed(2));

  console.log("Quantità sconto: " + discount40, "Prezzo finale: " + finalPrice);
} else {
  // altrimenti nessuno sconto tra i 18 e i 64 anni
  finalPrice = travelPrice;

  console.log("Prezzo finale: " + finalPrice);
}
//STAMPIAMO NELL HTML IL PREZZO FINALE
document.querySelector(".finalPrice").innerText = finalPrice;
