//alert("funziona") //

/*
Decrizione passaggi: 
1)Chiedi all'utente il suo nome,

2)poi chiedi il suo cognome,

3)poi chiedi il suo colore preferito

4)Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 
*/

/******************************************************************
 ******************************************************************/

/* 1)Chiedi all'utente il suo nome,*/
let name = prompt("what's your Name?");
console.log(name);

/* 2)poi chiedi il suo cognome,*/
let surname = prompt("what's your Surname?");
console.log(surname);

/* 3)poi chiedi il suo colore preferito*/
let preferColor = prompt("what is your favorite color");
console.log(preferColor);

/* 4)Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 */
let result = name + surname + preferColor + "23"
document.write("result" + result)
console.log(result);

/******************************************************************
 ******************************************************************/