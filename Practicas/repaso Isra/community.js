

/*aquí se guarda el nombre del koder
let koderName
let kodersArray = []
/*aquí sacamos el nombre del input
const getKoderName = event => {
  koderName = event.target.value
  console.log(koderName)
}

/*esta es la función que se ejecuta cuando escribimos en el input
document.getElementById('koder-name').addEventListener('keyup', event => {
  getKoderName(event)
})

/*esta es la función que se ejecuta cuando damos click al botón
document.getElementById('add-koder').addEventListener('click', () => {
  console.log(koderName)
  kodersArray.push(koderName)
  console.log(kodersArray)
})
*/

/**let newArray = ['carne asada','cervezas']
console.log(newArray)

for(i = 0; i < newArray.lenght ; i++) {
console.log(newArray[i])
}

@@ -1,47 +1,124 @@
/*aquí se guarda el nombre del koder
let koderName
let namesArray = ['Israel', 'Breeze', 'Annie', 'Rod 2']

let kodersArray = []
let phrase = 'La mejor forma de predecir el futuro es creándolo'

/*aquí sacamos el nombre del input
const getKoderName = event => {
  koderName = event.target.value
  console.log(koderName)
const countLetters = stringToCount => {
  return stringToCount.length
}

/*esta es la función que se ejecuta cuando escribimos en el input
document.getElementById('koder-name').addEventListener('keyup', event => {
  getKoderName(event)
})
let totalLetters = countLetters('hola')

/*Esta es la función que crea un elemento de lista con el texto que indiquemos como parámetro
const createKoderItem = itemText => {
  let koderItem = document.createElement('li')
  let koderItemText = document.createTextNode(itemText)
  koderItem.appendChild(koderItemText)
  koderItem.classList.add('list-group-item')
  return koderItem
for (let i = 0; i <= 5; i++) {
  console.log(`tenemos ${i} canicas`)
}

const addElementToList = listElement => {
  document.getElementById('koders-list').appendChild(listElement)
const printLetterByLetter = text => {
  console.log('text ', text)
  console.log('text.length ', text.length)
  for (let i = 0; i < text.length; i++) {
    console.log('i: ', i)

    console.log('text[i]', text[i])
  }
}

/*esta es la función que se ejecuta cuando damos click al botón
document.getElementById('add-koder').addEventListener('click', () => {
  console.log(koderName)
  document.getElementById('koders-list').replaceChildren()
  kodersArray.push(koderName)
  console.log(kodersArray)
  printNames(kodersArray)
})
printLetterByLetter('perro')

/*
iteración:0
i=0
const printNames = arrayToPrint => {
  arrayToPrint.forEach(nombre => {
    //console.log(nombre)
    let listElement = createKoderItem(nombre) //=><li>Lore</li>
    addElementToList(listElement)
  })

console.log('he terminado')

/*
let totalLetters2 = countLetters(phrase)
console.log(totalLetters)
console.log(totalLetters2)
const capitalize = () => {
  let textToCapitalize = prompt('Qué texto quieres capitalizar')
  return textToCapitalize.toUpperCase()
}
//const printKodersList = () => {}
console.log(`mi nombre al revés es ${capitalize()}`)*/

//let phrase = 'La mejor forma de predecir el futuro es creándolo'

/*
1.- Crear una función que me cuente la cantidad de palabras de cualquier string
*/

/*
let str = 'Hola como están'
const countWords = (str) => {
    let strArray = str.split(' ')
    console.log(strArray)
    return strArray.length
}
console.log (countWords(str))

/*
2.- Crear una función que imprima la cantidad de letras de cada palabra en un string
*/

let str = 'Hola como están'
const countWords = (str) => {
    let strArray = str.split(' ')
    strArray.forEach((palabra) => {
        console.log (palabra)
    }
    )
}
console.log (countWords(str))


3.- Crear una función que me entregue una lista de cada una de las palabras con la cantidad de letras que tiene
    "hola mundo"
        "hola - 4"
        "mundo - 5"
    "Corazón coraza"
        "Corazón - 7"
        "coraza - 6"

let str = 'Hola como están'
const countWords = (str) => {
    let strArray = str.split(' ').map((cv) => {
        return `${cv} - ${cv.length}`
   }
    )
console.log (strArray)



4.- Crear una función que me entregue una lista con aquellas palabras que tengan menos de 5 letras
    "hola mundo"
        "hola"
    "Corazón coraza"

    let str = 'Hola como están'
const countWords = (str) => {
    let strArray = str.split(' ').filter((cv) => {
        return `${cv} - ${cv.length}`


5.- Crear una función que me entregue un string con las palabras que tengan una cantidad de letras par
    "La mejor forma de predecir el futuro es creándolo"
        "La de predecir el futuro es"
    "uno dos tres cuatro cinco seis"
        "tres cuatro seis"
*/

let numbersArray = [1, 4, 6, 18, 5, 93]

/*1.- imprimir cada uno de los números del array*/

numbersArray.forEach(number => {
  console.log(number)
})

/*2.- crear una lista con cada uno de los números elevado al cuadrado*/

let pows = numbersArray.map(number => {
  return number * number
})

//pows = []
//iteración 0 => number = 1, number * number = 1, pows = [1]
//iteración 1 => number = 4, number * number = 16, pows = [1,16]
//iteración 2 => number = 6, number * number = 36, pows = [1,16,36]

/*3.- crear una lista con aquellos números que sean impares*/
// un número impar es aquel que al dividirlo entre 2, tiene un residuo diferente de 0
// number % 2 != 0 => impar

let odds = numbersArray.filter(number => {
  return number % 2 != 0 //condición
})

console.log(odds)

//let numbersArray = [1, 4, 6, 18, 5, 93]
//odds = []
//iteración 0 => number = 1, number % 2 = 1, condición = true, odds =[1]
//iteración 1 => number = 4, number % 2 = 0, condición = false, odds =[1]
//iteración 2 => number = 6, number % 2 = 0, condición = false, odds =[1]
//iteración 3 => number = 18, number % 2 = 0, condición = false, odds =[1]
//iteración 4 => number = 5, number % 2 = 1, condición = true, odds =[1, 5]
//iteración 5 => number = 93, number % 2 = 1, condición = true, odds =[1, 5,93]

/*4.- Obtener la sumatoria total de todos los números dentro de la lista*/

let result = numbersArray.reduce((accum, current) => {
  return accum + current
}, 0)

//let numbersArray = [1, 4, 6, 18, 5, 93]
//result = 0
//iteración 0 => accum = 0, current = 1, accum + current = 1, result = 1
//iteración 1 => accum = 1, current = 4, accum + current = 5, result = 5
//iteración 2 => accum = 5, current = 6, accum + current = 11, result = 11
