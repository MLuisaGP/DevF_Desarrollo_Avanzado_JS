import { z } from "https://esm.sh/zod";

//Esquema basico
const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo electronico inválido"),
    age: z.number().int().positive("La edad debe de ser un número positivo")
})

document.getElementById("userForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    const formData={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        age:Number(document.getElementById("age").value)
    };
    try {
        schema.parse(formData);
        console.log("Formulario enviado correctamente");
    } catch (err) {
        console.error(`Errores: ${err.errors.map(e=>e.message).join(", ")}`);
    }

})

