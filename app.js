
// alert('Hola');

// console.log('Hello World');

// var, let y const

var x = 10;
let y = 20;
const z = 30;

console.log(x);
console.log(y);
console.log(z);

// var --> Utilizado para declarar variables globales y locales
// let --> Utilizado para declarar variables locales
// const --> Utilizado para declarar variables constantes

var a = 10;
let b = 20;
const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// ejemplo de var

var a = 10;
var a = 20;
// console.log(a); // 20

// No es recomendable utilizar "var" porque se puede reescribir y mostrar algo errado y NO indica error.
var innerHeight = 100000;

console.log('%c Mis Variables', 'color:red; font-size:20px; font-weight:bold;');
console.log({a}); // Si se coloca llaves, se mostrará en la consola del navegador que variable se imprime.
console.log(b);    
console.log(c);

let miNombre = 'Juan';
console.log(miNombre);

const Pi = 3.14;
console.log(Pi);


console.table({a, b, c}); // Muestra en forma de tabla el valor de las variables y qué variable se imprime.
