//Prototype

const persona = { nombre: "Fran", profesion: "Desarrollador Web", edad: 43 };
//Si quisiese hacerlo con un objeto literal la forma sería esta:

// persona.__proto__.mostrarInformacionTarea = function () {
//   return `La tarea ${this.nombre}, tiene una prioridad ${this.urgencia}`;
// };

// console.log(persona.mostrarInformacionTarea());

// Object Constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//Agregar prototype a Tarea. Es una manera de anclar una función a un objeto
Tarea.prototype.mostrarInformacionTarea = function () {
  return `La tarea ${this.nombre}, tiene una prioridad ${this.urgencia}`;
};

//Crear una nueva tarea

const tarea1 = new Tarea("Aprender Js y React", "Urgente");

//Para imprimirlo, le agregas .mostrarInformacionTarea()
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
