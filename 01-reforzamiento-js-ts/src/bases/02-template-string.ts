const firstName = 'Fernando';
//const lastName = 'O'neal'; -> Este apostrofe cancela el string.
//const lastName = "O'Neal"; // Esta es una posible solucion a lo anterior.
// const lastName = "O'neal "es el apellido de alguien""; // Si se necesitara añadir mas comillas , en este caso dobles pasa el mismo error.
const lastName = "O'neal";

// Que pasa si hay una concatenación ?
console.log(firstName + ' ' + lastName + ':'); // Es mucho trabajo

// Se pueden crear template strings o strings multilinea
const fullName = `
El nombres es : 
    ${firstName} ${lastName}
`;
console.log(fullName);

/*
En JavaScript/TypeScript, los template strings son una forma mejorada de manejar cadenas de texto, introducidas en ES6 (2015).

Se escriben con backticks (`), en lugar de comillas simples ' ' o dobles " ".

Caracteristicas : 

1. Interpolación de variables y expresiones : Permiten incrustar variables o expresiones dentro del texto usando ${...} : 

Ej : 
const nombre = 'Juan';
const edad = 21;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

2. Multiples lineas sin concatenar : Se puede escribir texto en varias lineas sin usar \n ni concatenacion con + : 

Ej : 
const poema = `
Rosa es roja,
violeta es azul,
con template strings,
programar es más cool.
`;
console.log(poema);

3. Evaluacion de expresiones : Dentro de ${...} se pueden poner cualquier expresion valida de TS : 

Ej: 
const a = 5;
const b = 3;
console.log(`La suma de ${a} + ${b} = ${a + b}`); 
*/