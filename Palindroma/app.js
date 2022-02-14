// Array contenente la parola dell'utente
const word = [];
console.log(word);

let userWord;

// Finche la lunghezza del mio array word non è 1, chiederò all'utente di inserire una parola
while (word.length !== 1){
    // Chiedo all'utente una parola
    userWord = prompt("Inserisci una parola").trim().toLowerCase();
    console.log(userWord);

    if (!isNaN(userWord)){
        alert("Inserisci una parola");
    } else {
        word.push(userWord);
    }
}


function verificoParolaPalindroma (parola) {
    
    // Splitto la parola inserita dall'utente e la inserisco in un array
    const wordSplit = [...parola];
    console.log(wordSplit);
    
    // Inverto le parole dell'array wordSplit
    const wordInverted = wordSplit.reverse();
    console.log(wordInverted);
    
    // Unisco tutti gli elementi della stringa wordSplit per generare una stringa
    const invertedJoin = wordInverted.join("");
    console.log(invertedJoin);
    
    // Se la parola inserita dall'utente è uguale alla parola invertita, la parola è palindroma
    if(userWord == invertedJoin){
        console.log("palindroma");
        alert("La parola inserita è palindroma")
    } // Altrimenti la parola non è palindroma 
        else {
        console.log("non palindroma")
        alert("La parola inserita non è palindroma")
    }

}
verificoParolaPalindroma(userWord);
