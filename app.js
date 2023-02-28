
// document.getElementById('botones').onclick = function () {
//     console.log("desplegar");
//     document.getElementById('botones').innerHTML= "PRUEBA"
// }

var form = document.getElementById("desplegables");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "#F9D5D1";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);

