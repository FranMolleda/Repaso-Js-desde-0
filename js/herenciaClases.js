//Herencia

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
  }
}

//Para heredar, en lugar de repetir this.nombre y this.prioridad, ponemos super(nombre,prioridad) y agregamos lo que es distinto (this.cantidad)
//Podemos hacer lo mismo con la función mostrar()
class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  mostrar() {
    super.mostrar();
    console.log(`la cantidad es de ${this.cantidad}`);
  }
}

//crear los objetos
let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Preparar café", "Alta");

console.log(tarea2);

//Compras

let compra1 = new ComprasPendientes("jabon", "urgente", 3);

console.log(compra1.mostrar());
