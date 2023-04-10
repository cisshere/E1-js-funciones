/* 1- Crear una función que reciba un número por parámetro
 e indique  en consola si el número es par o impar. */

function esPar (numero) {
    if (numero % 2 === 0){
         console.log ("Es numero par")
    }
    else {
         console.log ("Es numero impar")
    }
}

esPar (4);


/* 2- Crear una función que reciba dos números por parámetro 
e indique en consola que número es mayor,
 y si ninguno lo es, indicar por consola que son iguales. */ 


function esMayor (num1, num2) {
    if(num1 > num2) {
        console.log (num1 +" es mayor " +num2);
    }
    else if (num2 > num1) {
        console.log (num2 + "es mayor que "+num1);
    }
    else if (num1 == num2) {
        console.log ("Son iguales");
    }
}

esMayor(4,2);


/* 3- Crear una función que reciba un número 
por parámetro e indique en consola si ese número es múltiplo de 5.*/


function multiploDe5 (numero) {
    if (numero % 5 === 0){
         console.log ("Es múltiplo de 5")
    }
    else {
         console.log ("No es múltiplo de 5")
    }
}

multiploDe5 (23);

/* 4- Crear una función que reciba un número por parámetro e 
imprima por consola todos los números desde el 0 hasta llegar a ese número. */


function imprimirTodosLosNumeros (numero) {

    for (let i = 0; i <= numero; i++){
        console.log(i);
    }
}

imprimirTodosLosNumeros (8);

/* 5 - Crear una función que reciba una palabra y un número por parámetro
e imprima por consola esa palabra
 la cantidad correspondiente al número indicado. */

 function cantidadDePalabras (palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
 }

 cantidadDePalabras ("hola",5);



 /*6 - Crear una función que reciba un array por parámetro
 e imprima por consola todos los valores de ese array. */ 

 let arrayVariado = [1,"hola","chau",5,true];

 function valoresDelArray (array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
 }

 valoresDelArray (arrayVariado);


 /* 7 - Crear una función que reciba un array con 10 números 
 e imprima por consola todos los valores de ese array, menos 
 el que se encuentre en la 5ta posición del mismo.
  Ayuda: Recuerden que el primer índice de un array es "0". */


  let arrayDeNumeros = [2,2,2,2,3,4,4,4,4,4];

  function imprimirArrays (array) {
        for (let i = 0; i < array.length; i++){
             if (i !== 4) { 
                console.log(array[i]);
          }    
    }
  }
 
  imprimirArrays (arrayDeNumeros);


  /* 8 - Crea una función que reciba un array de números 
  y un número por parámetro e imprima por consola cada número 
  del array multiplicado por el número pasado por parámetro. */


  let arrayNumeros = [0,1,2,3,4,5,6,7,8,9,10];

  function imprimirArray (array,numero) {
     for (let i = 0; i < array.length; i++){
        let numeroGuardado = array[i] *numero;
         console.log(numeroGuardado);
     }
  }
 
  imprimirArray (arrayNumeros,2);
