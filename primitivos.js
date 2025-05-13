
// Variables primitivos son los datos que no se pueden dividir en partes más pequeñas.
// Pueden ser los tipos de dato string, number, boolean, null, undefined y symbol.

// Las variables no primitivos son los datos que se pueden dividir en partes más pequeñas.
// Pueden ser los tipos de dato object, array, function, date, regex y set.

let nombre = 'Angel Vega';
console.log(nombre);

nombre = 'Pedro Pérez';
console.log(nombre);

nombre = 'Destino final';
console.log(nombre);

console.log(typeof nombre); // Imprime el tipo de dato de la variable nombre

nombre[0] = 'A'; // Esto no funcionará porque los strings son inmutables
console.log(nombre); // Imprime el valor original de la variable nombre

// No se muestra debido a que los datos primitivos son inmutables; es decir que no cambian de valor.
// Para ser más exacto, no se puede cambiar uno de los valores de los datos primitivos pero sí, se puede
// cambiar el valor COMPLETO de una variable primitiva.



