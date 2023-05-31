// esempio real life :)

let animalsArray = [
  {
    name: 'Fufy',
    species: 'Cat',
    age: 5,
    furColor: 'white',
    numberOfLegs: 4,
    skills: ['meows', 'asking-for-food', 'purrs', 'sleeps'],
  },
  {
    name: 'Pluto',
    species: 'Dog',
    age: 1,
    furColor: 'gold',
    numberOfLegs: 4,
    skills: ['barks', 'plays', 'tail-wiggling', 'growls'],
  },
  {
    name: 'Poppy',
    species: 'Parrot',
    age: 2,
    furColor: 'green',
    numberOfLegs: 2,
    skills: ['sound-mimicking', 'sleeps', 'eating', 'flies', 'speaks'],
  },
]

// stampiamo in console solamente le specie di ogni elemento di animalsArray
// voglio avere in console: "Cat Dog Parrot"

// risultato iniziale
for (let i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].species) // 1)
  //   console.log(animalsArray[i]["species"]) // 2)
}
// questo esercizio mi torna
// Cat
// Dog
// Parrot

// risultato finale
let finalString = ''

for (let i = 0; i < animalsArray.length; i++) {
  finalString += animalsArray[i].species + ' '
}

// finalString inizialmente è ''
// dopo il primo ciclo, finalString è '' + 'Cat' + ' ' --> 'Cat '
// dopo il secondo ciclo, finalString è 'Cat ' + 'Dog' + ' ' --> 'Cat Dog '
// dopo il terzo ciclo, finalString è 'Cat Dog ' + 'Parrot' + ' ' --> 'Cat Dog Parrot '

console.log('finalString', finalString)

// -----------

// proviamo ad inserire solamente i nomi degli animali in un nuovo array
let justTheNames = []

for (let i = 0; i < animalsArray.length; i++) {
  justTheNames.push(animalsArray[i].name)
}
console.log('justTheNames', justTheNames)
// ['Fufy', 'Pluto', 'Poppy']

// -----------
// proviamo ad estrarre e pushare in un nuovo array solamente l'ultima skill di ogni animale
let justTheLastSkill = []

for (let i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].skills[animalsArray[i].skills.length - 1])
}
// animalsArray[i].skills.length - 1 <-- mi torna sempre l'indice dell'ULTIMO elemento dell'array

// ---------
// proviamo a sommare le gambe di ogni animale nell'array
let totalLegs = 0

for (let i = 0; i < animalsArray.length; i++) {
  // totalLegs = totalLegs + animalsArray[i].numberOfLegs
  totalLegs += animalsArray[i].numberOfLegs // scorciatoia
}

console.log('totalLegs è', totalLegs) // 10

// inserite in un nuovo array chiamato "quadrupeds" solamente gli animali che hanno 4 zampe

let quadrupeds = []

// cicliamo l'array per l'ennesima volta
for (let i = 0; i < animalsArray.length; i++) {
  if (
    // la condizione è che l'animale abbia 4 gambe, ovvero che la sua proprietà numberOfLegs === 4
    animalsArray[i].numberOfLegs === 4
  ) {
    quadrupeds.push(animalsArray[i])
  }
}

console.log('QUADRUPEDS', quadrupeds)
