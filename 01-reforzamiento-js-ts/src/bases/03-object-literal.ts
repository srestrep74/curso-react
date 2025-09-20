/*
Un objeto literal es la forma mas sencilla de crear objetos en JS/TS.
Se construye usando llaves {} con pares clave:valor .

Es "literal" porque se define el objeto directamente en el codigo, sin necesidad de usar new o una clase.

Ej: 
const persona = {
  nombre: "Juan",
  edad: 21,
  estudiante: true
};

console.log(persona.nombre); // Juan

----

Caracteristicas : 

1. Definición directa :
const coche = { marca: "Toyota", modelo: "Corolla" };

2. Claves y valores : 
-> La clave es el nombre de la propiedad . 
-> El valor puede ser cualquier cosa : string, numero, boolean, funcion, otro objeto, etc .

Ej : 
const usuario = {
  id: 1,
  nombre: "Ana",
  activo: true,
  saludar: function() {
    console.log("Hola!");
  }
};
usuario.saludar();

3. Shorthand properties : 
-> Si el nombre de la variable es igual al de la propiedad , se puede simplificar.

Ej : 
const nombre = "Carlos";
const edad = 30;

const persona = { nombre, edad }; 
console.log(persona); // { nombre: "Carlos", edad: 30 }

4. Metodos abreviados :
const calculadora = {
  sumar(a: number, b: number) {
    return a + b;
  }
};

console.log(calculadora.sumar(2, 3)); // 5

En typescript, se puede tipar los objetos literales para mayor seguridad.

Ej : 
type Persona = {
  nombre: string;
  edad: number;
  estudiante: boolean;
};

const juan: Persona = {
  nombre: "Juan",
  edad: 21,
  estudiante: true
};
*/


const person = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45
}; // Si se deja el cursor encima, se ve el tipo de dato que es.

// Se puede ver que cada atributo del objeto obtiene el tipo real, y no el literal, a pesar de que el objeto sea const. Esto es porque const aplica para la referencia del objeto, no sus valores internos .

person.firstName = 'Peter';
person.lastName = 'Parker';

console.log(person);

// Esto no se podria :
/*
person = {
    firstName : 'Peter',
    lastName : 'Parker',
    age : 45
}
*/

const ironMan = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45
};

const spiderMan = ironMan;

spiderMan.firstName = 'Peter';
spiderMan.lastName = 'Parker';

console.log(ironMan, spiderMan);

/*
En lo anterior, ambos objetos mostraran los mismos datos. 
Estos es porque no se esta haciendo un clon del objeto, lo que se hace es que apunte a la misma referencia, por lo que los cambios afectaran ambos objetos. 

Para lograr una "copia", se suele usar desestructuración que indica que toma las properties que hay en ironMan y las esparza en spiderMan, y permite romper la referencia . 
*/

const ironMan2 = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45
};

const spiderMan2 = {...ironMan2};
spiderMan2.firstName = 'Peter';
spiderMan2.lastName = 'Parker';

console.log(ironMan2, spiderMan2);

/*
Ahora bien , esta desestructuración permite esparcir los campos a primer nivel. Esto quiere decir que si se tiene : 

const ironMan3 = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45,
    skills : {
        power : 95
    }
};

const spiderMan3 = {...ironMan3};
spiderMan3.firstName = 'Peter';
spiderMan3.lastName = 'Parker';
spiderMan3.skills.power = 85; -> SE MODIFICARA EN AMBOS

console.log(ironMan3, spiderMan3);

Es decir, solo aplica a primer nivel, por lo que hay que tener cuidado con la desestructuracion . No rompe la referencias anidadas, solo las de primer nivel.

Para hacer una copia profunda se usa : 
const spiderMan = structuredClone(ironMan);
*/