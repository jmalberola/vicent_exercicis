//EXERCICI 4
document.addEventListener('DOMContentLoaded', () => {

let body = document.getElementById("body");

for(let i = 0; i < 5; i++){
  let but = document.createElement('button')
  but.setAttribute('id', 'btn'+i);
  but.setAttribute('type', 'button')
  but.innerHTML = ""+i;
  //but.onclick = comprovar('btn'+i);
  but.addEventListener("click",comprovar)

  body.appendChild(but)
}


function comprovar(/*clicked*/){

  console.log("hola "+this.id)//this és el botó

}

})
