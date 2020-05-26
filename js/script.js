// Lista Cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(listaCognomi);

// Chiedo all'utente il cognome
var cognomeUtente = prompt('Scrivi il tuo cognome.');
listaCognomi.push = [cognomeUtente];
console.log(cognomeUtente);
console.log(listaCognomi);

// Ordino i cognomi in base alla iniziale
listaCognomi.sort();
console.log('Questo è in ordine alfabetico', listaCognomi);

// Stampo la Lista
document.getElementById('lista').innerHTML = '<li>' + listaCognomi + '</li>';

// Dico all'utente in che posizione della lista si trova
