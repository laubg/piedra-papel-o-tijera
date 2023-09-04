// 1)input para recibir el nombre,debe cargar ése nombre en una variable y luego:
// - generar texto con ése nombre + el resto de la información, 

let seleccionUs;
let seleccionPc;
// <--------Pedir nombre a usuario y darle la bienvenida----->
let nombre="";
const input = document.querySelector("input");
const saludo = document.getElementById("saludo");

input.addEventListener("input", saludarUsuario);


// 
function saludarUsuario(e) {
    
        saludo.innerHTML = `<h3>"¡Hola ` + e.target.value + `!"</h3>
        <h3 class="padding-texto">Jugarás con Garrita🐱, y es un michi al que le encanta ganar, así que prestá mucha atención!.</h3>
        <br><h3> Recordá que:</h3><br>
        <p class="reglas">
            ⚡ Cada partida tiene 5 rondas, gana quién gane más rondas.<br>
            ⚡ Piedra (💎) gana a tijera (✂️).<br>
            ⚡ Papel (📜) gana a piedra (💎).<br>
            ⚡ Tijera (✂️) gana a papel (📜).<br>
        </p></div>
        <div class="opciones">
            <h2 class="comenzar"> ¿Empezamos?</h2><br>
            <button  id="IniciarJuego" onclick="crearJuego()">Iniciar juego</button>
            `
        nombre =document.querySelector("input").value;
        console.log(nombre)
        
        
    
    return nombre;

    
}

console.log(nombre)
// <--------Crear página de juego----->

const comenzar = document.getElementById("comenzar");



function crearJuego (){

    comenzar.innerHTML = `<h3> Elije una opción:</h3><br>
    <div class="iconos" id="eleccionUsuario">
        
      
      <input class="icono" type="radio" name="eleccion" value="0" id="piedra">
      <label class="eleccionUs" for="piedra"><img src="assets/img/piedra.png" alt="ícono piedra" height="80" /></label>
      
      <input class="icono" type="radio" name="eleccion" value="1" id="papel">
      <label class="eleccionUs" for="papel"><img src="assets/img/papel.png" alt="ícono papel"height="80" /></label>
      
      <input class="icono" type="radio" name="eleccion" value="2" id="tijera">
      <label class="eleccionUs" for="tijera"><img src="assets/img/tijera.png" alt="ícono tijera" height="80" /></label>   
      
    </div>
    <div class="resultados">
       <button id="mostrar" onclick="obtenerJugadaUsuario()">Elegir</button
    </div> 
    <div id="resultadoUsuario"></div> 
    <div id="resultadoPc"></div> 
    <div id="resultadoRonda"></div> 
    
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

// <-------------Jugar: tendrá 4 pasos------------------>  

function jugar(){

}
// <--------Paso 1:Capturar la elección del usuario-----> 




function obtenerJugadaUsuario(){
let opcion = document.querySelector('input[name="eleccion"]:checked')
// console.log(opcion)
// alert(opcion.value);
seleccionUs= opcion.value;
// console.log(seleccionado)
const eleccUsuario= document.getElementById("resultadoUsuario")


if (seleccionUs==0) {
    eleccUsuario.innerHTML = `
        <div class="eleccU">
            <h4>😏 Tú elección fue: Piedra</h4> 
        </div>`
} else if(seleccionUs==1){
    eleccUsuario.innerHTML = `
    <div class="eleccU">
        <h4>😏 Tú elección fue: Papel</h4> 
    </div>`
}else {
    eleccUsuario.innerHTML = `
    <div class="eleccU">
        <h4>😏 Tú elección fue: Tijera</h4> 
    </div>`

}
obtenerJugadaPC()
detGanadorRonda()
} 



// <---------Paso 2:Capturar la elección de la PC-------> 

// obtenerJugadaPC();
// console.log(obtenerJugadaPC())
function obtenerJugadaPC() {
    seleccionPc= Math.floor(Math.random() * 3);
    const eleccPc= document.getElementById("resultadoPc")


if (seleccionPc==0) {
    eleccPc.innerHTML = `
        <div class="eleccU">
            <h4>😺 La elección de Garrita fue: Piedra</h4> 
        </div>`
} else if(seleccionPc==1){
    eleccPc.innerHTML = `
    <div class="eleccU">
        <h4>😺 La elección de Garrita fue: Papel</h4> 
    </div>`
}else {
    eleccPc.innerHTML = `
    <div class="eleccU">
        <h4>😺 La elección de Garrita fue: Tijera</h4> 
    </div>`

}
  }
// <---------Paso 3:Comparar ambos valores y determinar el ganador de cada ronda------->
function detGanadorRonda(){
    const resRonda= document.getElementById("resultadoRonda")
    
    if ((seleccionUs==0 & seleccionPc==0)||(seleccionUs==1 & seleccionPc==1)||(seleccionUs==2 & seleccionPc==2)){
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅 El resutado de la ronda fue: Empate</h4> 
        </div>`
    }else if((seleccionUs==0 & seleccionPc==2)||(seleccionUs==1 & seleccionPc==0)||(seleccionUs==2 & seleccionPc==1)){
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅 El resutado de la ronda fue: ¡Ganaste ésta ronda!</h4> 
        </div>`
    }else{
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅El resutado de la ronda fue: ¡Garrita ganó ésta ronda!</h4> 
        </div>`
    }
} 
// <---------Paso 4:Contar rondas y determinar el ganador del juego-------> 

// <-------------Reset Jugada------------------> 

// - también cargar el nombre del Jugador en la tabla de resultados y en un recuadro que informe cómo termina el juego.-decidí no hacer esto porque no logré guardar el nombre en una variable-
// 2) botones que registren elección del jugador, al hacerlo deben:
// -desencadenar la elección al azar de la pc y mostrarla en texto
// -comparar ambas elecciones y determinar el ganador de la ronda  y también mostrarla en el texto
// -ir cargando los resueltados en una tabla que se muestre al final
// -contar los intentos y verificar si alguno tuvo 3 victorias.
// 3) crear botón de reinicio