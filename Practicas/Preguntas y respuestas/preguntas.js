/**
 Repaso Arrow functions
 * Parametros
 * invocacion de funciones
*/

// Declaracion de la funcion
/*const suma = () => {
    //  sentencias
    let total = a + b
    return total
}

// invocar

suma()

 /**
  * Repaso métodos de array
  */

  let array = [1, 2, "a", "b"];
  //forach no retornar nada
  //auxiliares meterlos dentro de la funsion
  //
  const filterArray = (arrayParameter) => {
  let auxArray = [];
    arrayParameter.forEach((cv) => {
      if (typeof(cv) === "string") {
        auxArray.push(cv);     
      }    
    });
    return auxArray;
  }
  console.log(filterArray(array));
  
  
  const filterArrayF = (arrayParameter) => {
      
       let filtrados = arrayParameter.filter((cv) => 
          typeof(cv) === "string"   
              
        );
        return filtrados;
      }
      console.log(filterArrayF(array));
  