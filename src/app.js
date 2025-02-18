/* Creo las variables */

const primerJugador = document.createElement("img");
const segundoJugador = document.createElement("img");

primerJugador.src = "./imgs/x.png";
segundoJugador.src = "./imgs/o.jpg";
primerJugador.setAttribute("class", "primerJugador");
primerJugador.setAttribute("class", "segundoJugador");
let contax = document.getElementById("contax");
let contaO = document.getElementById("contaO");
let tablero = [
  primerJugador,
  segundoJugador,
]; /*Los dos valores que van a tener los botones*/

let TextoGanar = document.getElementById("TextoGanar");
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

const posGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*
 Referenciar TODOS los ids en JS, para luego agruparlos y declararlos de manera global en el código.

 Luego, crear una función para darle el evento a cada uno de los botones
*/

let jugadorActual = "x";
function juego() {
  validarGanador();
  botones.forEach(
    (boton /*Esto es para que los botones se activen y se desactiven*/) =>
      boton.addEventListener("click", function () {
        // boton.textContent = tablero[0]
        //poner restricción para que la ia no cambie el resultado seleccionado
        if (boton.textContent === "") {
          boton.textContent = jugadorActual;
          juegoPC();
          validarGanador();
        }
      })
  );
}

/*Esto creará la función para el turno de la pc*/
function juegoPC() {
  const pc = botones.filter(
    (item) => item.textContent == ""
  ); /*con textcontent hace el recorrido para buscar las celdas vacías*/
  const aleatorio = Math.floor(
    Math.random() * pc.length
  ); /*.length es un iterador para recorrer la lista*/
  if (aleatorio > 0) {
    pc[aleatorio].textContent = "O"; /*Este le asigna el turno a la pc*/
    validarGanador();
  }
  validarGanador();
}

juego();

const gatogato =
  document.getElementById(
    "gatogato"
  ); /*Esto es para que el botón de reiniciar funcione*/

/*Función para validar el ganador*/
let contadorX = 0; /* Declaro las variables para hacer la función del contador*/
let contadorO = 0;
function validarGanador() {
  for (const posicion of posGanadoras) {
    /*Recorre las posiciones ganadoras*/
    let [pos1, pos2, pos3] = posicion; /* los que quiero que recorra*/
    if (
      botones[pos1].textContent != "" &&
      botones[pos1].textContent === botones[pos2].textContent &&
      botones[pos1].textContent === botones[pos3].textContent
    ) {
      /*Esto verifica si la posición 1 es diferente a vacío y la posición 1 es igual a la posición 2 y la posición 1 es igual a la posición 3*/
      if (botones[pos1].textContent == "x") {
        ganar.textContent = `El ganador es X 💥`;
        contax.textContent =
          contadorX; /* Llamo la variable declarada anteriormente */
        contadorX++; /* Uso el operador ++ para que vaya sumando en cada ciclo */
        ganar.style.visibility = "visible";
        localStorage.setItem("vicsX", contadorX);
      } else if (botones[pos1].textContent == "O") {
        ganar.textContent = `El ganador es O 🚀`;
        contaO.textContent = contadorO;
        contadorO++;
        ganar.style.visibility = "visible";
        localStorage.setItem("vicsO", contadorO);
      }
      botones.forEach((boton) => {
        /*Esto hace que los botones se desactiven*/
        boton.disabled = true; /*Esto hace que los botones se desactiven*/
      });
    }

    /*Esto hace que el texto de ganar sea visible*/
    /*Esto hace que el texto de ganar sea visible y diga el ganador las comillas son para que JS intrerprete la función*/
  }
}

gatogato.addEventListener("click", function () {
  window.location.reload();
});
