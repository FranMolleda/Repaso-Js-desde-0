//Metodos en Arrays

const personas = [
  { nombre: "Fran", edad: 43, aprendiendo: "JavaScript" },
  { nombre: "Majo", edad: 35, aprendiendo: "PHP" },
  { nombre: "Ale", edad: 43, aprendiendo: "Python" },
  { nombre: "Berni", edad: 41, aprendiendo: "ReactJs" },
  { nombre: "Negdo", edad: 42, aprendiendo: "MongoDb" },
];

const mayor36 = personas.filter((persona) => {
  return persona.edad < 43;
});

const persona35 = personas.find((persona) => {
  return persona.nombre === "Majo";
});

let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

console.log(mayor36);
console.log(`Majo está aprendiendo: ${persona35.aprendiendo}`);
console.log(total);
