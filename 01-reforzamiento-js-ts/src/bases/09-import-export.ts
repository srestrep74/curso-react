/*

Exportar

1. Exportacion nombrada : Exporta varias cosas con sus nombres.

Ej : 
export const PI = 3.1416;

export function sumar(a: number, b: number) : number {
    return a + b;
}

export type Usuario = {
    id: number;
    nombre: string;
};

2. Exportacion por defecto : Cada archivo puede tener solo un export default .

Ej : 
export default function multiplicar(a: number, b: number): number {
    return a * b;
}

3. Exporte multiples en una sola linea 

Ej : 
const URL = "https://api.com";
const TOKEN = "abc123";

export { URL, TOKEN };

-------

Importar

1. Importar nombrados 

Ej : 

import { PI, sumar } from "./utils";

console.log(PI);
console.log(sumar(2, 3));

2. Importar con alias 

Ej : 
import { sumar as add } from "./utils";

console.log(add(5, 10));

3. Importar todo 

Ej : 
import * as Utils from "./utils";

console.log(Utils.PI);
console.log(Utils.sumar(4, 7));

4. Importar el default 

Ej : 
import multiplicar from "./calculadora";

console.log(multiplicar(3, 4));
*/

import { heroes, type Hero } from "./data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    /*
    if (!hero) -> for undefined values
        throw new Error("No existe Hero");
    */

    return hero;
};

console.log(getHeroById(3));