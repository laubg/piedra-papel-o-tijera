// 1)input para recibir el nombre,debe cargar ése nombre en una variable y luego:
// - generar texto con ése nombre + el resto de la información, 

let nombre;
const input = document.querySelector("input");
const saludo = document.getElementById("saludo");

input.addEventListener("input", saludarUsuario);


function saludarUsuario(e) {
    
        saludo.innerHTML = `<h3>"¡Hola "` + e.target.value + `" !"</h3>
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
            <button  id="IniciarJuego" onclick="saludarUsuario(this)">Iniciar juego</button>
            `
        nombre=e.target.value;
        
        console.log(nombre)
        
    
    // return nombre;
    
}

console.log(nombre)
crearJuego= 
function jugar(){

}
// - también cargar el nombre del Jugador en la tabla de resultados y en un recuadro que informe cómo termina el juego.-decidí no hacer esto porque no logré guardar el nombre en una variable-
// 2) botones que registren elección del jugador, al hacerlo deben:
// -desencadenar la elección al azar de la pc y mostrarla en texto
// -comparar ambas elecciones y determinar el ganador de la ronda  y también mostrarla en el texto
// -ir cargando los resueltados en una tabla que se muestre al final
// -contar los intentos y verificar si alguno tuvo 3 victorias.
// 3) crear botón de reinicio