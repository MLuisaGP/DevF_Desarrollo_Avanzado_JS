document.addEventListener('DOMContentLoaded', () => {

    
    showCart();
})

function showCart() {
    
    toggleEmptyCart();
    let cart = localStorage.getItem('cart');
    if (!cart || cart.length==0) return;

    let productos = JSON.parse(cart);

    const tblBody = document.getElementById('tblCartBody');
    console.log(productos);
    productos.forEach(producto => {
        
        const tr = document.createElement('TR');

        const tdImg = document.createElement('TD');
        tdImg.className = 'td td--img';
        const productoImg = document.createElement('IMG');
        productoImg.src = producto.image;
        productoImg.alt = producto.title;
        tdImg.appendChild(productoImg);

        const tdName = document.createElement('TD');
        tdName.className = 'td td--titulo'
        const tdNametxt = document.createElement('p');
        tdNametxt.textContent = producto.title;
        tdName.appendChild(tdNametxt);

        const tdPrice = document.createElement('TD');
        tdPrice.className = 'td td--precio'
        tdPrice.textContent = `$${producto.price * producto.cantidad}`;

        const tdCantidad = document.createElement('TD');
        tdCantidad.className = 'td td--cantidad';
        tdCantidad.textContent = producto.cantidad;

        const tdBtn = document.createElement('TD');
        tdBtn.className = 'td td--btn';
        const productobtn = document.createElement('BTN');
        productobtn.className = 'btn-delete';
        const productobtnIcon = document.createElement('I');
        productobtnIcon.className = 'fa-solid fa-trash';
        productobtn.appendChild(productobtnIcon);
        productobtn.addEventListener('click', (e) => {
            e.preventDefault();
            removeProduct2cart(producto.id);
            location.reload();
        })
        tdBtn.appendChild(productobtn);

        tr.appendChild(tdImg);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdCantidad);
        tr.appendChild(tdBtn);
        tblBody.appendChild(tr);
    });
    const btnComprar = document.getElementById('btnComprar');
    btnComprar.addEventListener('click',(e)=>{
        e.preventDefault();
        shopping(btnComprar,e);
    });
    const total =  productos.reduce((acu,producto)=>acu +( producto.price*producto.cantidad),0);
    document.getElementById('totalPrecio').textContent=`$${total}`;
}


function removeProduct2cart(id) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart) || [];
    let cartNew = cart.filter((ele) => ele.id !== id)
    localStorage.setItem('cart', JSON.stringify(cartNew));

}

function shopping(node) {
    node.disabled = true;
    node.textContent = 'Comprando ...';
    node.classList.add('Comprando');  

    setTimeout(() => {
        localStorage.removeItem('cart');
        location.reload();
    }, 2000);
}

function toggleEmptyCart() {
    const cart = localStorage.getItem('cart');

    const cartEmpty = document.getElementById('cartEmpty');
    const cartFull = document.getElementById('productCart');
    if (cart && JSON.parse(cart).length>0) {
        cartEmpty.classList.add('hidden');
        cartFull.classList.remove('hidden');
    } else {
        cartEmpty.classList.remove('hidden');
        cartFull.classList.add('hidden');
    }
}