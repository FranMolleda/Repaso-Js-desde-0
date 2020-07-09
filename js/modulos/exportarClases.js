// Exportar Clases

export default class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
  }
}

let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar café", "Alta");

console.log(tarea2);
