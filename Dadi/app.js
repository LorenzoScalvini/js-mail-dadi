// Algooritmo per il valore del dado ( da 1 a 6)
function lanciaDadi() {
    return Math.floor(Math.random() * 6) + 1;
}

//Assegnare il valore random all'utente
const punteggioGiocatore = lanciaDadi();

//Assegnare il valoe al computer
const punteggioComputer = lanciaDadi();

//Stampare i risultati dei dadi
console.log(`Punteggio Giocatore: ${punteggioGiocatore}`);
console.log(`Punteggio Computer: ${punteggioComputer}`);

//Verificare il valore maggiore per stabilire il vincitore
if (punteggioGiocatore > punteggioComputer) {
    console.log("Il Giocatore vince!");
} else if (punteggioGiocatore < punteggioComputer) {
    console.log("Il Computer vince!");
} else {
    console.log("È un pareggio!");
}
