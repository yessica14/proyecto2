function hola(){
  console.log('hola');
}
hola();
$(document).ready(function() {
  $("p.cambiar").html('cambiado via jquery').css('color','red');
});
