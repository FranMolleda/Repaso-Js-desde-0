//Arreglos y .map

const carrito = ["arreglo1", "arreglo2", "arreglo3"];

console.log(carrito);

const appContenedor = document.querySelector("#app");

let html = "";

carrito.forEach((elemento) => {
  html += `<li>${elemento}</li>`;
});

carrito.map((elemento) => {
  html += `el producto es: <li>${elemento}</li>`;
});

appContenedor.innerHTML = html;

//Object keys

const persona = {
  nombre: "Fran",
  edad: 43,
  profesion: "essarrollador Web",
};

console.log(Object.keys(persona));
