function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}!`);
    callback();
}

function despedirse() {
    console.log('Adios!');
}

saludar('María', despedirse);

//setTimeout

console.log('Inicio');

setTimeout(() => {

    console.log('Esto sucede después de 2 segundos');

}, 2000);

console.log('Fin');

// callbacks hell
setTimeout(() => {

    console.log('Primera tarea completada');

    setTimeout(() => {

        console.log('Segunda tarea completada');

        setTimeout(() => {

            console.log('Tercera tarea completada');

        }, 1000);

    }, 1000);

}, 1000);


// Uso en mundo real
const fs = require('fs');
// Lectura de Archivos
fs.readFile('class_2/datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Datos del archivo:', data);
});