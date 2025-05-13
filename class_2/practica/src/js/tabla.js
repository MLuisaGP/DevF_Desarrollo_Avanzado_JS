import { apiGet, apiPut, apiPost} from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    start();
})

async function start(){
    //obtener datos
    
    
    const datos = await apiGet(); // console.log(datos);
    console.log(datos);
}