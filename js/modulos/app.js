import casaysilla from "./modulos.js";
import { crearTarea, tareaCompletada } from "./exportarFuncion.js";

console.log(casaysilla);

//Importamos una función
const tarea1 = crearTarea("Sacar al Perro", "Media");
console.log(tarea1);

setTimeout(() => {
  tareaCompletada();
}, 2000);
