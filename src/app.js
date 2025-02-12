/* Creo las variables */
const primerJugador = document.createElement("img");
const segundoJugador = document.createElement("img");

primerJugador.src = "./imgs/x.png";
segundoJugador.src = "./imgs/o.jpg";
primerJugador.setAttribute("class", "primerJugador");
primerJugador.setAttribute("class", "segundoJugador");
let tablero = [
  primerJugador,
  segundoJugador,
]; /*Los dos valores que van a tener los botones*/
let TextoGanar = document.getElementById("TextoGanar");
let tablerob =
  document.getElementsByClassName(
    "tablerob"
  ); /* Llamo al div (estructura de datos) por medio del id*/
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

const botones = [
  btn0,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
]; /* Lo que define al arreglo son los []*/

/*
 Referenciar TODOS los ids en JS, para luego agruparlos y declararlos de manera global en el código.

 Luego, crear una función para darle el evento a cada uno de los botones
*/

let jugadorActual = "x";
function juego() {
  botones.forEach((boton) =>
    boton.addEventListener("click", function () {
      // boton.textContent = tablero[0]
      //poner restricción para que la ia no cambie el resultado seleccionado
      if (boton.textContent === "") {
        boton.textContent = jugadorActual;
        juegoPC()
      }
    })
  );
}

/*Esto creará la función para el turno de la pc*/
function juegoPC() {
  const pc = botones.filter((item) => item.textContent ==  ""); /*con textcontent hace el recorrido para buscar las celdas vacías*/
  const aleatorio = Math.floor(Math.random() * pc.length);  /*.length es un iterador para recorrer la lista*/
  pc[aleatorio].textContent = "O"    /*Este le asigna el turno a la pc*/
}

juego();
