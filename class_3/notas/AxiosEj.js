// Estableciendo un tiempo de espera:
axios.get('https://api.example.com/data', { timeout: 5000 })

    .then(response => console.log(response.data))

    .catch(error => console.error('Timeout:', error));

// manejo de errores
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            console.error('Error del servidor:', error.response.status);
        } else if (error.request) {
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    });

//Envio de formularios

axios.post('https://api.example.com/contact', {
    name: 'Jane Doe',
    message: 'Hola, me interesa su producto.'
})
    .then(response => console.log('Mensaje enviado:', response.data))
    .catch(error => console.error(error));