// CICLO FOR
// ...largamente quello più usato.
// Permette di eseguire un blocco di istruzioni un numero PREDETERMINATO di volte.

// SINTASSI DEL CICLO FOR
// for(inizializzazione del contatore; condizione da controllare per ripetere l'esecuzione; incremento del contatore){
//      blocco di istruzioni da eseguire
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i)
//   console.log('esecuzione del ciclo')
// } // da qua in poi i muore :(

// // i qua non è visibile!
// console.log('CICLO FINITO')

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// il ciclo for è PERFETTO per ESPLORARE GLI ARRAY

const arrayOfNames = [
  'Alessio', // 0
  'Giulia', // 1
  'Stefano', // 2
  'Erica', // 3
  'Elisa', // 4
  'Federico', // 5
  'Manuel', // 6
  'Paolo', // 7
]

// la lunghezza di un array è pari al numero dei suoi elementi
console.log('lunghezza di arrayOfNames', arrayOfNames.length) // 8

// l'indice dell'ultimo elemento di un array è lunghezza-1
// let name = arrayOfNames[7]
// console.log(name)

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(arrayOfNames[i])
  // prima iterazione: i è 0 --> quindi arrayOfNames[0] === 'Alessio'
  // seconda iterazione: i è 1
  // terza iterazione: i è 2
  // quarta iterazione: i è 3
  // ...

  // al primo ciclo esploro arrayOfNames[0]
  // al secondo ciclo esploro arrayOfNames[1]
  // al terzo ciclo esploro arrayOfNames[2]
  // ...
}

let arrayOfNumbers = [45, 7, 0, -3, 200, 47]

// ho bisogno di calcolarne la somma
let sum = 0

// sum = sum + arrayOfNumbers[0] // 0 + 45 = 45
// sum = sum + arrayOfNumbers[1] // 45 + 7 = 52
// sum = sum + arrayOfNumbers[2] // 52 + 0 = 52
// sum = sum + arrayOfNumbers[3] // 52 + -3 = 49
// sum = sum + arrayOfNumbers[4] // 49 + 200 = 249
// sum = sum + arrayOfNumbers[5] // 249 + 47 = 296

// arrayOfNumbers.length è 6
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i]
  // sum += arrayOfNumbers[i] <-- versione accorciata
}
console.log('sum è', sum)
