// Lista Cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Chiedo all'utente il cognome
var cognomeUtente = prompt('Scrivi il tuo cognome.');
// var cognomeUtenteMaiuscolo = cognomeUtente.toUpperCase();
listaCognomi.push(cognomeUtente);

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
var posizione = listaCognomi.indexOf(cognomeUtente);
document.getElementById('posizione').innerHTML = posizione + 1;
