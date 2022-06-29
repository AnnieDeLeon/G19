/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } ) 
 * => [ ['a', 1], ['b', 2]]
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 
 * 1 con Object.entries() y
 *  Otra con .map()
 */
// solución con .entries()
const makePairs = (object) =>  {

}

// solución con .map()
const createPairs = (object) => {
    const keys = Object.keys(obj).map(key=>)
}

/**
 * Dado un objeto de salarios
 * Crear una funcion que retorne una lista 
 * con los salarios ordenados de menor a mayor
 * orderSalary( salarios)
 * -> [4000, 5000, 7000] 
 */

 let salarios = {
    'juan': 7000,
    'Albert': 4000,
    'jorge': 5000
}

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

  const obj = {
    a:1,
    b:2
  }
const createPairs = (obj) => {
    const keys = Object.keys(obj)
    console.log(keys)

    const values = Object.values(obj)

}


/**
 * Ejercicio 1.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * makePairs( { a: 1, b: 2 } )
 * => [ ['a', 1], ['b', 2]]
 *
 *
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * Se tiene que realizar 2 soluciones,
 * 1 con Object.entries() y
 *  Otra con .map()
 */
 let pairs = { a: 1, b: 2 };
 // solución con .entries()
 const makePairs = (object) => {
   let pairsArray;
   if (object) pairsArray = Object.entries(object);
 
   return pairsArray;
 };
 
 console.log("makePairs -> ", makePairs(pairs));
 
 // solución con .map()
 const makePairsMap = (object) => {
   if (object) {
     let keys = Object.keys(object);
     let values = Object.values(object);
 
     return keys.map((key, index) => [key, values[index]]);
   }
 };
 
 console.log("makePairsMap -> ", makePa
 