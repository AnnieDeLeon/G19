//Objetos

/*let koder = {

    name: 'Annie'
    gender: 'female'
    schedule: '7-10pm'
    generation: '19'
    isActive: false
    modules: {
        js: false
        maquetado: true
    }
}

/*console.log(koder)

let generation = koder.generation
let pasoBackend = koder.modules.pasoBackend

console.log(generation, pasoBackend)

if( pasoBackend) {
    console.log(` $koder.name } si paso el modulo de backend y tiene 
    `)
}

console.log(koder)
console.log{`
    Hola, mi nombre es ${koder.name} y soy ${koder.gender}. Soy de la generación ${koder.generation}.
    Actualmente estoy cursando el 
`}
*/

/*let koderAssign = {}
koderAssign.name = 'Annie'
koderAssign.gender = 'female'
koderAssign.generation = '19'

console.log(koderAssign)

*/

let salarios = {
    'lenny' : '30000',
    'Ernesto' : '20000',
    'jorge' : '20000',
    'Kike' : '25000',
}


/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */

let suma = 0
for (item in nomina){
    let key = nomina
}


/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */

let arr = (obj) => {
    let total = 0
    for(elemento in obj) {
        total += Number(salarios [elemento])
    }
    return total
}
console.log(arr(salarios))

/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * */
  
  const isAnObjectOrArray = (algo) => {
      if (typeof algo === Array){
        console.log("Es un array")
        } else if (typeof algo === 'object')
        {

        }
  }
 
  * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

const isAnObjectOrArray = (element) => {

}
