let seleccionUs;
let seleccionPc;
let numeroRondas= 1;
let jugadasGanadasUsuario= 0;
let jugadasGanadasPc= 0;
let rondasEmpatadas= 0;




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
            🔷 Cada partida tiene 5 rondas, gana quién gane más rondas.<br>
            ⚡ Piedra (💎) gana a tijera (✂️).<br>
            ⚡ Papel (📜) gana a piedra (💎).<br>
            ⚡ Tijera (✂️) gana a papel (📜).<br>
        </p></div>
        <div class="opciones">
            <h2 class="comenzar"> ¿Empezamos?</h2><br>
            <button  id="IniciarJuego" onclick="crearJuego()" style="display:block;">Iniciar juego</button>
            `
        nombre =document.querySelector("input").value;
        console.log(nombre)
        
        
    
    return nombre;

    
}

// <--------Crear página de juego----->

const comenzar = document.getElementById("comenzar");

function crearJuego (){
    // <--------Ocultar botón de Inicio de jugada----->
    botonInicio= document.getElementById("IniciarJuego");
    botonInicio.style.display = 'none';
    // <--------Imprimir botones para que usuario elija ----->
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
    <div id="resultadoJuego" style="display:none;"></div>
    
</div>

<div class="reset" id="reset" style="display:none;">
    <button onclick="reiniciar()"> Reiniciar</button>
</div>`
  };

// <-------------Jugar: tendrá 4 pasos------------------>  


// <--------Paso 1:Capturar la elección del usuario-----> 

function obtenerJugadaUsuario(){
    // <--------Determinar elección de usuario----->
    let opcion = document.querySelector('input[name="eleccion"]:checked');
    seleccionUs= opcion.value;

   const eleccUsuario= document.getElementById("resultadoUsuario");

    // <--------Imprimir elección de usuario----->

    if (seleccionUs==0) {    
    eleccUsuario.innerHTML = `
            <div class="eleccU">
                <h4>Los resultados de la ronda ${numeroRondas} son:</h4><br>
                <h4>😏 Tú elección fue: Piedra</h4> 
            </div>`
    } else if(seleccionUs==1){
            eleccUsuario.innerHTML = `
            <div class="eleccU">
                <h4>Los resultados de la ronda ${numeroRondas} son:</h4><br>
                <h4>😏 Tú elección fue: Papel</h4> 
            </div>`
    }else {
        eleccUsuario.innerHTML = `
        <div class="eleccU">
            <h4>Los resultados de la ronda ${numeroRondas} son:</h4><br>
            <h4>😏 Tú elección fue: Tijera</h4> 
        </div>`

    }
obtenerJugadaPC()
detGanadorRonda()
numeroRondas++
determinarGanador()

} 



// <---------Paso 2:Capturar la elección de la PC-------> 

// obtenerJugadaPC();
// console.log(obtenerJugadaPC())
function obtenerJugadaPC() {
    // <--------Determinar elección de Pc----->
    seleccionPc= Math.floor(Math.random() * 3);
    const eleccPc= document.getElementById("resultadoPc")

    // <--------Imprimir elección de Pc----->
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
    const resRonda= document.getElementById("resultadoRonda");
    // <--------Imprimir ganador de la ronda----->
    if ((seleccionUs==0 & seleccionPc==0)||(seleccionUs==1 & seleccionPc==1)||(seleccionUs==2 & seleccionPc==2)){
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅 El resutado de la ronda fue: Empate</h4> 
        </div>`
        rondasEmpatadas++;
        console.log("rondasEmpatadas"+rondasEmpatadas);
    }else if((seleccionUs==0 & seleccionPc==2)||(seleccionUs==1 & seleccionPc==0)||(seleccionUs==2 & seleccionPc==1)){
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅 El resutado de la ronda fue: ¡Ganaste ésta ronda!</h4> 
        </div>`
        jugadasGanadasUsuario++;
        console.log("jugadasGanadasUsuario"+jugadasGanadasUsuario);
        
    }else{
        resRonda.innerHTML = `
        <div class="eleccU">
            <h4>🏅El resutado de la ronda fue: ¡Garrita ganó ésta ronda!</h4> 
        </div>`
        jugadasGanadasPc++;
        console.log("jugadasGanadasPc"+jugadasGanadasPc);
    }
    console.log(numeroRondas)
} 


// <---------Paso 4:Contar rondas y determinar el ganador del juego-------> 

function determinarGanador(){
    // numeroRondas    

    if (numeroRondas>5){
        // <--------Ocultar los resultados de las jugadas (no pude)----->
        // resRonda.style.display = 'none';
        // eleccPc.style.display = 'none';
        // eleccUsuario.style.display = 'none';
        // comenzar.style.display = 'none';

        // <--------Mostrar el resultado de la jugada con sus estilos----->
        const resultJuego= document.getElementById("resultadoJuego")
        resultJuego.style.display = 'block';

        // <--------Imprimir resultado del juego----->

        if (jugadasGanadasPc>jugadasGanadasUsuario){
            resultJuego.innerHTML = `
            <div class="eleccU">
                <h4>📢 El resutado del juego es: ¡👑Garrita ganó el juego!</h4>
                <a href="https://www.animatedimages.org/cat-cats-209.htm"><img src="https://www.animatedimages.org/data/media/209/animated-cat-image-0043.gif" border="0" alt="animated-cat-image-0043" /></a>
            </div>`
    
        }else if(jugadasGanadasPc<jugadasGanadasUsuario){
            resultJuego.innerHTML = `
            <div class="eleccU">
                <h4>📢 El resutado del juego es: ¡👑Ganaste el juego ${nombre}!</h4>
                <a href="https://www.animatedimages.org/cat-cats-209.htm"><img src="https://www.animatedimages.org/data/media/209/animated-cat-image-0043.gif" border="0" alt="animated-cat-image-0043" /></a> 
            </div>`
    
        }else{
            resultJuego.innerHTML = `
            <div class="eleccU">
                <h4>📢 El resutado del juego es: Empate😞</h4>
                <a href="https://www.animatedimages.org/cat-cats-209.htm"><img src="https://www.animatedimages.org/data/media/209/animated-cat-image-0043.gif" border="0" alt="animated-cat-image-0043" /></a> 
            </div>`
    
        }

        // <--------Mostrar el botón de reinicio----->
        const reiniciar= document.getElementById("reset")
        reiniciar.style.display = 'block';

        // <--------Deshabilitar botón de elegir----->
        const btnElegir = document.getElementById("mostrar");
        btnElegir.disabled = true;





    }else{
        // <--------Mostrar el botón de reinicio----->
        const reiniciar= document.getElementById("reset")
        reiniciar.style.display = 'block';


    }

}

// <-------------Reset Jugada------------------> 
function reiniciar(){

    numeroRondas= 1;
    jugadasGanadasUsuario= 0;
    jugadasGanadasPc= 0;
    rondasEmpatadas= 0;
    nombre="";



    document.getElementById("saludo").innerHTML = "";
    document.getElementById("nombre").value = "";
    document.getElementById("comenzar").innerHTML = "";
    document.getElementById("resultadoUsuario").innerHTML = "";
    document.getElementById("resultadoPc").innerHTML = "";
    document.getElementById("resultadoRonda").innerHTML = "";
    document.getElementById("resultadoJuego").innerHTML = "";

 
}

