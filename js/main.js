// 1)input para recibir el nombre,debe cargar ése nombre en una variable y luego:
// - generar texto con ése nombre + el resto de la información, 


// <--------Pedir nombre a usuario y darle la bienvenida----->
let nombre;
const input = document.querySelector("input");
const saludo = document.getElementById("saludo");

input.addEventListener("input", saludarUsuario);


function saludarUsuario(e) {
    
        saludo.innerHTML = `<h3>"¡Hola ` + e.target.value + `!"</h3>
        <h3 class="padding-texto">Jugarás con Garrita🐱, y es un michi al que le encanta ganar, así que prestá mucha atención!.</h3>
        <h3> Recordá que:</h3><br>
        <p class="reglas">
            ⚡ Cada partida tiene 5 rondas, gana quién gane más rondas.<br>
            ⚡ Piedra (💎) gana a tijera (✂️).<br>
            ⚡ Papel (📜) gana a piedra (💎).<br>
            ⚡ Tijera (✂️) gana a papel (📜).<br>
        </p></div>
        <div class="opciones">
            <h2 class="comenzar"> ¿Empezamos?</h2><br>
            <button  id="IniciarJuego" onclick="crearJuego(this)">Iniciar juego</button>
            `
        nombre=e.target.value;
        
        console.log(nombre)
        
    
    // return nombre;
    
}

// <--------Crear página de juego----->

const comenzar = document.getElementById("comenzar");



function crearJuego (){
    // muestra el tipo de evento, el elemento y las coordenadas del click


    comenzar.innerHTML = `<h3> Elije una opción:</h3><br>
    <div class="iconos">
        <button type="button" class="icono"> <img src="assets/img/piedra.png" alt="ícono piedra" height="80" /></button>
        <button type="button" class="icono"> <img src="assets/img/papel.png" alt="ícono papel"height="80" /></button>
        <button type="button" class="icono"> <img src="assets/img/tijera.png" alt="ícono tijera" height="80" /></button>

    </div>
    <div class="eleccion">
        <div>
            <h4>Tú elección fue:</h4>
            <img src="assets/img/roca-amar.png" alt="ícono piedra" height="79">  
        </div>
        <div>
            <h4>La elección de Garrita fue:</h4>
            <img src="assets/img/papelverd.png" alt="ícono mano gato con forma de tijera " height="80">  
        </div>
        
        <p> ¡El ganador de ésta partida es:</p>
    </div>
</div>
<div class="puntos">
    <h3> Tú=  puntos</h3>
    <h3> Garrita= puntos</h3>
    <h2> El ganador es...</h2>

</div>
<div>
    <button> Reiniciar</button>
</div>`
  };

  
function jugar(){

}


// - también cargar el nombre del Jugador en la tabla de resultados y en un recuadro que informe cómo termina el juego.-decidí no hacer esto porque no logré guardar el nombre en una variable-
// 2) botones que registren elección del jugador, al hacerlo deben:
// -desencadenar la elección al azar de la pc y mostrarla en texto
// -comparar ambas elecciones y determinar el ganador de la ronda  y también mostrarla en el texto
// -ir cargando los resueltados en una tabla que se muestre al final
// -contar los intentos y verificar si alguno tuvo 3 victorias.
// 3) crear botón de reinicio