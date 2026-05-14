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
/*prende il valore  di x e y e lo mette in n e gli assegna quel valore perchè stiamo dicendo alla funzione: il primo valore che ricevi mettilo ad n*/

console.log('***************************');

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/
let inclusive = 50;
let exact = 400;
let exclusive = 5;
const dentroIntervallo = function (n) {
    return (n >= 20 && n <= 100) || n === 400; //fa più o meno quello che farebbe l'if ma in meno passaggi
};

console.log(dentroIntervallo(inclusive));  // true  
console.log(dentroIntervallo(exact)); // true  
console.log(dentroIntervallo(exclusive));  // false 
/*prende il valore  di let inclusive, let exact,  let exclusive lo mette in n e gli assegna quel valore perchè stiamo dicendo alla funzione: il primo valore che ricevi mettilo ad n*/
console.log('***************************');


/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

const epify = function (testo) {
    if (testo.startsWith('EPICODE')) {//Controlla se una stringa comincia con "EPICODE"
        return testo; //Restituisce true o false
    }
    return 'EPICODE ' + testo; // aggiungiamo il prefisso davanti
};

console.log(epify('ciao'));         // "EPICODE ciao"
console.log(epify('EPICODE ciao')); // "EPICODE ciao" — invariato
/*in questo caso, stiamo dicendo al console.log di valorizzare 'ciao' su (testo) che è  il primo valore che trova nella funzione*/
console.log('***************************');


/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

// % = operatore modulo: ritorna il resto della divisione
const divisibilePer3o7 = function (n) {
    const positivo = n > 0;
    const divisibile = n % 3 === 0 || n % 7 === 0; //solito resto
    // DEVE essere positivo E (divisibile per 3 O per 7)
    return positivo && divisibile; //tutte e due true
};

console.log(divisibilePer3o7(9));  // true  — positivo e divisibile per 3
console.log(divisibilePer3o7(-12)); // false — divisibile per 3 ma non positivo
console.log(divisibilePer3o7(14)); // true  — positivo e divisibile per 7
console.log(divisibilePer3o7(22)); // false — positivo ma non divisibile
console.log('***************************');


/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

// split("") = divide ogni carattere della stringa e lo rende un array 
// join("") = riunisce un array in una stringa
function invertiStringa (testo) {
    const caratteri = testo.split(''); // divide ogni carattere e lo mette in un array
    let risultato = [];

    // partiamo dall'ultimo indice (caratteri.length - 1) e andiamo a ritroso iterando al contratio i--
    for (let i = caratteri.length - 1; i >= 0; i--) {
        risultato.push(caratteri[i]); // aggiungiamo ogni carattere all'array risultato
    }

    return risultato.join(''); // riunisce l'array in una stringa
};

console.log(invertiStringa('EPICODE')); // "EDOCIPE"
console.log('***************************');
