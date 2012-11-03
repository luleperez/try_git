var myScore = 0;  // Tu Puntaje
var robotScore = 0; // Puntaje Robot!
var maxScore = 100; // Puntaje Maximo!
var myName; // Nombre del Jugador

// Función Principal del Programa
// Tip: No necesitan modificar aquí ;)
var main = function() {
    
    // Solicitamos el Nombre del Jugador
    myName = prompt("Nombre del Jugador");
    drawName(myName);
    
    // Jugamos hasta que exista un ganador!!
    while(!isWinner(myScore, robotScore)) {
        play();        
    }
};

// Turno de Juego
// Cada Jugador debe lanzar 2 dados
// Tip: No necesitan modificar aquí ;)
var play = function() {
    // Tu Jugador
    var my1 = rollDice();
    var my2 = rollDice();
    drawPlay(myName, my1, my2);
    
    // Robot
    var robot1 = rollDice();
    var robot2 = rollDice();
    drawPlay('Robot', robot1, robot2);

    // Calculamos los puntajes
    myScore += calculateScore(my1, my2);
    robotScore += calculateScore(robot1, robot2);
    
    drawScore('my', myScore);
    drawScore('robot', robotScore);
};

/* Punto 1 - Lanzar un dado 
 * Utilizando la funcion rand(number) deberas
 * retornar un numero entre el 1 y el 6
 */
var rollDice = function() {
    return rand (6);
};

/* Punto 2 - Calcular Puntaje
 * El puntaje se calcula sumando el valor de los dados
 *
 * Exepciones:
 * Si al menos un dado es 1: 1 punto
 * Si son pares: El doble de la suma de los dados
 */
var calculateScore = function(d1,d2) {
    if((d1) || (d2)) {
        
    var score = 1;
    
    if(isOne(d1, d2))
    {
       // Puntaje si al menos hay un 1
    } else if(isPair(d1, d2)) {
       // Puntaje si es par
    } else {
       // Puntaje por defecto
    }
    
    return score;
};

/* Punto 2.1 - Verificar si hay algun 1 */
var isOne = function(d1, d2) {
    
    return (d1 ==1) || (d2==1);
};

/* Punto 2.2 - Verificar si son pares */
var isPair = function(d1, d2) {
    return (d1==d2);
};

/* Punto 3 - Calcular Ganador 
 *
 * Si alguno de los dos jugadores llega al maximo
 * puntaje habra un ganador.
 *
 * Gana el que tenga mayor puntaje
 * 
 * Para anunciar al ganador deberas usar las funciones:
 *    winner('my') o winner('robot')
 *
 *
 * La funcion debe retornar true o false en caso de haber
 * o no un ganador.
 */
var isWinner = function(my, robot) {
    return true;   
};