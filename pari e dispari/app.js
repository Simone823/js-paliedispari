// Chiedo all'utente di scegliere pari o dispari
const pariDispari = prompt("Scegli pari o dispari! Scrivilo qui").trim().toLowerCase();
console.log(pariDispari);


// Array numero inserito dall'utente e numero pc
const numbers = [];
console.log(numbers);

// Finche la lunghezza del mio array non è 1, chiederò all'utente di inserire un numero da 1 a 5 
while (numbers.length != 1){
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(userNumber)
    

    // Se l'utente non digita un numero, numero inserito non corretto
    if(isNaN(userNumber)){
        alert("Inserisci un numero da 1 a 5");
    } // Se l'utente inserisce un numero minore di 0, numero inserito non corretto
      else if (userNumber < 1){
        alert("Devi inserire un numero da 1 a 5");
    } // Se l'utente inserisce un numero maggiore di 5, numero inserito non corretto
      else if (userNumber > 5){
        alert("Devi inserire un numero da 1 a 5");
    } // Altrimenti, se corretto, inserisci il numero digitato dall'utente nell'array numbers
      else {
        numbers.push(userNumber);
    }
    
}

// Genero un numero random da 1 a 5
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomIntInclusive(1,5);


// Numero random da 1 a 5 per il pc 
const numberPC = getRandomIntInclusive(1, 5);
console.log(numberPC);

// Aggiungo il numero random all'interno del mio array numbers
numbers.push(numberPC);

// Sommo i due numeri
const somma = numbers[0] + numbers[1];
console.log(somma);

if (somma % 2 === 0){
    console.log("La somma dei numeri è Pari", somma);
    alert(`La somma dei numeri è Pari ${somma}`);
} else{
    console.log("La somma dei numeri è Dispari", somma);
    alert(`La somma dei numeri è Dispari ${somma}`);
}
