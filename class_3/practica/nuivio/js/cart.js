document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productCard');

})

function showCart(){

}

function removeProduct2cart(id) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart) || [];
    let cartNew = cart.filter((ele) => ele.id !== producto.id)
    localStorage.setItem('cart', JSON.stringify(cartNew));

}
function shopping(node) {
    let cart = localStorage.removeItem('cart');
    setTimeout(()=>{
        node.textContenier = 'Comprando ...'
        node.classList.add('Comprando');
        //quitar carito y mostrar mensaje de enviado
    },2000);
}