/*
Un array es una estructura de datos que permite almacenar una colección de valores (elementos), ordenados y accesibles por su índice (empieza en 0).

En JavaScript, los arrays son muy flexibles: pueden contener números, strings, objetos, funciones… incluso mezclados.
En TypeScript, se les pueden darl tipos, lo que hace que el código sea más seguro.

Arrays en Javascript (dinamicos , sin tipo)

Ej : 
let numeros = [1, 2, 3, 4];
let mezcla = [1, "dos", true, { nombre: "Ana" }];

console.log(numeros[0]); // 1
console.log(mezcla[1]); // "dos"

En JS puro no hay restricción: se puede agregar lo que se quiera. Eso a veces es útil, pero también genera errores difíciles de detectar.

Arrays en Typescript (con tipos)

1. Sintaxis generica : 
let numeros: number[] = [1, 2, 3, 4];
let nombres: string[] = ["Ana", "Juan", "Pedro"];

2. Usando Array<T>
let numeros: Array<number> = [1, 2, 3, 4];

3. Array mixto (union types)
let mezcla: (number | string)[] = [1, "dos", 3];

4. Array de objetos 
interface Usuario {
  id: number;
  nombre: string;
}

let usuarios: Usuario[] = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Juan" }
];

Ventajas de TS con Arrays

1. Tipado fuerte : Evita errores de tipo

Ej : 
let numeros: number[] = [1, 2, 3];
numeros.push("hola"); // Error en compilación

2. Autocompletado : Los IDEs muestran que metodos existen y que tipo devuelven .

3. Mejor documentación implícita : Cuando se ve let usuarios : Usuario[], se sabe de inmediato que contiene . 

4. Errores en tiempo de compilación : TS avisa antes de ejecutar código , no después . 

5. Mayor escalabilidad : En proyectos grandes, tener arrays bien definidos y tipados evita confusiones y bugs. 
*/

const myArray : number[] = [1, 2, 3, 4, 5];

// myArray.push('4'); -> Falla

for (const myNumber of myArray) {
    console.log(myNumber * 2); // Si no fuera tipo number, daria comportamiento no deseado .
}