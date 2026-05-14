/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/


/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

// Definiamo area come una funzione con due parametri: l1 e l2
// (i due lati del rettangolo)
const area = function (l1, l2) {
    return l1 * l2; // return ferma l'esecuzione della funzione e restituisce il valore moltiplicato
    // Senza return, la funzione non restituisce niente (undefined).
};

console.log(area(30, 4));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/
console.log('***************************');

const sommaPazza = function (a, b) {
    if (a === b) {
        return (a + b) * 3; //significa che se i due numeri sono ugual li moltiplichiamo per 3
    }
    return a + b; 
};

console.log(sommaPazza(2, 3)); // non entra nell'if perchè 2 è diverso da 3
console.log(sommaPazza(4, 4)); // entra nell'if

console.log('***************************');
/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/
let x = 5;
let y = 25;
const distanzaDa19 = function (n) {
    const distanza = Math.abs(n - 19); // conta la distanza tra due numeri. quanto dista n da 19?

    if (n > 19) { //se è vero che n è maggiore di 19 
        return distanza * 3; // moltiplica la distanza per 3
    }
    return distanza; // altrimenti ritorniamo la distanza normale
};

console.log(distanzaDa19(x));  // 14
console.log(distanzaDa19(y)); // 18 
console.log('***************************');

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/
let inclusive = 50;
let exact = 400;
let exclusive = 5;
const dentroIntervallo = function (n) {
    // && = AND (entrambe le condizioni devono essere vere)
    // || = OR  (basta che una delle condizioni sia vera)
    return (n >= 20 && n <= 100) || n === 400; //fa più o meno quello che farebbe l'if ma in meno passaggi
};

console.log(dentroIntervallo(inclusive));  // true  
console.log(dentroIntervallo(exact)); // true  
console.log(dentroIntervallo(exclusive));  // false 
console.log('***************************');
