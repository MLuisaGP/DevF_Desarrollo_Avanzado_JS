document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productsContainer');
    marcarNotificacion();
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) //Convierte la respuesta en json
        .then(data => {

            const productos = data;
            productos.forEach(producto => {
                const card = document.createElement('SECTION');
                card.classList.add('card');

                const divImg = document.createElement('DIV');
                divImg.className = 'producto__img';
                const productoImg = document.createElement('IMG');
                productoImg.src = producto.image;
                productoImg.alt = producto.title;
                divImg.appendChild(productoImg);

                const productoName = document.createElement('H2');
                productoName.textContent = producto.title;

                const divInf = document.createElement('DIV');
                divInf.className = 'producto__inf';

                const productoPrecio = document.createElement('P');
                productoPrecio.className = 'producto__precio'
                productoPrecio.textContent = `$${producto.price}`;

                const productobtn = document.createElement('BTN');
                productobtn.className = 'btn-cart';

                const productobtnIcon = document.createElement('I');
                productobtnIcon.className = 'fa-solid fa-cart-plus';
                productobtn.appendChild(productobtnIcon);

                productobtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const labelNotif = document.getElementById('labelNoEmptyCart');
                    labelNotif.className = 'notificacion';
                    add2cart(producto)
                })

                divInf.appendChild(productoPrecio);
                divInf.appendChild(productobtn);

                card.appendChild(divImg);
                card.appendChild(productoName);
                card.appendChild(divInf);

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data', error);
            container.innerHTML = '<p>Fallo la carga de personajes.</p>'

        })
})

function marcarNotificacion() {
    const labelNotif = document.getElementById('labelNoEmptyCart');
    let cart = localStorage.getItem('cart');
    if (cart && cart.length > 1) {
        labelNotif.className = 'notificacion';
    } else {
        labelNotif.className = '';
    }
}

function add2cart(producto) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart) || [];
    let productoFind = cart.find((ele) => ele.id === producto.id)
    if (productoFind) {
        productoFind.cantidad += 1;
    } else {
        cart.push({
            ...producto,
            cantidad: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart));

}