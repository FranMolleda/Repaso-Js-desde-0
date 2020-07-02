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
