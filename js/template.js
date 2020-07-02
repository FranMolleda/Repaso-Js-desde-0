//Template Strings

const nombre = "Fran";
const trabajo = "Dev Web";

//concatenar js

console.log("nombre: " + nombre + ", trabajo: " + trabajo);
console.log(`nombre: ${nombre}, trabajo: ${trabajo}`);

//concatenar con multiples líneas

const contenedorApp = document.querySelector("#app");
//ANTES SE HACÍA ASÍ:
// let html =
//   "<ul>" +
//   "<li> Nombre: " +
//   nombre +
//   "</li>" +
//   "<li> Trabajo: " +
//   trabajo +
//   "</li>";
// ("</ul>");

//AHORA:

let html = `
    <ul>
        <li> Nombre: ${nombre} </li>
        <li> Trabajo: ${trabajo} </li>
    </ul>   
`;

contenedorApp.innerHTML = html;
