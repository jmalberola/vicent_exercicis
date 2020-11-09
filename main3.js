//EXERCICI 5

//ARRAY (de persones, però seria el mateix per a altres)
let arrayA = [{
  nombre : "Pepe",
  edad: 30
},
{
  nombre : "Toni",
  edad: 20
},
{
  nombre : "Ana",
  edad: 15
},
{
  nombre : "Manolo",
  edad: 24
}];
/*SI VOLEM TRAURE INFORMACIÓ
console.log(persona.nombre);
console.log(persona.edad);
console.log(arrayA[0].nombre);
console.log(arrayA.length);*/

//FILTER: aplica una funció a cada element i torna un nou array amb els que cumplixen la funció
function menor(x){
  if(x.edad< 25){
    return true;
  }
  else return false;
}

let newArray = arrayA.filter(menor);
console.log(newArray);

//MAP: aplica una funció a cada element que el que fa és transformar cada element
function soloedad(x){
  return x.edad;
}

//Ho aplique a l'original, però podriem aplicar-ho a newArray
let newArray2 = arrayA.map(soloedad);
console.log(newArray2);


//REDUCE: agafa dos a dos i li aplica la funció fins que només quede 1 valor
//20 10 30 40
//Agafaria el 20 i el 10 -> 30
//Agafaria el 30 i 40 -> 70
//Ara agafa els 2 resultats 30 i 70 -> 100
function suma(a,b){
  return a+b;
}

//Ho aplique sobre els valors que hi ha en newArray2
let newArray3 = newArray2.reduce(suma,0);

console.log(newArray3/newArray2.length);
