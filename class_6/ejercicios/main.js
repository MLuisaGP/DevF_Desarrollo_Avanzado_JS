//
// formulario de validacion de nombre con ZOB
// NOMBRE REQUIERE MINIMO 5 A 12 CARACTERES
//
//

const { z } = window.Zod;

const schema = z.object({
    name: z.string()
        .min(5,'El nombre debe tener minimo 5 caracteres')
        .max(12,'El nombre puede tener maximo 12 caracteres')
        .regex(/^[A-Za-z]+$/,'Solo puedes ingresar numeros')
})



const form = document.getElementById('form');
const nameInput = document.getElementById('nombre');
const error = document.getElementById('err')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData ={
        name:nameInput.value.trim()
    }
    const result = schema.safeParse(formData);
    if(result.success){
        alert('Todo bien');
        form.reset();
        error.textContent = ''
    }else{
        error.textContent = `Errores: ${result.error.issues.map((error) => error.message)
            .join(', ')}`
    }
})