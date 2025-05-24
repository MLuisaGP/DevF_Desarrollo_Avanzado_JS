    // Importamos Zod
    const { z } = window.Zod;

    // Esquema para validar los datos del formulario
    const schema = z.object({
      name: z.string().min(4, 'El nombre debe de contener mas de 4 caracteres '),
      email: z.string().email('Favor de ingresar un correo válido'),
      pwd: z.string().min(6,'La contraseña debe de tener al menos 8 caracteres'),
      pwd2: z.string()
    }).refine((data)=> data.pwd === data.pwd2,{
      message:'Las contraseñas no coinciden.',
      path:['pwd2']//especifica cual tendra el error 
    })

  const elementos = {
    name :document.getElementById("name"),
    email : document.getElementById("email"),
    pwd :document.getElementById("password"),
    pwd2 :document.getElementById("password2"),
  }
  console.log(Object.keys(elementos).includes('pwd'));
  
const form = document.getElementById('registerForm');

form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name:  elementos.name.value.trim(),
        email: elementos.email.value.trim(),
        pwd:   elementos.pwd.value,
        pwd2:  elementos.pwd2.value,
      };

      

      const result = schema.safeParse(formData);
      if (result.success) {
        alert('Todo bien');
        form.reset();
        error.textContent = ''
      }else{
        const errorDetails = result.error.format();
        for (const [campo, err] of Object.entries(errorDetails)) {
          if (Object.keys(elementos).includes(campo)){
            makeAlerts(elementos[campo], err._errors);

          }
        }
      }
    });


function makeAlerts(sibling, msn) {
  const alertContainer = document.createElement('DIV')
  alertContainer.className = 'alert';

  const alertP = document.createElement('P');
  alertP.className = "alert-err";
  alertP.textContent = msn;
  alertContainer.appendChild(alertP);
  sibling.after(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
  }