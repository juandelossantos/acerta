	var metalSec = document.getElementById('metal-sec');
	var ambientalSec = document.getElementById('ambiental-sec');
	var industrialSec = document.getElementById('industrial-sec');

	var metalBtn = document.getElementById('metal-btn');
	var	ambientalBtn = document.getElementById('ambiental-btn');
	var industrialBtn = document.getElementById('industrial-btn');

	var fondoMetalBtn = document.getElementById('sec-metal');
	var fondoAmbientalBtn = document.getElementById('sec-ambiental');
	var fondoIndustrialBtn = document.getElementById('sec-industrial');

	// clase+"-img"+i+".jpg"
	

	
	function ver() {
	'use strict';

	function cambiafondo(id) {
		var clase = id;
		var nombreClase = document.getElementById(clase);
		var url = "url('../website2/img/";
		var nombreImg = id + "-img";
		var tipoImg = ".jpg";
		
		var segundo=1;

		var timer = setInterval(function(){
			segundo++;
			
			var fullUrl = url+nombreImg+segundo+tipoImg+"')";
			
			nombreClase.style.backgroundImage=fullUrl;
			nombreClase.style.transition = "all 0.6s ease";
			
			if(segundo == 3){
				segundo = 0;
				//clearInterval(timer);
				//console.log('reinicia conteo');
			}	
		}, 4000);


		
	};

	cambiafondo('desc-metal-sec');

	metalBtn.onclick = function() {
		

		fondoMetalBtn.style.backgroundColor = "#e74c3c";
		fondoAmbientalBtn.style.backgroundColor = "#ecf0f1";
		fondoIndustrialBtn.style.backgroundColor = "#ecf0f1"
		fondoMetalBtn.style.borderBottom = "1px solid #e74c3c";
		fondoAmbientalBtn.style.borderBottom = "1px solid #ecf0f1";
		fondoIndustrialBtn.style.borderBottom = "1px solid #ecf0f1";
		metalSec.style.display= "block";
		ambientalSec.style.display= "none";
		industrialSec.style.display= "none";
		cambiafondo('desc-metal-sec');



		
	};

	ambientalBtn.onclick = function() {
		fondoAmbientalBtn.style.backgroundColor = "#2980b9";
		fondoIndustrialBtn.style.backgroundColor = "#ecf0f1";
		fondoMetalBtn.style.backgroundColor = "#ecf0f1";
		fondoMetalBtn.style.borderBottom = "1px solid #ecf0f1";
		fondoAmbientalBtn.style.borderBottom = "1px solid #2980b9";
		fondoIndustrialBtn.style.borderBottom = "1px solid #ecf0f1";
		metalSec.style.display= "none";
		ambientalSec.style.display= "block";
		industrialSec.style.display= "none";
		cambiafondo('desc-ambiental-sec');
	};

	industrialBtn.onclick = function() {
		fondoIndustrialBtn.style.backgroundColor = "#27ae60";
		fondoMetalBtn.style.backgroundColor = "#ecf0f1";
		fondoAmbientalBtn.style.backgroundColor = "#ecf0f1";
		fondoMetalBtn.style.borderBottom = "1px solid #ecf0f1";
		fondoAmbientalBtn.style.borderBottom = "1px solid #ecf0f1";
		fondoIndustrialBtn.style.borderBottom = "1px solid #27ae60";
		metalSec.style.display = "none";
		ambientalSec.style.display = "none";
		industrialSec.style.display = "block";
		cambiafondo('desc-industrial-sec');
	};

	
	
	
};
function init() {
		
		ver();


	};

window.onload = init;