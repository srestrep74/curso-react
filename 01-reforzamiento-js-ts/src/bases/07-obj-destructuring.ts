/*
El destructuring es una sintaxis de ES6 que permite extraer valores de un objeto y asignarlos a variables de forma mas clara y concisa . 

En Typescript ademas se puede tipar los objetos y sus propiedades, lo que hace el codigo más seguro .

- Ejemplo básico
const persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

Destructuring
const { nombre, edad } = persona;

console.log(nombre); // Ana
console.log(edad);   // 25

Aquí se extrea nombre y edad directamente sin necesidad de persona.nombre o persona.edad.

- Alias en propiedades
Se pueden renombrar variables para evitar conflictos

Ej : 
const { nombre: n, edad: e } = persona;

console.log(n); // Ana
console.log(e); // 25

- Valores por defecto
Si una propiedad no existe, se puede dar un valor por defecto . 

Ej : 
const { ciudad = "Desconocida", pais = "España" } = persona;

console.log(ciudad); // Madrid
console.log(pais);   // España

- Con funciones 
Se pueden desestructurar parametros de funciones , muy útil en Typescript

Ej : 
type Usuario = {
  id: number;
  nombre: string;
  activo?: boolean;
};

function mostrarUsuario({ id, nombre, activo = false }: Usuario): void {
  console.log(`ID: ${id}, Nombre: ${nombre}, Activo: ${activo}`);
}

mostrarUsuario({ id: 1, nombre: "Carlos" });

- Destructuring anidados 
Tambien funciona en objetos dentro de objetos .

Ej : 
const curso = {
  titulo: "TypeScript Avanzado",
  profesor: {
    nombre: "Laura",
    experiencia: 5
  }
};

const { profesor: { nombre, experiencia } } = curso;

console.log(nombre);      // Laura
console.log(experiencia); // 5
*/

interface Person {
    firstName : string;
    lastName : string;
    email : string;
    age? : number;
};

const juan : Person = {
    firstName : "Juan",
    lastName : "Rpo",
    email : "juan@gmail.com",
};

function showPersonData ({
    firstName, lastName, email, age = 29
} : Person) : void {
    const message : string = `
    ${firstName}-${lastName}´s data : 

    -> email : ${email}
    -> age : ${age}
    `;

    console.log(message);
}

showPersonData(juan);

// Otro ejemplo
interface Hero {
    name : string;
    age : number;
    key : string;
    rank? : string;
};

const useContext = ({key, name, age, rank} : Hero ) => {
    return {
        keyName : key,
        user : {
            name, 
            age,
        },
        rank
    };
};

const ironMan : Hero = {
    name : "ironMan",
    age : 45,
    key : "abc-123"
}
const context = useContext(ironMan);

console.log(context);

const {rank, keyName, user : {name}} = useContext(ironMan);
console.log(rank, keyName, name);
