/*
Una interface en TS es una forma de definir la forma que debe tener un objeto : 

- Que propiedades tiene
- Que tipos de datos acepta
- Incluso que métodos puede incluir

-> Son contratos : si un objeto dice implementar esa interfaz, debe cumplir con esa forma .

Ej : 
interface Persona {
    nombre : string;
    edad : number;
    estudiante? : boolean; // opcional 
}

const juan : Person = {
    nombre : "Juan",
    edad : 21
}

----

Caracteristicas : 

1. Opcionales : Se pueden marcar propiedades que siempre estaran presentes usando ? : 

Ej :
interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
}

2. Solo lectura : Para propiedades que no pueden cambiarse despues de asignarse se usa readonly : 

Ej : 
interface Config {
  readonly version: string;
  modoOscuro: boolean;
}

3. Metodos : 

interface Animal {
  nombre: string;
  sonido(): void;
}

const perro: Animal = {
  nombre: "Firulais",
  sonido() {
    console.log("Guau");
  }
};

4. Herencia : Una interfaz puede extender otra para reutilizar definiciones.

Ej : 
interface Usuario {
  id: number;
  nombre: string;
}

interface Admin extends Usuario {
  permisos: string[];
}

Por que son mejores que usar directamente objetos literales ?

Objetos literales
- Son flexibles , pero garantizan forma ni tipos. 
- Facil cometer errores de escritura
- Dificultan la reutilizacion si varios objetos necesitan la misma estructura.
- No soportan herencia.

Interfaces
- Definen un contrato claro : que propiedades existen y de que tipo.
- TS marca error de inmediato si una propiedad no existe o tiene el tipo incorrecto . 
- Reutilizables : Una interfaz puede ser usada en multiples objetos o clases .
- Permiten extender otras interfaces -> composicion clara y escalable.
*/


const ironMan = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 45, // Nada impide ponerlo en String
}

console.log(ironMan);

// Con interfaces se define la estructura
interface Hero {
    firstName : string;
    lastName : string;
    age : number;
};

const ironMan2 : Hero = {
    firstName : "Tony",
    lastName : "Stark",
    age : 45
};

console.log(ironMan2);

