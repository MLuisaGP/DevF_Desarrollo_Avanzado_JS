import { Alimento, listaAlimentos } from "./Alimentos.js";
import { orden, ordenes } from "./Variables.js";

//BOTON PARA GENERAR ORDEN


document.addEventListener("DOMContentLoaded",()=>{
    start();
})
function start() {
    preparaSeccionMenu();
    prepararSeccionOrdenes();
    definirEventos();
}
function definirEventos(){
    const btnOrdenar = document.getElementById("btnSubmitOrdenar");
    btnOrdenar.addEventListener("click", (e) => generarOrdenBTNEvento(e));
    document.getElementById('btnSiteMenu').addEventListener('click', () => {
        document.getElementById('artMenu').classList.remove('hidden');
        document.getElementById('artOrder').classList.add('hidden');
    });

    document.getElementById('btnSiteOrdenes').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('artMenu').classList.add('hidden');
        document.getElementById('artOrder').classList.remove('hidden');
    });

}

function generarOrdenBTNEvento(e){
    e.preventDefault(); //prevenir que no se recarge la pagina

    if (!orden.length) { //Si las ordenes son igual a 0 entonces mostrar alerta
        addAlert("menuAlert", "dangerous", "Favor de escoger algun alimento.", true);
        return;
    }
    if (ordenes.length >= 9) {//Si hay mas de  pedidos entonces no permite crear mas ordenes
        addAlert("menuAlert", "dangerous", "Nos encontramos saturados, favor de esperar un poco...", true);
        return;
    }
    const id = crypto.randomUUID(); //genera un id unico para la orden.
    ordenes.push({ id: id, orden: orden });
    localStorage.setItem('ordenes', JSON.stringify(ordenes)); //lo almacenamos en el localstorage
    listaAlimentos.forEach((alimento) => alimento.reset());
    document.querySelectorAll("input[type='number']").forEach(element => {
        element.value = 0;
    });
    insertarCardDeOrden({ id: id, orden: orden });
    orden = [];
    addAlert("menuAlert", "good", `Tu orden #${id.slice(0, 4).toUpperCase()} se ha creado.`, true);
}

//FUNCION QUE CREA EL MENU
function preparaSeccionMenu(){
    let flag = 0;
    listaAlimentos.forEach((alimento)=>{
        const container = document.getElementById(alimento.getContainer());
        if(!container)return; //Si no existe el contenedor entonces lo ignoramos
        flag=1;
        const mainFood = document.createElement('DIV');
        mainFood.className = 'main__food';

        const mainInput = document.createElement('DIV');
        mainInput.className = 'main__input';
        const foodCantidad = document.createElement("INPUT");
        foodCantidad.type = "number";
        foodCantidad.value = alimento.cantidad;
        foodCantidad.min=0;
        foodCantidad.max=5;
        foodCantidad.id=alimento.id;
        foodCantidad.addEventListener('change',(e)=>{
            if (e.target.value>5)e.target.value=5;
            else if (e.target.value<0)e.target.value=0;
            alimento.cantidad = e.target.value;
            updateOrden(alimento);
            console.log(orden);
            
        })

        const btnMenos = document.createElement('BUTTON');
        btnMenos.classList.add('main__btn', 'main__btn--round');
        btnMenos.textContent='-';
        btnMenos.addEventListener('click',(e)=>{
            e.preventDefault();
            if(alimento.cantidad<=0)return;
            alimento.cantidad -= 1;
            foodCantidad.value = alimento.cantidad;
            updateOrden(alimento);
            
            
        });
        const btnMas = document.createElement('BUTTON');
        btnMas.classList.add('main__btn', 'main__btn--round');
        btnMas.textContent='+';
        btnMas.addEventListener('click',(e)=>{
            e.preventDefault();
            if (alimento.cantidad >= 5) return;
            alimento.cantidad += 1;
            foodCantidad.value = alimento.cantidad;
            updateOrden(alimento);
            
        })
        mainInput.appendChild(btnMenos);
        mainInput.appendChild(foodCantidad);
        mainInput.appendChild(btnMas);
        
        const mainInf = document.createElement('DIV');
        mainInf.className = 'main__information';
        const mainI = document.createElement('I');
        mainI.className = alimento.icono;
        const mainName = document.createElement('P');
        mainName.textContent=alimento.label;
        mainInf.appendChild(mainI);
        mainInf.appendChild(mainName);

        mainFood.appendChild(mainInput);
        mainFood.appendChild(mainInf);
        container.appendChild(mainFood)
    });
    if(flag===0){
        addAlert("menuAlert", "warning", "El menu esta vacio.",false);
    }
}

// FUNCTION QUE CREA SECCION DE ORDENES
function prepararSeccionOrdenes(){
    if(ordenes.length<=0){
        addAlert("orderAlert", "good", "No hay ordenes.", false);
        return
    }
    ordenes.forEach((orden)=>{
        insertarCardDeOrden(orden);
    });
}

function insertarCardDeOrden(ordenU){
    removeAlert('orderAlert');
    // console.log('orden ins:',ordenU);
    
    const container = document.getElementById('ordenesCards');
    const card = document.createElement('DIV');
    card.id = `cardOrden${ordenU.id}`
    card.className ='main__card';
    card.innerHTML =`<h3>Orden #${ordenU.id.slice(0,4).toUpperCase()}</h3>`
    const listaUl = document.createElement('UL');
    const btnL = document.createElement('BUTTON');
    let cantidadA = ordenU.orden.length;
    btnL.className = 'main__btn';
    btnL.disabled = true;
    btnL.textContent = 'Preparando ...';
    btnL.addEventListener('click',()=>{
        eliminarOrden(ordenU);

    })

    ordenU.orden.forEach((alimento)=>{
        const lista = document.createElement('LI');
        lista.innerHTML = `<i class='${alimento.icono}'></i>
        ${alimento.label} <span>0</span>/${alimento.cantidad}`
        listaUl.appendChild(lista);
        preparar(lista, alimento)
        .then(resolve=>{
            cantidadA -=1;
            if (cantidadA == 0){
                btnL.textContent = 'Listo'
                btnL.disabled = false;
            }
        });
    })

    card.appendChild(listaUl);
    card.appendChild(btnL);
    container.appendChild(card);
}

//Actualiza la orden que se esta generando pero aun no se termina de crear por el cliente.
function updateCurrentOrdenRAM(alimento) {
    let elemento = orden.find((ele) => ele.id === alimento.id);
    if (!elemento) {
        orden.push({
            id: alimento.id,
            icono: alimento.icono,
            label: alimento.label,
            cantidad: alimento.cantidad,
            time: alimento.time
        });
        return;
    }
    elemento.cantidad = alimento.cantidad;
    orden = orden.filter(ele => ele.cantidad > 0);
    // {id=1,nombre=pizza,cant =1}
}

//Elimina orden ya creada y que se encuentra dentro de la lista de ordenes
function eliminarOrden(orden) {
    ordenes = ordenes.filter((e) => e.id !== orden.id);
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
    const nodo = document.getElementById(`cardOrden${orden.id}`);
    if (nodo) {
        nodo.remove();
    }
    if (ordenes.length <= 0) {
        addAlert("orderAlert", "good", "No hay ordenes.", false);
        return
    }
}

// funcion principal para acualizar el estado de un alimento que se esta preparando
async function preparar(nodo,alimento){
    const span = nodo.querySelector('span');
    const cantidad = alimento.cantidad;
    await actualizarCantidadPreparada(span, cantidad,alimento.time);
    nodo.classList.add('ready');
}

//les asigna el tiempo correspondiente segun el tipo de comida que se solicito y la cantidad de esa comida.
async function actualizarCantidadPreparada(nodo,cantidad,tiempo){
    for (let i = 0; i < cantidad; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                nodo.textContent = i + 1;
                resolve()
            }, tiempo);
        })
    }
}


//Manejo de Alertas
function addAlert(idAlert,type,msn,temporal){
    const alertContainer = document.getElementById(idAlert);
    alertContainer.classList.add('alert',`alert--${type}`) ;
    alertContainer.textContent = msn;
    //Timer Para desaparecer mensaje cuandp sea un mensaje temporal
    if(temporal){
        setTimeout(() => {
            alertContainer.textContent='';
            alertContainer.className='';
        }, 4000);
    }

}
function removeAlert(idAlert){
    const alertContainer = document.getElementById(idAlert);
    alertContainer.outerHTML = `<p id=${idAlert}></p>`;
}

