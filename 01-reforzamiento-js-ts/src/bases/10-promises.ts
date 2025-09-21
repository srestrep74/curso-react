/*
Que es ?
Es un objeto que representa una operacion asincrona que todavia no ha terminado, pero que en el futuro puede :

- resolverse : la operacion fue exitosa
- recharzarse : ocurrio un error

Es como un "boleto" que promete que se tendra un valor (o un error) mas adelante . 

Para que sirven ?
- Manejar codigo asincrono : Cuando algo no ocurre inmediatamente (peticiones HTTP, leer archivos, timers, etc) . 
- Reemplazan callbacks anidados : Evitan el famoso callback hell . 
- Hacen el codigo mas legible y mantenible . 
- Se integran con async/await , que simplifica aun mas el manejo de asincronia . 

Estados de una promesa :
Una promesa puede estar en 3 estados .
1. pending : en ejecucion, sin resultado aun . 
2. fulfilled : termino con exito .
3. rejected : termino con error . 

Sintaxis basica : 
const miPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Operacion exitosa");
        } else {
            reject("Error en la operacion");
        }
    }, 2000);
});

miPromesa
    .then(resultado => console.log(resultado)) // Se resuelve
    .catch(error => console.error(error)) // Fallo
    .finally(() => console.log("Promesa terminada"));

--------
Uso con async/await : 
-> Mas moderno y legible .
-> Await pausa la ejecucion de la funcion hasta que la promesa se resuelva o falle. 

Ej : 
async function obtenerDatos(): Promise<void> {
    try {
        const respuesta = await fetch("url");
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener datos");
    }
}

obtenerDatos();

------

Promesas en TS
-> La clave en TS es tipar lo que la promesa devolvera . 

Ejemplo 1 : Promesa que devuelve un numero
function getNumero(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(42), 1000);
    });
}

getNumero().then(n => console.log(n)); // 42

Ejemplo 2 : Promesa con objeto tipado
type Usuario = {
    id: number;
    nombre: string;
}

function getUsuario(): Promise<Usuario> {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, nombre: "Ana"}), 1000);
    });
}

async function mostrarUsuario() {
    const usuario = await getUsuario();
    console.log(usuario.nombre);
}
*/

const myPromise = new Promise<number>((resolve, reject) => { // Esto interno es un callback -> pasar funcion a funcion
    setTimeout(() => {
        // Yo quiero mi dinero !
        //resolve(100); // Se resolvio con 100 dolares . Salio bien !
        reject('Mi amigo se perdio'); // Salio mal
    }, 2000);
});

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${ myMoney }`);
    }
).catch((reason) => {
    console.warn(reason);
}).finally(() => { // Se ejecuta siempre
    console.log('Pues ha seguir con mi vida.');
});