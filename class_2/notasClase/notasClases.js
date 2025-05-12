const fs = require('fs');
// Lectura de Archivos
fs.readFile('class_2/datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Datos del archivo:', data);
});