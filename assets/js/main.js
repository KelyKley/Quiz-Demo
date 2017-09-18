var h1 = document.getElementById("imagen-arriba");
var galeria = ["assets/img/ship.png", "assets/img/bycicle.png", "assets/img/bus.png", "assets/img/car.png", "assets/img/truck.png", "assets/img/plane.png"];

var uno = document.getElementById("container");

var preguntas = ["¿Cuál es la aerolínea más antigua del mundo?",
    "¿Cuál es el puerto más grande del mundo?",
    "¿Cuál es la distancia más larga en bicicleta hacia atrás?",
    "¿Cuál es la velocidad más alta alcanzada nunca por un autobús escolar?",
    "¿Cuál es el viaje más largo en un tanque de gas?"
];
var rpta_uno = ["Avianca", "KLM", "Qantas"];
var rpta_dos = ["Puerto de Shanghai", "Puerto de Singapur", "Puerto de Rotterdam"];
var rpta_tres = ["89,30 km", "675,10 km", "337,60 km"];
var rpta_cuatro = ["590 km/h", "320 km/h", "245 km/h"];
var rpta_cinco = ["2617 km", "3568 km", "1732 km"];

var rpta_correcta = ["KLM", "Puerto de Shanghai", "337,60 km", "590 km/h", "2617 km"];

function imagen_central() {
    var img = document.createElement("IMG");
    img.setAttribute("src", galeria[5]);
    img.setAttribute("id", "image");
    h1.appendChild(img);
}
imagen_central()

var marcador = 0;

var div_contenedor = document.getElementById("content");

function comenzar() {
    var btn = document.getElementById("intro");
    btn.setAttribute("class", "oculto-intro");

    var div_uno = document.createElement("DIV");
    div_uno.setAttribute("id", "one");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode(preguntas[0]);
    pregunta.appendChild(text);
    div_uno.appendChild(pregunta);

    for (var i = 0; i < rpta_uno.length; i++) {
        var rpta = document.createElement("BUTTON");
        var crear_text_rpta = document.createTextNode(rpta_uno[i]);
        rpta.appendChild(crear_text_rpta);
        rpta.setAttribute("id", rpta_uno[i]);
        rpta.setAttribute("onclick", "clickme(event);");
        div_uno.appendChild(rpta);
        uno.appendChild(div_uno);
    }
}

var contador = 0;

function clickme(event) {
    var porcentaje = document.getElementById("porcentaje");
    porcentaje.removeAttribute("style");
    porcentaje.setAttribute("style", "width:20%;");
    var contador_progresivo = document.getElementById("contador-progresivo");
    contador_progresivo.removeAttribute("value")
    contador_progresivo.setAttribute("value", "1 de 5");

    var x = event.target.id;
    if (x === rpta_correcta[0]) {
        contador++;
        console.log(contador);
    }
    localStorage.primera = x;

    var call = document.getElementById("one");
    call.setAttribute("class", "oculto-intro");

    var image = document.getElementById("image");
    image.setAttribute("class", "oculto-intro");
    //agrega imagen de arriba
    var img = document.createElement("IMG");
    img.setAttribute("src", galeria[0]);
    img.setAttribute("id", "cambio");
    h1.appendChild(img);

    var div_dos = document.createElement("DIV");
    div_dos.setAttribute("id", "two");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode(preguntas[1]);
    pregunta.appendChild(text);
    div_dos.appendChild(pregunta);

    for (var j = 0; j < rpta_dos.length; j++) {
        var rpta = document.createElement("BUTTON");
        var crear_text_rpta = document.createTextNode(rpta_dos[j]);
        rpta.appendChild(crear_text_rpta);
        rpta.setAttribute("id", rpta_dos[j]);
        rpta.setAttribute("onclick", "clickme_2(event);");
        div_dos.appendChild(rpta);
        uno.appendChild(div_dos);
    }
}

function clickme_2(event) {
    var porcentaje = document.getElementById("porcentaje");
    porcentaje.removeAttribute("style");
    porcentaje.setAttribute("style", "width:40%;");
    var contador_progresivo = document.getElementById("contador-progresivo");
    contador_progresivo.removeAttribute("value")
    contador_progresivo.setAttribute("value", "2 de 5");

    var x = event.target.id;
    if (x === rpta_correcta[1]) {
        contador++;
        console.log(contador);
    }
    localStorage.segunda = x;

    var call = document.getElementById("two");
    call.setAttribute("class", "oculto-intro");
    //agrega imagen de arriba
    var image = document.getElementById("cambio");
    image.setAttribute("class", "oculto-intro");
    var img = document.createElement("IMG");
    img.setAttribute("src", galeria[1]);
    img.setAttribute("id", "cambio2");

    h1.appendChild(img);

    var div_tres = document.createElement("DIV");
    div_tres.setAttribute("id", "three");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode(preguntas[2]);
    pregunta.appendChild(text);
    div_tres.appendChild(pregunta);

    for (var k = 0; k < rpta_tres.length; k++) {
        var rpta = document.createElement("BUTTON");
        var crear_text_rpta = document.createTextNode(rpta_tres[k]);
        rpta.appendChild(crear_text_rpta);
        rpta.setAttribute("id", rpta_tres[k]);
        rpta.setAttribute("onclick", "clickme_3(event);");
        div_tres.appendChild(rpta);
        uno.appendChild(div_tres);
    }
}

function clickme_3(event) {
    var porcentaje = document.getElementById("porcentaje");
    porcentaje.removeAttribute("style");
    porcentaje.setAttribute("style", "width:60%;");
    var contador_progresivo = document.getElementById("contador-progresivo");
    contador_progresivo.removeAttribute("value")
    contador_progresivo.setAttribute("value", "3 de 5");

    var x = event.target.id;
    if (x === rpta_correcta[2]) {
        contador++;
        console.log(contador);
    }

    localStorage.tercera = x;

    var call = document.getElementById("three");
    call.setAttribute("class", "oculto-intro");
    //agrega imagen de arriba
    var image = document.getElementById("cambio2");
    image.setAttribute("class", "oculto-intro");
    var img = document.createElement("IMG");
    img.setAttribute("id", "cambio3");
    img.setAttribute("src", galeria[2]);
    h1.appendChild(img);

    var div_cuatro = document.createElement("DIV");
    div_cuatro.setAttribute("id", "four");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode(preguntas[3]);
    pregunta.appendChild(text);
    div_cuatro.appendChild(pregunta);

    for (var l = 0; l < rpta_cuatro.length; l++) {
        var rpta = document.createElement("BUTTON");
        var crear_text_rpta = document.createTextNode(rpta_cuatro[l]);
        rpta.appendChild(crear_text_rpta);
        rpta.setAttribute("id", rpta_cuatro[l]);
        rpta.setAttribute("onclick", "clickme_4(event);");
        div_cuatro.appendChild(rpta);
        uno.appendChild(div_cuatro);
    }
}

function clickme_4(event) {
    var porcentaje = document.getElementById("porcentaje");
    porcentaje.removeAttribute("style");
    porcentaje.setAttribute("style", "width:80%;");
    var contador_progresivo = document.getElementById("contador-progresivo");
    contador_progresivo.removeAttribute("value");
    contador_progresivo.setAttribute("value", "4 de 5");

    var x = event.target.id;
    if (x === rpta_correcta[3]) {
        contador++;
        console.log(contador);
    }
    localStorage.cuarta = x;

    var call = document.getElementById("four");
    call.setAttribute("class", "oculto-intro");
    //agrega imagen de arriba
    var image = document.getElementById("cambio3");
    image.setAttribute("class", "oculto-intro");

    var img = document.createElement("IMG");
    img.setAttribute("id", "cambio4");
    img.setAttribute("src", galeria[3]);
    h1.appendChild(img);

    var div_cinco = document.createElement("DIV");
    div_cinco.setAttribute("id", "five");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode(preguntas[4]);
    pregunta.appendChild(text);

    div_cinco.appendChild(pregunta);

    for (var m = 0; m < rpta_cinco.length; m++) {
        var rpta = document.createElement("BUTTON");
        var crear_text_rpta = document.createTextNode(rpta_cinco[m]);
        rpta.appendChild(crear_text_rpta);
        rpta.setAttribute("id", rpta_cinco[m]);
        rpta.setAttribute("onclick", "clickme_5(event);");
        div_cinco.appendChild(rpta);
        uno.appendChild(div_cinco);
    }
}

function clickme_5(event) {
    var porcentaje = document.getElementById("porcentaje");
    porcentaje.removeAttribute("style");
    porcentaje.setAttribute("style", "width:100%;");
    var contador_progresivo = document.getElementById("contador-progresivo");
    contador_progresivo.removeAttribute("value");
    contador_progresivo.setAttribute("value", "5 de 5");

    var x = event.target.id;
    if (x === rpta_correcta[4]) {
        contador++;
        console.log(contador);
    }
    localStorage.quinta = x;

    var call = document.getElementById("five");
    call.setAttribute("class", "oculto-intro");

    var mi_respuesta = document.createElement("DIV");
    mi_respuesta.setAttribute("id", "respuestas");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode("MIS RESPUESTAS");
    pregunta.appendChild(text);
    mi_respuesta.appendChild(pregunta);

    //localStorage
    var primero = localStorage.primera;
    var segundo = localStorage.segunda;
    var tercero = localStorage.tercera;
    var cuarto = localStorage.cuarta;
    var quinto = localStorage.quinta;
    var mi_rpta = [primero, segundo, tercero, cuarto, quinto];

    for (var p = 0; p < preguntas.length; p++) {
        var rpta = document.createElement("H4");
        rpta.setAttribute("class", "correctas");
        var crear_text_rpta = document.createTextNode(preguntas[p] + "  " + mi_rpta[p]);
        rpta.appendChild(crear_text_rpta);
        mi_respuesta.appendChild(rpta);
        uno.appendChild(mi_respuesta);
    }

    var create_button = document.createElement("BUTTON");
    create_button.setAttribute("class", "text-center");
    var text_btn = document.createTextNode("COMPROBAR");
    create_button.appendChild(text_btn);
    create_button.setAttribute("onclick", "correccion();");
    mi_respuesta.appendChild(create_button);
}

function correccion() {
    var call = document.getElementById("respuestas");
    call.setAttribute("class", "oculto-intro");

    var mi_respuesta = document.createElement("DIV");
    mi_respuesta.setAttribute("id", "respuestas_correctas");
    var pregunta = document.createElement("H3");
    var text = document.createTextNode("Respuestas correctas");
    pregunta.appendChild(text);
    var contador_correctas = document.createElement("H4");
    var texto = document.createTextNode(contador + " de 5");
    contador_correctas.appendChild(texto);
    mi_respuesta.appendChild(pregunta);
    mi_respuesta.appendChild(contador_correctas);
    //localStorage
    var primero = localStorage.primera;
    var segundo = localStorage.segunda;
    var tercero = localStorage.tercera;
    var cuarto = localStorage.cuarta;
    var quinto = localStorage.quinta;
    var mi_rpta = [primero, segundo, tercero, cuarto, quinto];

    for (var p = 0; p < preguntas.length; p++) {
        var rpta = document.createElement("H5");
        rpta.setAttribute("class", "califica");
        var crear_text_rpta = document.createTextNode(preguntas[p] + " " + mi_rpta[p] + "  ->  " + rpta_correcta[p]);
        rpta.appendChild(crear_text_rpta);
        mi_respuesta.appendChild(rpta);
        uno.appendChild(mi_respuesta);
    }

    var create_button = document.createElement("BUTTON");
    var text_btn = document.createTextNode("INICIAR");
    create_button.setAttribute("class", "text-center");
    create_button.setAttribute("type", "submit");
    create_button.appendChild(text_btn);
    create_button.setAttribute("onclick", "document.location.reload();");
    mi_respuesta.appendChild(create_button);
}