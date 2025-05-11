// Single threaded--- Hace una cosa a la vez
//callback funciona como argumento que se ejecuta al final
//la asincronia es que se continue ejecutando mientras se espera un resultado.

// Declaramos una funcion asyncrona
async function taskSlow (){
    console.log('Esta iniciando la tarea!!');

    // se va a llamar cuando pase un terminado tiempo
    
    await new Promise(resolve=>{
        setTimeout(()=>{
            console.log('Tarea completada!!');
            resolve();//Ha terminado con exito y regresa un valor
        },5000);
    })
    console.log('Termino la tarea');
}

function taskFast(){
    console.log('Hola mundo! Se ejecuto primero');
    
}

taskSlow();
taskFast();


function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

saludar('María', () => {
    console.log('Callback ejecutado.');
});

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado));

