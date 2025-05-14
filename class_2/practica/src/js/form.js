import { post } from "./api.js";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCreate');
    form.addEventListener('submit', (e) => submit(e));
})

function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const libro = Object.fromEntries(formData.entries()); // Convierte en objeto
    post(libro);
    // console.log(libro);

    setTimeout(() => {
        location.reload();
    }, 300);

}


