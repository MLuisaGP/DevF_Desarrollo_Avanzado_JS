import './style.css';

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
let contador = 0;
let numeroSecreto = generarNumero();



function generarNumero(){
    return Math.floor(Math.random() * 100) + 1;
}
function agregarEventoBTN(callback){
    botonAdivinar.addEventListener('click', () => {
        callback();
    });
}


function adivinando(){
    botonAdivinar.textContent='Adivinar';
    const numeroJugador = parseInt(inputNumero.value);
    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }
    contador++;
    if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${contador} intentos!`;
        botonAdivinar.textContent='Volver a jugar';
        inputNumero.value='';
        numeroSecreto = generarNumero();
        contador = 0;
        
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
}

agregarEventoBTN(adivinando);
