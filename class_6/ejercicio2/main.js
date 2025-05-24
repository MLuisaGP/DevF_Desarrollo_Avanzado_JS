/**
 * HSBY
 * 
 * NOMBRE
 * RFC
 * MOTNO INICIAL
 * CORREO
 * FECHA NACIMIENTO
 * TIPO DE CUENTA AHORRO O NOMINA
 * 
 * REQUERIDA, TIPO NUMERICO, SELECION VALIDADA
 */


const { z } = window.Zod;

const schema = z.object({
    name: z.string()
        .min(3, 'El nombre debe tener minimo 5 caracteres')
        .max(255, 'El nombre puede tener maximo 255 caracteres')
        .regex(/^[A-Za-z]+$/, 'Solo puedes ingresar numeros'),
    rfc: z.string()
        .regex(/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{2,3}$/,'Rfc no valida'),
    email: z.string().email('Email no válido'),
    type: z.enum(
        ['ahorro', 'nomina'],
        'Debes seleccionar un tipo válido.'
          ),
    monto: z.number().int().positive('Debe de ser un numero positivo').optional(),
    fch: z.string().optional()
})



const form = document.getElementById('form');
const nameInput = document.getElementById('nombre');
const rfcInput = document.getElementById('rfc');
const mntoInput = document.getElementById('mnto');
const emailInput = document.getElementById('email');
const fchNacInput = document.getElementById('fchNac');
const typeInput = document.getElementById('type');
const error = document.getElementById('err')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        name: nameInput.value.trim(),
        rfc: rfcInput.value.trim(),
        monto: mntoInput.value.trim(),
        email: emailInput.value.trim(),
        fch: fchNacInput.value.trim(),
        type: typeInput.value.trim(),
    }
    const result = schema.safeParse(formData);
    if (result.success) {
        alert('Todo bien');
        form.reset();
        error.textContent = ''
    } else {
        error.textContent = `Errores: ${result.error.issues.map((error) => error.message)
            .join(', ')}`
    }
})