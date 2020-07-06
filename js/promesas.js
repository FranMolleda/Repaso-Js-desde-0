//Promesas

const aplicarDescuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let descuento = true;

    if (descuento) {
      resolve("Descuento aplicado");
    } else {
      reject("No se pudo aplicar el descuento");
    }
  }, 2000);
});

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

//Promesas con Ajax

const descargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    //Pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open("GET", api, true);

    //on load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    //opcional (on error)
    xhr.onerror = (error) => reject(Error(xhr.statusText));

    //send
    xhr.send();
  });

descargarUsuarios(10).then(
  (miembros) => console.log(miembros),
  (error) => console.error(new Error("Hubo un error" + error))
);
