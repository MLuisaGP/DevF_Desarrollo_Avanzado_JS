import { z } from 'zod';

//Esquema basico
const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    age: z.number().int().positive("La edad debe de ser un número positivo")
})

try {
    schema.parse({ name: "Juan", age: 25 });
    console.log("Datos válidos");
} catch (err) {
    console.error(err.errors);
}
