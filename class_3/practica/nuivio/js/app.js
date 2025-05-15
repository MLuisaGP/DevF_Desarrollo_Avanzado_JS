document.addEventListener('DOMContentLoaded',()=>{
    const container = document.getElementById('productsContainer');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) //Convierte la respuesta en json
        .then(data=>{
            
            const productos = data;
            productos.forEach(producto => {
                const card = document.createElement('SECTION');
                card.classList.add('card');

                const divImg = document.createElement('DIV');
                divImg.className = 'producto-img';
                const productoImg = document.createElement('IMG');
                productoImg.src = producto.image;
                divImg.appendChild(productoImg);

                const productoName = document.createElement('H2');
                productoName.textContent = producto.title;


                const divInf = document.createElement('DIV');
                divInf.className = 'producto-inf';

                const productoPrecio = document.createElement('P');
                productoPrecio.textContent = `$${producto.price}`;

                const productobtn = document.createElement('BTN');
                productobtn.className='btn-cart';

                const productobtnIcon = document.createElement('I');
                productobtnIcon.className ='fa-solid fa-cart-plus';
                productobtn.appendChild(productobtnIcon);

                divInf.appendChild(productoPrecio);
                divInf.appendChild(productobtn);

                card.appendChild(divImg);
                card.appendChild(productoName);
                card.appendChild(divInf);
               
                container.appendChild(card);
            });
        })
        .catch(error=>{
            console.error('Error fetching data',error);
            container.innerHTML='<p>Fallo la carga de personajes.</p>'
            
        })
})