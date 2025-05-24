const planetas = require('./planetas');
const cowsay = require("cowsay");


const numeroRadom = Math.ceil(Math.random() * planetas.length);

function devolverInf(planeta){
    const datoCurioso=`
        ¡Planeta ${planeta.nombre} descubierto!
        Descripción: ${planeta.descripcion}
        Descubierto en: ${planeta.descubiertoEn}
        Se encuentra a ${planeta.distanciaDesdeLaTierra} lejos de nosotros y
        tiene un tamaño de ${planeta.tamano} de diametro
        ---`;
    return datoCurioso;

}
function theCowSay(){
    const numeroRadom = Math.ceil(Math.random() * planetas.length);
    const msn = devolverInf(planetas[numeroRadom - 1])
    console.log(cowsay.say({
        text: msn,
        e: "oO",
        T: "U "
    }));
}

theCowSay();

// planetas.forEach(planeta => {
//     console.log(`¡Planeta ${planeta.nombre} descubierto!`);
//     console.log(`Descripción: ${planeta.descripcion}`);
//     console.log(`Descubierto en: ${planeta.descubiertoEn}`);
//     console.log('---');
// });