/*
En TypeScript, un type es una forma de crear un alias de tipo, es decir, dar un nombre personalizado a un conjunto de tipos de datos.
Sirven para describir la forma de un dato (objeto, función, unión de tipos, etc.) de manera más legible y reutilizable.

- Ejemplo basico

type Usuario = {
    id: number;
    nombre: string;
    active: boolean;
};

const user: Usuario = {
    id: 1,
    nombre: "Ana",
    active: true
};

Aqui , Usuario es un type alias que describe la estructura de un objeto .

---

Casos de uso comunes

1. Objetos : Para definir estructuras claras y reutilizables :
type Producto = {
    id: number;
    name: string;
    price: number:
}

2. Union Types (Varias tipos posibles)
type ID = number | string;

let userId : ID;

userId = 123; // Valido
userId = "abc"; //Invalido

3. Tipos literales (valores exactos permitidos)
type Estado = "pendiente" | "aprobado" | "rechazado";

----

Tambien hay otros tipos : 
Partial<T> → vuelve opcionales todas las propiedades.

Required<T> → vuelve obligatorias todas las propiedades.

Readonly<T> → propiedades de solo lectura.

Pick<T, K> → selecciona ciertas propiedades.

Omit<T, K> → excluye ciertas propiedades.

Record<K, T> → crea un objeto con claves de tipo K y valores de tipo T.

ReturnType<T> → obtiene el tipo de retorno de una función.

*/

type Owner = 'DC' | 'Marvel';

/*
Tambien se puede usar enum: 

enum Owner {
    DC = 'DC',
    Marvel = 'Marvel',
}

Se usaria : 
{
      id: 1,
      name: 'Batman',
      owner: Owner.DC,
    },
*/

interface Hero {
    id : number;
    name : string;
    owner : Owner;
};

const heroes : Hero[] = [
    {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    },
    {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel',
    },
    {
      id: 3,
      name: 'Superman',
      owner: 'DC',
    },
    {
      id: 4,
      name: 'Flash',
      owner: 'DC',
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel',
    },
];

console.log(heroes);
