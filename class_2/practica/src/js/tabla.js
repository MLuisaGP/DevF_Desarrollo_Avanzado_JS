import { get, put } from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    start();
})

function start() {
    //obtener datos
    llenarTabla();
}

function llenarTabla() {
    const tbl = document.getElementById('tablaLibros');

    const libros = get();
    libros.forEach(libro => {
        const tr = generarFila(libro);
        tbl.appendChild(tr);
    });
}

function generarFila(libro) {
    const tr = document.createElement('TR');
    tr.className = 'table__row';
    for (let key in libro) {
        if (key === 'disponible') {
            crearRegistro(tr, () => crearBTN(libro.id, libro[key]));
        } else {

            crearRegistro(tr, () => crearHtmlRegistroTbl(libro[key]));
        }
    }
    return tr;
}

function crearRegistro(tr, callback) {

    const nodo = callback();
    tr.appendChild(nodo);
}

function crearHtmlRegistroTbl(dato) {

    const td = document.createElement('TD');
    td.className = "tabla__td";
    td.textContent = dato;
    return td;

}
function crearBTN(id, estado) {
    const td = crearHtmlRegistroTbl('');
    const btn = document.createElement('BUTTON');
    let clase = estado ? 'btn--success' : 'btn--danger';
    btn.classList.add("tabla__status", "btn", clase);
    btn.textContent = ((estado ? '' : 'No') + ' Disponible');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let estado = put(id);//Actualizamos el estado del libro
        let claseActual = estado ? 'btn--danger' : 'btn--success';
        let claseNueva = estado ? 'btn--success' : 'btn--danger';
        btn.classList.replace(claseActual, claseNueva)
        btn.textContent = ((estado ? '' : 'No') + ' Disponible');
        console.log(btn.textContent);
        console.log(estado);

    })
    td.appendChild(btn);
    return td;
}

