/*

Funciones tradicionales 

- Sintaxis basica : 
function saludar(nombre: string, edad: number): string {
  return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
}

console.log(saludar("Ana", 25));

- Parametros opcionales : 
function presentar(nombre: string, edad?: number): string {
  return edad 
    ? `${nombre} tiene ${edad} años.` 
    : `${nombre} no indicó edad.`;
}

console.log(presentar("Juan")); // Juan no indicó edad.

- Valores por defecto :
function sumar(a: number, b: number = 10): number {
  return a + b;
}

console.log(sumar(5)); // 15

- Parametros rest :
function promedio(...numeros: number[]): number {
  const total = numeros.reduce((a, b) => a + b, 0);
  return total / numeros.length;
}

console.log(promedio(10, 20, 30)); // 20

---

Funciones flecha 

- Ejemplo básico :
const saludar = (nombre: string): string => {
  return `Hola ${nombre}`;
};

console.log(saludar("Ana"));

- Version simplificada (cuando se retorna una sola expresion)
const cuadrado = (x: number): number => x * x;

console.log(cuadrado(4)); // 16

- Con parametros opcionales y rest :
const concatenar = (sep: string, ...palabras: string[]): string => {
  return palabras.join(sep);
};

console.log(concatenar("-", "a", "b", "c")); // a-b-c

--- 

Diferencias 

- function tradicional
    -> Sintaxis mas larga
    -> Su propio this (depende de como se invoque)
    -> Se pueden usar con new (constructores)
    -> Buena para funciones largas o reutilizables

    - arrow function
        -> Mas corta, expresiva
        -> No tiene this, hereda del contexto exterior
        -> No sirven como constructores
        -> Mejor para callbacks y funciones pequeñas


Ejemplo de this : 
function normal
const objeto1 = {
  valor: 10,
  mostrar: function() {
    console.log(this.valor); // 10
  }
};

arrow function
const objeto2 = {
  valor: 10,
  mostrar: () => {
    console.log(this.valor); // undefined, hereda de contexto global
  }
};

objeto1.mostrar();
objeto2.mostrar();
*/

function greet(name : string) : string { // Valida tipo de retorno
    return `Hola ${name}`;
}

const message = greet('Goku'); // Valida tipo de argumentos
console.log(message);

const greet2 = (name : string) : string => {
    return `Hola ${name}`;
}

const message2 = greet2('Vegeta'); // Valida tipo de argumentos
console.log(message2);