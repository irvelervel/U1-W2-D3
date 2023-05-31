// COSTRUTTO SWITCH

const firstName = 'Stefano'

// immaginiamo di dover calcolare quante ore di studio dovete impiegare per passare un esame
let hoursOfIntenseStudy

// if (firstName === 'Stefano') {
//   hoursOfIntenseStudy = 40
// } else if (firstName === 'Giovanni') {
//   hoursOfIntenseStudy = 20
// } else if (firstName === 'Mario') {
//   hoursOfIntenseStudy = 0
// } else {
//   hoursOfIntenseStudy = 25
// }

// console.log(
//   "Per passare l'esame hai bisogno di " +
//     hoursOfIntenseStudy +
//     ' ore di studio.'
// )

// REFACTOR del codice precedente con il costrutto SWITCH

switch (firstName) {
  case 'Stefano':
    hoursOfIntenseStudy = 40
    console.log('ah, ti chiami Stefano! mi dispiace!')
    break
  // il break vi fa uscire dallo switch

  case 'Giovanni':
    hoursOfIntenseStudy = 20
    break

  case 'Mario':
    hoursOfIntenseStudy = 0
    break

  default:
    // Federico, Francesco, Erica, Giulia
    hoursOfIntenseStudy = 25
}

console.log(
  'Ti chiami ' +
    firstName +
    " e per passare l'esame hai bisogno di " +
    hoursOfIntenseStudy +
    ' ore di studio.'
)
