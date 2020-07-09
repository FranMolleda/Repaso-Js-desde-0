import casaysilla from "./modulos.js";
//Importamos una función
import { crearTarea, tareaCompletada } from "./exportarFuncion.js";
//Importamos una clase
import Tarea from "./exportarClases.js";

console.log(casaysilla);

//Importamos una función
const tarea1 = crearTarea("Sacar al Perro", "Media");
console.log(tarea1);

setTimeout(() => {
  tareaCompletada();
}, 2000);

//Importamos Clases

const tarea2 = new Tarea("Aprender JS", "Alta");
tarea2.mostrar();
