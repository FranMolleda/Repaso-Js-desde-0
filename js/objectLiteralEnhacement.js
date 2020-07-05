// Object literal enhacement
//Para agrupar varias variables en un objeto

const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Master Of Poppets", "Seek & Destroy", "Enter Sandman"];

//Forma anterior

// const metallica = {
//   banda: banda,
//   genero: genero,
//   canciones: canciones,
// };

//Forma nueva

const metallica = { banda, genero, canciones };

console.log(metallica);
