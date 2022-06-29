/**funcion con reduce()
 * getInitialLetters['jorge,'luis,'camarillo','cristobal']
 * 'jlcc'
*/
/**let numeros = [1,2,3]
let totalSuma = numeros.reduce( (total, cv, index, arr) => {
    return total += cv
}, 100 )
console.log(totalSuma)
*/



/**let frutas = ['naranja','naranja', 'zanahoria']
let vaso = frutas.reduce( (recipiente, fruta, index, arr ) => {
    return recipiente + fruta
}, '' ) 
console.log(vaso)
*/


/**let nombres = ['Ivette', 'Anahi', 'de Leon', 'Gonzalez']

const iniciales = nombres.reduce((acc, cv) => {

    acc += cv.charAt(0)

    return acc
},'')

console.log (iniciales)
*/

let nombre = ['Francisco','Manuel','Martinez','Ibarra']

const iniciales = nombre.reduce ((acc, cv) => {

    acc += cv.charAt(0).toLowerCase()

    return acc

},'')

console.log (iniciales)




