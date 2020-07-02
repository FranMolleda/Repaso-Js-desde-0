//Scope

//Scope var

var musica = "Rock";

if (musica) {
  var musica = "grunge";
  console.log(`dentro del if ${musica} con variable var`);
}

console.log(`fuera del if ${musica} con variable var`);

//Scope let

let musica1 = "Rock";

if (musica1) {
  let musica1 = "grunge";
  console.log(`dentro del if ${musica1} con variable let`);
}

console.log(`fuera del if ${musica1} con variable let`);
