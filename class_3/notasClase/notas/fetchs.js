fetch('https://api.example.com/addData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Juan', edad: 30 })
})
    .then(response => response.json())
    .then(data => console.log('Data enviada:', data))
    .catch(error => console.error('Error:', error));