//Spread Operator ...

let lenguajes = ["JavaScript", "PHP", "Django"];
let framesWorks = ["React", "Laravel", "Django"];

//unir los arrays en uno solo

let unidos = [...lenguajes, ...framesWorks];

console.log(unidos);

function suma(a, b, c) {
  console.log(a + b + c);
}

const numeros = [1, 2, 3];
suma(...numeros);
