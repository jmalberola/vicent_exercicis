//EXERCICI 6

(function () {
 "use strict"; // Prova a descomentar
 document.addEventListener("DOMContentLoaded", function () {
   class Sunpanel {
     constructor(power) {
       this.power = power;
     }
     showPower() {
       console.log(`${this.power}`);
     }
   }
 
   let sun1 = new Sunpanel(1000);
   console.log(sun1);
 
 
   //let buttonPower = document.querySelector('#buttonPower');
  let buttonPower = document.getElementById("boto");
   buttonPower.addEventListener('click', sun1.showPower); //NO FUNCIONA
   //buttonPower.addEventListener('click', () => sun1.showPower());  //FUNCIONA
   //buttonPower.addEventListener('click', function () { sun1.showPower(); }); //FUNCIONA
   //buttonPower.showPower = sun1.showPower;
   //var that =    buttonPower
   //buttonPower.addEventListener('click', () => that.showPower()); //En una funció representa al context d’execució
   //buttonPower.addEventListener('click', function () { this.showPower(); });
 });
})();
