const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
    res.send('¡Hola desde el servidor!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));