// Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'Juan' });
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Usando async/await
 async function  mostrarDatosDeUsuario(id)  {
    try {
        const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
        console.log(usuario); // Muestra los datos del usuario
    } catch (error) {
        console.log(error); // Maneja el error si la promesa es rechazada
    }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1