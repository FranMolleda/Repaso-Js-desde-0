//Escribir clases

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
  }
}

//crear los objetos
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar café", "Alta");
let tarea3 = new Tarea("Pasear al Perro", "Media");
let tarea4 = new Tarea("Conocer a mis suegros", "Baja");

Tarea.mostrar;

console.log(tarea1.mostrar());
console.log(tarea2);
console.log(tarea3.mostrar());
console.log(tarea4);
