// CICLI
// un ciclo nello sviluppo software rappresenta una struttura in grado di ripetere l'esecuzione di una porzione di codice
// un numeri definito o indefinito di volte, fino al raggiungimento di un risultato.

// CICLO WHILE
// Il ciclo "while" è una struttura che potenzialmente ripete del codice un numero INDEFINITO di volte.

// let counter = 5

// while (counter < 15) {
//   console.log('Il valore di counter è', counter)
//   counter++
// }

let random = 0

while (random < 5) {
  console.log('il valore di random è', random)
  random += Math.random() // aggiungo a random un valore pseudo-randomico da 0.00000001 a 0.99999999 (più o meno!)
}

console.log('FINITO! ora random è ', random)

// come funziona Math.random() ?
let myRandom = Math.random()
console.log(myRandom) // ho generato un numero pseudo-casuale tra 0.00000001 a 0.99999999 (più o meno!)
console.log(myRandom * 10) // moltiplicandolo per 10, ottengo un valore compreso tra 0.0000001 a 9.9999999 (più o meno!)
console.log(Math.floor(myRandom * 10)) // Math.floor() abbatte questo valore all'intero più vicino per difetto
// --> il numero ora è compreso tra 0 e 9 :)
