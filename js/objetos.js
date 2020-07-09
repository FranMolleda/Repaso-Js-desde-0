//Objetos

//Objet literal

let persona = { nombre: "Fran", profesion: "Desarrollador Web", edad: 43 };

console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);

// Object Constructor

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//Crear una nueva tarea

const tarea1 = new Tarea("Aprender Js y React", "Urgente");
const tarea2 = new Tarea("Montar en bici", "No es urgente");

console.log(tarea1);
console.log(tarea2);
