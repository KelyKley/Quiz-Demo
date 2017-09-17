function imagen_principal(){
	var h1 = document.getElementById("imagen-arriba");
	var img = document.createElement("IMG");
}


var uno = document.getElementById("container");

var preguntas = ["cual es tu mascota preferida?", 
				"Que deporte te gusta?", 
				"Cual es tu plato preferido", 
				"que genero musical prefieres?", 
				"Que color te gusta"];
var rpta_uno = ["gato", "perro", "anaconda"];
var rpta_dos = ["voley", "futbol", "tenis"];
var rpta_tres = ["saltado", "causa", "chicharron"];
var rpta_cuatro = ["kpop", "balada", "rock"];
var rpta_cinco = ["blanco", "rosa", "negro"];


function comenzar(){
	//alert("holiii");
	var btn = document.getElementById("intro");
	btn.setAttribute("class", "oculto-intro");

	//primera pregunta
	var div_uno = document.createElement("DIV");
	div_uno.setAttribute("id", "one");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("Cual es tu mascota preferida?");
	pregunta.appendChild(text);

	div_uno.appendChild(pregunta);

	for(var i = 0; i<rpta_uno.length; i++){
		var rpta = document.createElement("BUTTON");
		var crear_text_rpta = document.createTextNode(rpta_uno[i]);
		rpta.appendChild(crear_text_rpta);
		//rpta.setAttribute("type", "button");
		rpta.setAttribute("id", rpta_uno[i]);
		rpta.setAttribute("onclick", "clickme(event);");

		//rpta.setAttribute("value" ,rpta_uno[i]);
		div_uno.appendChild(rpta);
		uno.appendChild(div_uno);
	}
}

 var contador =0;
function clickme(event){
	//CORREGIR
	var x = event.target.id;
	//var xxx = document.getElementById("aaa").value;
	//console.log(x.id);
	if (x === "gato") {
		contador++;
		console.log(contador);

	}

	localStorage.primera = x;

	var call = document.getElementById("one");
	call.setAttribute("class", "oculto-intro");

	var div_dos = document.createElement("DIV");
	div_dos.setAttribute("id", "two");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("Que deporte te gusta?");
	pregunta.appendChild(text);

	div_dos.appendChild(pregunta);

	for(var j = 0; j < rpta_dos.length; j++){
		var rpta = document.createElement("BUTTON");
		var crear_text_rpta = document.createTextNode(rpta_dos[j]);
		rpta.appendChild(crear_text_rpta);
		rpta.setAttribute("id", rpta_dos[j]);
		rpta.setAttribute("onclick", "clickme_2(event);");
		div_dos.appendChild(rpta);
		uno.appendChild(div_dos);
	}
}

function clickme_2(event){
	var x = event.target.id;

	if (x === "tenis") {
		contador++;
		console.log(contador);

	}

	localStorage.segunda = x;

	var call = document.getElementById("two");
	call.setAttribute("class", "oculto-intro");

	var div_tres = document.createElement("DIV");
	div_tres.setAttribute("id", "three");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("Cual es tu plato favorito?");
	pregunta.appendChild(text);

	div_tres.appendChild(pregunta);

	for(var k = 0; k < rpta_tres.length; k++){
		var rpta = document.createElement("BUTTON");
		var crear_text_rpta = document.createTextNode(rpta_tres[k]);
		rpta.appendChild(crear_text_rpta);
		rpta.setAttribute("id", rpta_tres[k]);
		rpta.setAttribute("onclick", "clickme_3(event);");
		div_tres.appendChild(rpta);
		uno.appendChild(div_tres);
	}
}

function clickme_3(event){
	var x = event.target.id;

	if (x === "causa") {
		contador++;
		console.log(contador);

	}

	localStorage.tercera = x;

	var call = document.getElementById("three");
	call.setAttribute("class", "oculto-intro");

	var div_cuatro = document.createElement("DIV");
	div_cuatro.setAttribute("id", "four");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("Que genero de musica te gusta?");
	pregunta.appendChild(text);

	div_cuatro.appendChild(pregunta);

	for(var l = 0; l < rpta_cuatro.length; l++){
		var rpta = document.createElement("BUTTON");
		var crear_text_rpta = document.createTextNode(rpta_cuatro[l]);
		rpta.appendChild(crear_text_rpta);
		rpta.setAttribute("id", rpta_cuatro[l]);
		rpta.setAttribute("onclick", "clickme_4(event);");
		div_cuatro.appendChild(rpta);
		uno.appendChild(div_cuatro);
	}
}

function clickme_4(event){
	var x = event.target.id;

	if (x === "kpop") {
		contador++;
		console.log(contador);

	}

	localStorage.cuarta = x;

	var call = document.getElementById("four");
	call.setAttribute("class", "oculto-intro");

	var div_cinco = document.createElement("DIV");
	div_cinco.setAttribute("id", "five");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("Que color te gusta?");
	pregunta.appendChild(text);

	div_cinco.appendChild(pregunta);

	for(var m = 0; m < rpta_cinco.length; m++){
		var rpta = document.createElement("BUTTON");
		var crear_text_rpta = document.createTextNode(rpta_cinco[m]);
		rpta.appendChild(crear_text_rpta);
		rpta.setAttribute("id", rpta_cinco[m]);
		rpta.setAttribute("onclick", "clickme_5(event);");
		div_cinco.appendChild(rpta);
		uno.appendChild(div_cinco);
	}
}

/*localStorage
	var primero = localStorage.primera;
	var segundo = localStorage.segunda;
	var tercero = localStorage.tercera;
	var cuarto = localStorage.cuarta;
	var quinto = localStorage.quinta;
var aaa = [
	primero, segundo, tercero, cuarto, quinto
]*/
function clickme_5(event){
	
	var x = event.target.id;

	if (x === "negro") {
		contador++;
		console.log(contador);

	}

	localStorage.quinta = x;

	var call = document.getElementById("five");
	call.setAttribute("class", "oculto-intro");

	var mi_respuesta = document.createElement("DIV");
	mi_respuesta.setAttribute("id", "respuestas");
	var pregunta = document.createElement("H1");
	var text = document.createTextNode("MIS RESPUESTAS");
	pregunta.appendChild(text);

	mi_respuesta.appendChild(pregunta);

	for(var p = 0; p < preguntas.length; p++){
		var rpta = document.createElement("H4");
		var crear_text_rpta = document.createTextNode(preguntas[p] + aaa[p]);
		rpta.appendChild(crear_text_rpta);
		//rpta.setAttribute("id", preguntas[m]);

		mi_respuesta.appendChild(rpta);
		uno.appendChild(mi_respuesta);
	}
	var create_button = document.createElement("BUTTON");
	var text_btn = document.createTextNode("comprobar");
	create_button.appendChild(text_btn);
	create_button.setAttribute("onclick", "volver();");
	
	mi_respuesta.appendChild(create_button);
}

function volver(){
	var call = document.getElementById("respuestas");
	call.setAttribute("class", "oculto-intro");
	comenzar();
}