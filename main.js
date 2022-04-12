// alert("JavaScript funcionando correctamente");

// 1. Booleanos

let booleano1 = true;
let booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
let booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
let booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
let booleanoNot = !booleano1;
console.log(booleanoNot);

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));
console.log (booleanoMix0);

// 2. Operadores

// Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado

let valorDivisión = 17 / 3;
console.log (valorDivisión.toFixed(2));

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7

let valorResto = 17 % 7;
console.log (valorResto);

// 3. Lógica de programación

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

let A = 9;
let B = '9';

if (A == B){
    console.log("Son iguales");
} else{
    console.log ("No son iguales")
}

// Si comparamos con el operador de Estrictamente igual nos devuelve false porque no es el mismo tipo de dato

if (A === B){
    console.log("Son iguales");
} else{
    console.log ("No son iguales")
}

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”

let mochila = [1,2,3,4,5,6,7,8,9];
let carga = mochila.length;
console.log(carga > 10);

// Metodo Switch

switch (true) {
    case (carga > 10):
        console.log("No puedo cargar con tantas cosas");
        break;
    case (carga >= 2 && carga <= 10):
        console.log("Que bien voy con mi mochila");
        break;
    default:
        console.log("Creo que necesito una mochila");   
        break;  
}

// Método If Else

if (carga > 10){
    console.log("No puedo cargar con tantas cosas");    
}else if (carga >= 2 && carga <= 10) {
    console.log("Que bien voy con mi mochila");
}else {
    console.log("Creo que necesito una mochila");
}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10

for (let contarHasta10 = 0; contarHasta10 < 11; contarHasta10 ++){    
    console.log('Nº ' + contarHasta10);
}

// // Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’

let diaFestivo = true;

const freeDay = diaFestivo === true ? "Hoy no hay trabajo" : "Hoy trabajo";
console.log(freeDay);

// // Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle

let arrayBucle = [];

for (let i = 4; i < 19; i++){
    arrayBucle.push(i);
}
console.log(arrayBucle);

// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
let resultado = 0;
for (let index = 0; index < arrayBucle.length; index++){
    resultado = resultado + arrayBucle[index];
}
console.log(resultado);

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

let arrayVarios = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

for (let contenido of arrayVarios){
    console.log(contenido);
}

// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3

let indice = 1;

while (indice <= 20){
    if ((indice % 3) == 0){
        console.log("Patata");
    }
    indice++;
}

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

let nota = prompt("Introduce un número entre 0 y 10");
switch(nota){
    case '0':
        console.log("Insuficiente");
        break;
    case '1':
        console.log("Insuficiente");
        break;
    case '2':
        console.log("Insuficiente");
        break;
    case '3':
        console.log("Insuficiente");
        break;
    case '4':
        console.log("Insuficiente");
        break;
    case '5':
        console.log("Suficiente");
        break;
    case '6':
        console.log("Suficiente");
        break;
    case '7':
        console.log("Notable");
        break;
    case '8':
        console.log("Notable");
        break;
    case '9':
        console.log("Sobresaliente");
        break;
    case '10':
        console.log("Sobresaliente");
        break;    
    default:
        console.log("Nota incorrecta");
    
}

// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function resta (a,b) {
    return a - b;
}
console.log(resta(15,6));

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero (num){
    if ( typeof num === 'number'){
        return num*2;
    } else {
        console.log("Debo ser ejecutada con un número");
    }
}

console.log(duplicaNumero (8));

console.log (duplicaNumero ('Jorge'));