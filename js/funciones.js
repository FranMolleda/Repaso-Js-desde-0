// creando una función

//Function Declaration
function saludar(nombre) {
  console.log(`Bienvenido ${nombre}`);
}

saludar("Fran");

//Function expression

const cliente = function (nombreCliente) {
  console.log(`Mostrando datos del cliente ${nombreCliente}`);
};

cliente("Fran");

//Funciones con parametros

//Funciones con parametros por defecto

//Declarativa
function actividad(nombre = "Fran", actividad = "deporte") {
  console.log(
    `La persona ${nombre}, está realizando la actividad de ${actividad}`
  );
}

//Expresion
const actividad1 = function (nombre = "Fran", actividad = "deporte") {
  console.log(
    `La persona ${nombre}, está realizando la actividad de ${actividad}`
  );
};
actividad("Fran", "aprender JavaScript");
actividad();
actividad1("Juan");

//Arrow functions

//Hasta ahora conocido
let viajando = function (destino) {
  return `Viajando a la ciudad de: ${destino}`;
};

//Arrow function

//Sustituimos la palabra "function" por "=>" y la llevamos al otro lado del parantesis
//Quitamos el return y las llaves (siempre y cuando solo retornes una sóla línea)

let viajando1 = (destino) => `Viajando a la ciudad de: ${destino}`;

let viaje;
let viaje1;
viaje = viajando("París");
viaje1 = viajando1("Madrid");

console.log(viaje);
console.log(viaje1);
