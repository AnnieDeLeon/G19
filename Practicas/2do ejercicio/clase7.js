/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 * 
 */


  /** 
   
  let arrCities = ["méxicO", "RIo de janeiro", "Los AngelEs"];

  /**
   * Escribir una funcion
   * Reciba como parametro Un array de ciudades
   * Retornar las ciudades capitaslizadas
   * capitalize(['méxicO','RIo', 'Los AngelEs'])
   * -> ['México','Rio', 'Los Angeles']
   *
   */
  
  /**
  const capitalize = (strArray) => {
    let newArray = [];
  
    strArray.forEach((currentValue) => {
      let innerArray = currentValue.split(" ");
  
      if (innerArray.length > 1) {
        let newConcatStr = "";
  
        innerArray.forEach((currentValue) => {
          newConcatStr +=
            currentValue[0].toUpperCase() +
            currentValue.slice(1).toLowerCase() +
            " ";
        });
        newArray.push(newConcatStr.trim());
      } else {
        newArray.push(
          currentValue[0].toUpperCase() + currentValue.slice(1).toLowerCase()
        );
      }
    });
  
    return newArray;
  console.log(capitalize(arrCities));
  */


/**
  let arrCities = ["méxicO", "RIo de janeiro", "Los AngelEs"];

const capitalize = (strArray) => {
  let newArray = [];

  strArray.forEach((currentValue) => {
    let innerArray = currentValue.split(" ");

    if (innerArray.length > 1) {
      let newConcatStr = "";

      innerArray.forEach((currentValue) => {
        newConcatStr +=
          currentValue[0].toUpperCase() +
          currentValue.slice(1).toLowerCase() +
          " ";
      });
      newArray.push(newConcatStr.trim());
    } else {
      newArray.push(
        currentValue[0].toUpperCase() + currentValue.slice(1).toLowerCase()
      );
    }
  });

  return newArray;
};

console.log(capitalize(arrCities));



let arrStr = ['hola','mundo']
/**
 * Funcion
 * getFirstLast(['hola','mundo'])
 * -> ['ha','mo']
 * .map()
 */

