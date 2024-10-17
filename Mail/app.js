// Lista di email autorizzate
const emailAutorizzate = ["bobbello11@email.com", "lorenzo.scalvini@email.com", "formum.sangiorgio.cips@email.com"];

// Chiedi all'utente di inserire la sua email
const emailUtente = prompt("Inserisci la tua email:");

//Verficare se la mail inserita e' presente
if (emailAutorizzate.includes(emailUtente)) {
    console.log("Accesso autorizzato!");
} else {
    console.log("Accesso negato.");
}
