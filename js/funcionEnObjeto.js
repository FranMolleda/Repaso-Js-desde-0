//Funciones o metodos en un objeto

const persona = {
  nombre: "Fran",
  trabajo: "desarrollador Web",
  edad: 500,
  musicaRock: true,
  mostrarInformacion() {
    console.log(`${this.nombre} es ${this.trabajo}`);
  },
};

persona.mostrarInformacion();
