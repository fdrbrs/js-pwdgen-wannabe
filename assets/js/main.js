
//Chiedo all'utente il suo nome, cognome e colore preferito

var pswName = prompt("Qual'è il tuo nome?");

var pswSurname = prompt("Qual'è il tuo cognome?");

var pswColor = prompt("Qual'è il tuo colore preferito?");

//genero la password con le variabili inserite dall'utente

var pswrd = document.getElementById('pswrd');

pswrd.innerHTML = "La tua password generata CASUALMENTE è: " + pswName + pswSurname + pswColor + '21';