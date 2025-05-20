const form = document.getElementById('registroEvento');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');

    // Validaciones básicas
    if (!nombre.value || !correo.value || !telefono.value || intereses.length === 0 || !horario) {
        setAlert('titleForm', 'alerta-err','Por favor, completa todos los campos obligatorios.')
        return;
    }
    
    if(nombre.value.length<3){
        setAlert('nombre', 'alert-p-err','Ingrese un nombre válido.')
        return;
    }
    if (telefono.value.length !== 10){
        setAlert('telefono', 'alert-p-err','El telefono debe contener solo 10 numeros.')
        return;
    }
    const date = new Date(fecha.value);
    const hoy = new Date();
    if(date <= hoy){
        setAlert('fecha', 'alert-p-err', 'La fecha tiene que ser despues del dia de hoy.')
        return;
    }
    console.log(date.getDay());
    
    if (date.getDay() === 0 || date.getDay() === 6){
        setAlert('fecha', 'alert-p-err', 'La fecha tiene que ser entre semana.')
        return;
    }
    setAlert('titleForm', 'alerta-good', 'Se ha registrado con exito.');
    form.reset();
});

function setAlert(idRef, clasErr, msn) {
    const sibling = document.getElementById(idRef);
    const container = document.createElement('P');
    container.className = clasErr;
    container.textContent = msn;
    sibling.parentNode.insertBefore(container,sibling.nextSibling);//inserta la alerta despues del nodo
    setInterval(() => {
        container.remove();
    }, 4000);
}