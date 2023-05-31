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

for (let i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].species) // 1)
  //   console.log(animalsArray[i]["species"]) // 2)
}
