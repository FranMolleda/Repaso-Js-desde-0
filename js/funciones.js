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
