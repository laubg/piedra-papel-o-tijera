# Piedra, papel o tijera
_Es un juego de manos que se utiliza con mucha frecuencia para decidir quién de dos personas hará algo. En éste caso presentamos una versión online para poder jugarlo cuando no tengas un oponente digno_ 😉.

_El objetivo es vencer al oponente seleccionando el arma que gana, según las siguientes reglas:_

* _La piedra aplasta la tijera. (Gana la piedra.)_
* _La tijera corta el papel. (Gana la tijera.)_
* _El papel envuelve la piedra. (Gana el papel.)_
* _En caso de empate (que dos jugadores elijan el mismo elemento o que tres jugadores elijan cada uno un objeto distinto), se juega otra vez._

## Podés ver el proyecto [aquí](laubg.github.io/piedra-papel-o-tijera/)


## Comenzando 🚀
_Para poder descargar éste proyecto será suficiente con clonar el mismo en una carpeta local y abrirlo con VSC y LiveServer._

## Construido con 🛠️
_Html, CSS y Js._

## Directivas del proyecto📋
_Para crear el mismo se nos solicitó cumplir con lo siguiente:_
* _Validar que el campo texto en el que el jugador ingresa su nombre no esté vacío._
* _Establecer que el juego se juega al mejor de 5 intentos._
* _Utilizar JavaScript para contar los intentos y verificar si alguno de los jugadores ha_
_alcanzado 3 victorias._
* _Cuando uno de los jugadores alcance 3 victorias, muestra un mensaje anunciando al_
_ganador._

## Proceso de creación 🖍️
_Diseño:_
1. _ordené los elementos y estructura en papel._
2. _busqué la imágenes que podrían servirme y a partir de ellas elegí los colores._

_Programación:_
1. _comencé con un html base para poder ir ordenando los elementos._
2. _apliqué estilos generales y algunos específicos._
3. _en relación a la funcionalidad determiné realizar la lógica de la siguiente manera:._
    1. _crear input para recibir el nombre,debe cargar ése nombre en una variable y luego:_
        * _generar texto con ése nombre + el resto de la información,_ _
        * _también cargar el nombre del Jugador en la tabla de resultados y en un recuadro que informe cómo termina el juego._
    2. _crear botones que registren elección del jugador, al hacerlo deben:_
        * _desencadenar la elección al azar de la pc y mostrarla en texto._
        * _comparar ambas elecciones y determinar el ganador de la ronda  y también mostrarla en el texto._
        * _ir cargando los resultados en una tabla que se muestre al final._
        * _contar los intentos y verificar si alguno tuvo 3 victorias._
    3. _crear botón de reinicio._


## Soluciones/inconvenientes y cambios al programar la funcionalidad📌 
1. _decidí no colocar un botón para ingresar el nombre del usuario para no tener tantos botones_
2. _me costó bastante decidir cómo realizar los botones para tomar la elección del usuario (me sirvió una respuesta de stackoverflow para saber cómo hacerlo con botones de tipo radio)y, luego de eso, hacerlos funcionar, 1ro quería capturar el valor con un evento "change" y no pude hacerlo sin agregar un botón, luego constantemente me decía que el valor era "undefined" y el error fue que seguía pretendiendo usar el evento de tipo "change" para capturar el valor y, en realidad, esto ya no era necesario, eso me demoró muchísimo tiempo y, al final, ¡era tan simple!🙈, el código final que si funcionó fue:_
```Js
    let opcion = document.querySelector('input[name="eleccion"]:checked');
    seleccionUs= opcion.value;
```
3. _en un principio decidí hacer una tabla con los resultados de todas las rondas y terminé mostrando los resultados de cada ronda al momento de realizarla y sólo el resultado final   (sin la suma de todos los puntos en una tabla)._
4. _en relación a la cantidad de intentos solicitados en la consigna (5) al tomar en cuenta los empates me dí cuenta de que no podía tomar cómo ganador a quién tuviera 3 puntos o más, sino a quién tuviera más puntos, así que esto es lo que decidí hacer._

## Material consultado📌 
* [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
* [https://es.javascript.info/introduction-browser-events](https://es.javascript.info/introduction-browser-events)
* [https://es.javascript.info/events-change-input](https://es.javascript.info/events-change-input)
* [https://es.stackoverflow.com/questions/139871/como-usar-botones-en-formulario-html-para-elegir-entre-varias-opciones](https://es.stackoverflow.com/questions/139871/como-usar-botones-en-formulario-html-para-elegir-entre-varias-opciones)
* [https://cybmeta.com/display-none-vs-visibility-hidden-y-tu-como-escondes-las-cosas](https://cybmeta.com/display-none-vs-visibility-hidden-y-tu-como-escondes-las-cosas)
* [https://www.jose-aguilar.com/blog/display-content-javascript/](https://www.jose-aguilar.com/blog/display-content-javascript/)
* [https://es.stackoverflow.com/questions/17783/cómo-obtener-el-valor-de-radio-button-en-javascript#:~:text=Puedes%20seleccionar%20directamente%20el%20radio%20seleccionado%20por%20medio%20de%20la%20propiedad%20checked%20.&text=Esto%20te%20devolverá%20el%20valor%20del%20radio%20button%20que%20esté%20seleccionado.](https://es.stackoverflow.com/questions/17783/cómo-obtener-el-valor-de-radio-button-en-javascript#:~:text=Puedes%20seleccionar%20directamente%20el%20radio%20seleccionado%20por%20medio%20de%20la%20propiedad%20checked%20.&text=Esto%20te%20devolverá%20el%20valor%20del%20radio%20button%20que%20esté%20seleccionado.)
* [https://wordcodepress.com/limpiar-un-input-con-javascript/](https://wordcodepress.com/limpiar-un-input-con-javascript/)



## Imágenes utilizadas🎨 
* [Ícono mano cerrada](https://icons8.com/icon/gEwGQBqTG9KP/pu%C3%B1o-en-roca)
* [Ícono mano abierta](https://icons8.com/icon/r1fIazL68F71/toda-la-mano)
* [Ícono mano en tijera](https://icons8.com/icon/wBE8VeHXQ79v/tijeras-de-mano)
* [Ícono general](https://www.freepik.com/icon/rock-paper-scissors_6729598#fromView=search&term=gato++mano%2B+piedra+papel+tijera+%2B+fondo+azul&page=2&position=91)



Realizado con ❤️ por [Laura Bautista](https://github.com/laubg) 😊