document.addEventListener('DOMContentLoaded',()=>{
    const container = document.getElementById('characterContainer');

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) //Convierte la respuesta en json
        .then(data=>{
            
            const productos = data;
            productos.forEach(producto => {
                const card = document.createElement('section');
                card.classList.add('card');

                const productoImg = document.createElement('img');
                productoImg.src = producto.image;

                const productoName = document.createElement('h2');
                productoName.textContent = producto.title;

                card.appendChild(productoImg);
                card.appendChild(productoName);
               
                container.appendChild(card);
            });
        })
        .catch(error=>{
            console.error('Error fetching data',error);
            container.innerHTML='<p>Fallo la carga de personajes.</p>'
            
        })
})