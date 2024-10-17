//Variabile per tenere traccia dell'accesso + variabile data array
    const emailList = ["bobbello11@email.com", "lorenzo.scalvini@email.com", "formum.sangiorgio.cips@email.com"];
    let accessGranted = false;

//Chiedi all'utente la sua email
    const userEmail = prompt("Inserisci la tua email:");

//Controlla se l'email è nella lista
    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] === userEmail) {
            accessGranted = true;
            break;
        }
    }

//Verifica autorizzazione
    if (accessGranted) {
        console.log("Accesso autorizzato!");
    } else {
        console.log("Accesso negato.");
    }
