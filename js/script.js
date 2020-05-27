// Lista Cognomi
var listaCognomi = ['BIANCHI', 'ROSSI', 'DUZIONI', 'BALSANO', 'VERDI'];

// Chiedo all'utente il cognome
do {
  var cognomeUtente = prompt('Scrivi il tuo cognome.');
} while ( !(isNaN(cognomeUtente)) && cognomeUtente.length == 0 )

var cognomeUtenteMaiuscolo = cognomeUtente.toUpperCase();
listaCognomi.push(cognomeUtenteMaiuscolo);

// Ordino i cognomi in base alla iniziale
listaCognomi.sort();

// Stampo la Lista
var listaStampata = document.getElementById('lista');

var i = 0;
while (i < listaCognomi.length) {
  var listaCorrente = listaStampata.innerHTML;
  listaStampata.innerHTML = listaCorrente + '<li>' + listaCognomi[i] + '</li>';

  i++;
}

// Dico all'utente in che posizione della lista si trova
var posizione = listaCognomi.indexOf(cognomeUtenteMaiuscolo);
document.getElementById('posizione').innerHTML = posizione + 1;
