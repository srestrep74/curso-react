/*
var : 
-> Scope : Scope de función, no respeta bloques (if, for, etc)
-> Re-declaración : Se puede volver a declarar la misma variable en el mismo ambito sin error (peligroso)
-> Desventajas : 
    -> Puede causar errores sutiles porque no respeta el bloque.
    -> Menos seguro : fácil de sobreescribir una variable sin darse cuenta .

let :
-> Scope : Tiene scope de bloque ({}) , mucho mas intuitivo y predecible . 
-> Re-declaración : No permite declarar dos veces la misma variable en el mismo ámbito .
-> Typescript : Funciona mejor con chequeos de tipos y reduce errores . 

const :
-> Significado : No se puede reasignar la variable una vez inicializada .
-> Scope : Igual que let , tiene scope de bloque . 
-> Mutabilidad interna : Lo que no cambia es la referencia, pero si es un objeto o array, su contenido si puede mutar .
-> Ventajas : 
    -> Más seguro : Evita reasignaciones accidentales . 
    -> Código mas legible 
    -> Buenas prácticas : En TS moderno, es más recomendable usar const por defecto, y solo cambiar a let si realmente se necesita reasignar.
*/

const firstName = 'Fernando'; // A comparacion de la linea 28 , aca al poner el cursor no sale String, sino el valor literal . Para hacer que sea string literalmente, se hace -> const firstanme : string = 'Fernando'
let lastName = 'Herrera'; // Aqui, si saca String. No se puede ser el valor literal ya que al usar let, quiere decir que ese valor literal puede cambiar . 

/*
let diceNumber = 5; // Si se pone el cursor encima, automaticamente detecta el tipo de dato (number)
diceNumber = '5'; // TS no permite esto . Chequeo de tipos
*/
console.log(firstName, lastName);
console.log(lastName.includes('h'));