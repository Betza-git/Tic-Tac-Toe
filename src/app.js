/* Creo las variables */
const primerJugador = document.createElement("img")
const segundoJugador = document.createElement("img")

primerJugador.src = "./imgs/x.png"
segundoJugador.src = "./imgs/o.jpg"
primerJugador.setAttribute("class","primerJugador")
primerJugador.setAttribute("class","segundoJugador")
let tablero = [primerJugador, segundoJugador];    /*Los dos valores que van a tener los botones*/
let TextoGanar = document.getElementById("TextoGanar");
let tablerob = document.getElementsByClassName("tablerob"); /* Llamo al div (estructura de datos) por medio del id*/
let btn0 = document.getElementById("btn0")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")

const botones = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8] /* Lo que define al arreglo son los []*/


/*
 Referenciar TODOS los ids en JS, para luego agruparlos y declararlos de manera global en el código.

 Luego, crear una función para darle el evento a cada uno de los botones
*/

function juego(){
    botones.forEach(boton => boton.addEventListener("click",function(){
        // boton.textContent = tablero[0]
        //poner restricción para que la ia no cambie el resultado seleccionado
        boton.textContent = "X"
    }))
}




juego()


// /////***** 
// let turno = 4;      /*Número de turnos limitados por jugador*/
// let tablero = ["", ""];    /*Los dos valores que van a tener los botones*/
// let intentos = 0;
// let juegoTerminado = false; /*variable que nos indica si el juego término*/
// let TextoGanar = document.getElementById("TextoGanar");
// let tablerob = document.getElementsByClassName("tablerob"); /* Llamo al div (estructura de datos) por medio del id*/
// //let botonReiniciar = document.getElementById("botonReiniciar"); /* Para crear el bóton*/
// let btn1 = document.getElementById("btn1")



// btn1.innerHTML = ""
// botones.forEach(x => x.addEventListener("click", elegir));   /*botón a la espera del click del usuario para ejecutarse*/

// function elegir(event) {
//     let botonPulsado = event.target;  /*Target me indica los botons que han sido pulsados*/
//     if (!juegoTerminado && botonPulsado.innerText === "") {  /*Con este if compruebo que se cumplan las condiciónes anteriores */
//         botonPulsado.innerText = tablero[turno];
//         intentos += 1;    /* uso este parámetro para ir aumentando*/

//        /*Comprobamos el estado*/
//         let estadoPartida = estado();
//         if (estadoPartida == 0) {
//             cambiarTurno();
//             if (intentos < 9) {    /*El número de botones por que se cuenta desde la     posición 0*/
//                 ia();    /*Diminutivo de que se juega contra la computadora*/
//                 estadoPartida = estado();
//                 intentos += 1;
//                 cambiarTurno();
//             }
//         }

//        /*Condición si se gana, se hace visible el texto y img*/
//         if (estadoPartida == 1) {
//             TextoGanar.style.visibility = "visible";
//             juegoTerminado = true;
//         }
//         /*Pero si no, que salga el texto perdiste*/
//         else if (estadoPartida == -1) {
//             TextoGanar.innerText = "Perdiste";
//             juegoTerminado = true;
//             TextoGanar.style.visibility = "visible";
//         }
//     }
// }

// function cambiarTurno() {
//     if (turno == 1) {
//         turno = 0;
//     }
//     else {
//         turno = 1;
//     }
// }

// function estado() {
//     posicionGanar = 0;
//     nEstado = 0;

//     function sonIguales(...args) {    /* ...args indica que cuando hay tres signos iguales se va a poner de color esa franja, en cualquier posición*/
//         valores = args.map(x => x.innerText);
//         if (valores[0] != "" && valores.for((x, i, arr) => x === arr[0])) {
//             args.forEach(x => x.style.backgroundColor = "green");   
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }

// /*Probabilidades de los botones*/
// if (sonIguales(botones[0], botones[1], botones[2])) {
//     posicionGanar = 1;
// }	
// else if (sonIguales(botones[3], botones[4], botones[5])) {
//     posicionGanar = 2;
// }
// else if (sonIguales(botones[6], botones[7], botones[8])) {
//     posicionGanar = 3;
// }
// else if (sonIguales(botones[0], botones[3], botones[6])) {
//     posicionGanar = 4;
// }
// else if (sonIguales(botones[1], botones[4], botones[7])) {
//     posicionGanar = 5;
// }
// else if (sonIguales(botones[2], botones[5], botones[8])) {
//     posicionGanar = 6;
// }
// else if (sonIguales(botones[0], botones[4], botones[8])) {
//     posicionGanar = 7;
// }
// else if (sonIguales(botones[2], botones[4], botones[6])) {
//     posicionGanar = 8;
// }

// if (posicionGanar > 0){
//     if(turno == 1){
//         nEstado = 1;
//     }
//     else {
//         nEstado = -1;
//     }
// }

// function ia() {
//     function aleatorio(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }

//     let botonIA = botones.map(x => x.innerText);
//     let posic = -1;

//     if (botonIA[4] == "") {
//         posic = 4;
        
//     } 
//     else {
//         let a = aleatorio(0, botones.length - 1);
//         while (botonIA[a] != "") {
//             a = aleatorio(0, botones.length - 1);
//         }
//         posic = a;   
//     }

//     botones[posic].innerText = "0";
//     return posic;
// }


// /* cambiar a random*/