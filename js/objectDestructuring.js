//Destructuring de objetos

const aprendiendoJS = {
  version: { nueva: "ES6+", anterior: "ES5" },
  frameworks: ["React", "VueJS", "Angular"],
};

//Destructurin es extraer valores de un objeto

let { version, frameworks } = aprendiendoJS;
let { anterior } = aprendiendoJS.version;

console.log(version);
console.log(frameworks);
console.log(anterior);
