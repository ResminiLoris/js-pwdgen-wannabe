var name = prompt('Inserisci il tuo nome: ');
var namePlaceholder = document.getElementById('name');
namePlaceholder.innerHTML = name;

var surname = prompt('Inserisci il tuo cognome: ');
var surnamePlaceholder = document.getElementById('surname');
surnamePlaceholder.innerHTML = surname;

var color = prompt('Inserisci il tuo colore preferito: ');
var colorPlaceholder = document.getElementById('color');
colorPlaceholder.innerHTML = color;

var password = name + surname + color + "21"
var passwordPlaceholder = document.getElementById('password');
passwordPlaceholder.innerHTML = password;
