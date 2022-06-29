/**let counter = 1
while(counter <= 10) {
    console.log(` 5 x ${counter} = ${ 5 * counter } `)
    counter++
}

// imprimir cada caracter de un string -> pasar a while

/*let str = 'Hola Koder'
let fin = str.length

for(let i = 0; i < fin; i++){
    console.log(str[i])
} 

let counter = 1
while(counter <= 10) {
    console.log(` 5 x ${counter} = ${ 5 * counter } `)
    counter++

    /**
 * 
 * Imprimir el string invertido
 * 
 */ 


/**
 * 
 * Imprimir en consola cada una de las vocales
 * 
 */ 



/**
 * 
 * Imprimir en consola cada una de las consonantes
 * 
 */ 
/**
 * 'Hola Koder'
 * -> 'redok aloh'
 * Imprimir el string invertido
 * 
 * 
 */ 




/**
 * 'oaoe'
 * Imprimir en consola cada una de las vocales
 * 
 */ 

/**
let str = 'Hola Koders'
let i = 0 

while ( i < str.lenght) {
    if (
        str == 'a' ||
        str == 'e' ||
        str == 'i' ||
        str == 'o' ||
        str == 'u' ||
        str == ' '
    ) {
    console.log (str[i])
    i++
    }
}

/**
 * 'HlKdr'
 * Imprimir en consola cada una de las consonantes
 * 
 */ 

/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */

// let endPoint = parseInt(prompt('Ingrese un número entre 1 y 100'))
// let suma = 0
// let iterator = 0
//CICLO FOR
// for (let i = 0; i <= endPoint; i++) {
//     suma= suma + i
// }

/**

* Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */

/** 

let str = prompt('Ingrese una oración', 'Hola E')
let containerA = 0
let acomulator = str.length
let containerE = 0
let counter = 0
let strMin = str.toLowerCase()

// for (let i = 0; i < acomulator; i++) {   
//     if( strMin[i]==='a'){
//         containerA += 1 
//     }else if( strMin[i]==='e'){
//         containerE += 1
//     }else{
//         console.error ('no contiene letras A ni E')
//     }
// }

Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */

/*
let str = prompt('Ingrese una oración', 'Hola E')
let containerA = 0
let acomulator = str.length
let containerE = 0
let counter = 0
let strMin = str.toLowerCase()

// for (let i = 0; i < acomulator; i++) {   
//     if( strMin[i]==='a'){
//         containerA += 1 
//     }else if( strMin[i]==='e'){
//         containerE += 1
//     }else{
//         console.error ('no contiene letras A ni E')
//     }
// }

// while(counter<acomulator){
//         if( strMin[counter]==='a'){
//         containerA += 1 
//     }else if( strMin[counter]==='e'){
//         containerE += 1
//     }
//     counter++
// }

do {
    if( strMin[counter]==='a'){
        containerA += 1 
    }else if( strMin[counter]==='e'){
        containerE += 1
    }
    counter++
} while(counter<acomulator)

//CICLO While
// while (iterator <= endPoint) {

//     suma = suma + iterator
//     iterator++
// }

//CICLO DO WHILE20

// do {
//     suma = suma + iterator
//     iterator++
// } while (iterator <= endPoint)


// window.alert(`El resultado de la suma es ${suma}`)



