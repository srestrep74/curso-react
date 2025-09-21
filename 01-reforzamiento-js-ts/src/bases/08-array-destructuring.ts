/*
Es una sintaxis de ES6 que permite extraer elementos de un array y asignarlos a variables. 

- Ejemplo basico
const numeros: number[] = [10, 20, 30];

const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

-> Cada variable toma el valor de la posición correspondiente .

- Ignorar elementos
Se puede saltar posiciones dejando una coma vacia . 

Ej : 
const [primero, , tercero] = numeros;

console.log(primero); // 10
console.log(tercero); // 30

- Valores por defecto
Si el array no tiene suficiente elementos, se puede asignar valores por defecto . 

Ej : 
const colores: string[] = ["rojo"];

const [primero, segundo = "azul"] = colores;

console.log(primero); // rojo
console.log(segundo); // azul

- Operador rest
Permite agrupar los elementos restantes en un array . 

Ej : 
const letras: string[] = ["a", "b", "c", "d"];

const [x, y, ...resto] = letras;

console.log(x);     // a
console.log(y);     // b
console.log(resto); // ["c", "d"]

- Desestructuracion en funciones
Muy útil cuando se trabaja con tuplas en TS . 

Ej : 
function coordenadas(): [number, number] {
  return [40.7128, -74.0060]; // latitud, longitud
}

const [lat, lng] = coordenadas();

console.log(`Lat: ${lat}, Lng: ${lng}`);
*/

const characterNames : string[] = ["Goku", "Vegeta", "Freezer", "Yamcha"];

const [ goku ] = characterNames;

console.log(goku);

const [ , , freezer ]  = characterNames;

console.log(freezer);

/*
La funcion debe de llamarse useState :

-> Debe retornar un arreglo con 2 elementos : 
    -> Un string (el valor inicial)
    -> Una funcion anonima de flecha que : 
        - Recibe un string
        - Imprime ese string en consola

-> Ejemplo de uso :

const [name , setName] = useState('Goku');
console.log(name); // Goku
setName('Vegeta'); // Vegeta
*/

function useState (value : string) {
    return [
        value,
        (newValue : string) : void => console.log(newValue),
    ] as const; // Se usa para que TS sepa que tipo recibir
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

/*
Tambien se puede :

const useState = (value : string) => {
    return [
        value,
        (newValue : string) : void => console.log(newValue),
    ] as const;
};
*/