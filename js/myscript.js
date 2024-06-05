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
console.log("Prezzo totale senza sconti: " + travelPrice);

//Togliamo il 20% da costo del biglietto ai ragazzi >18
if (userAge < 18) {
  //calcolo del valore dello sconto
  const discount20 = (travelPrice * 20) / 100;
  //calcolo del prezzo finale scontato
  var finalPrice = travelPrice - discount20;
  console.log("Quantità sconto: " + discount20, "Prezzo finale: " + finalPrice);
  //Togliamo il 40% dal costo del biglietto alle persone over 65
} else if (userAge >= 65) {
  //calcoliamo il valore dello sconto
  const discount40 = (travelPrice * 40) / 100;
  //calcoliamo il prezzo finale
  var finalPrice = travelPrice - discount40;
  console.log("Quantità sconto: " + discount40, "Prezzo finale: " + finalPrice);
}
