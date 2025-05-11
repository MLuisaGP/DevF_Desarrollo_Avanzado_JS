fetch('http://localhost:3000/saludo')

    .then(response => response.text())

    .then(data => console.log(data));