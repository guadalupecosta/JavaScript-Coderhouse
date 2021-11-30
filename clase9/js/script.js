const carrito = []

const arrayProductos = [
    {img: 'https://via.placeholder.com/200', nombre: "Remera", precio: 1000},
    {img: 'https://via.placeholder.com/200', nombre: "Remera", precio: 2000},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 1500},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 1700},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 5000},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 3000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 7000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 8000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 13000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 6000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 19000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 800},
]

const contenedorProductos = document.getElementById('carrito')

arrayProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    
    div.innerHTML = `
                    <img src=${producto.img} class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-success addCarrito">Comprar</button>
                    </div>
                `
    
    contenedorProductos.appendChild(div)
})

const añadirCarritoBtn = document.querySelectorAll('.addCarrito')

añadirCarritoBtn.forEach(botonAgregarCarrito => {
    botonAgregarCarrito.addEventListener('click', añadirAlCarritoSeleccionado)
})

function añadirAlCarritoSeleccionado(e) {
    const button = e.target
    const item = button.closest('.card-body')
    
    const nombreProducto = item.querySelector('.card-title').textContent;
    const precioProducto = item.querySelector('.card-text').textContent;
    
añadirProductoAlCarrito(nombreProducto, precioProducto);

}

const contenedorDeCompra = document.querySelector('.btnDeCompraCarrito');

function añadirProductoAlCarrito(nombreProducto, precioProducto) {
    const carritoEnFila = document.createElement('div')
    const contenidoCarrito = `
    <div class="card-body-carrito">
        <h5 class="card-title grande">${nombreProducto}</h5>
        <p class="card-text">${precioProducto}</p>
        <button class="btn btn-success 
    </div>
    `

    carritoEnFila.innerHTML = contenidoCarrito;
    contenedorDeCompra.append(carritoEnFila);
}