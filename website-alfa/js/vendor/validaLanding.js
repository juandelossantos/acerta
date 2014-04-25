function validaLanding(){
  'use strict';
  var nombre = document.getElementById('nombre').value;
  var empresa = document.getElementById('empresa').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  if(nombre === ''){
    alert('Digite su nombre por favor.');
  } else {
    if (telefono === ''){
      alert('Digite su número telefónico por favor.');
    } else {
      if (email === ''){
        alert('Digite su dirección de correo por favor.');
      } else {
        if (mensaje === '') {
          alert('digite su mensaje por favor.');
        }
      }
    }
  }


  
}

function init(){
  'use strict';
  document.getElementById('landingForm').onsubmit = validaLanding;
}

window.onload = init;
