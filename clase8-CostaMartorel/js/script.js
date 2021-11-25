// Globales
const Carrito = []
let VerCarrito;
let resultado = 0;
let acumulador = 0;
let mostrarDom;


class Producto{
    constructor(nombre, categoria, precio, id){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = parseInt(precio);
        this.id = parseInt(id);
    }
}
// Productos
const productos = [
    new Producto("Remera", "Indumentaria", 1000, 1),
    new Producto("Jean" , "Indumentaria", 6900, 2),
    new Producto("Jogger" , "Indumentaria", 5900, 3),
    new Producto("Anteojos" , "Accesorios", 1000, 4),
    new Producto("Collar" , "Accesorios", 500, 5),
    new Producto("Gorra" , "Accesorios", 1500, 6),
    new Producto("Celular" , "Tecnología", 20250, 7),
    new Producto("Televisión" , "Tecnología", 32000, 8),
    new Producto("Teclado" , "Tecnología", 21500, 9)
]


// Funcion buscar categoria dentro de los productos
function buscadorCategoria() {
    if (ingresoCategoria == 1) {
        const Filter = productos.filter(producto => producto.categoria == "Indumentaria");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Indumentaria")
        }
    } else if (ingresoCategoria == 2) {
        Filter = productos.filter(producto => producto.categoria == "Accesorios");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Accesorios")
        }
        console.log(Filter);
    }  else if (ingresoCategoria == 3) {
        Filter = productos.filter(producto => producto.categoria == "Tecnología");
        for (let i = 0; i < 3; i++) {
            const element = Filter[i].nombre;
            alert(" " + element + " sector Tecnología")
        }
        console.log(Filter);
    }
}
// Funcion agregar producto al carrito
function agregarAlCarrito() {
    if (ingresoCategoria == 1) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito.\n1 = Remera\n2 = Jean\n3 = Jogger"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Remera ", "Indumentaria", 1000, 1))
                break;
            case 2:
                Carrito.push(new Producto("Jean" , "Indumentaria", 6900, 2))
                break;
            case 3:
                Carrito.push(new Producto("Jogger" , "Indumentaria", 5900, 3))
                break;
            default:
                break;
        }
    } else if (ingresoCategoria == 2) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito.\n1 = Anteojos\n2 = Collar\n3 = Gorra"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Anteojos" , "Accesorios", 1000, 4))
                break;
            case 2:
                Carrito.push(new Producto("Collar" , "Accesorios", 500, 5))
                break;
            case 3:
                Carrito.push(new Producto("Gorra" , "Accesorios", 1500, 6))
                break;
            default:
                break;
        }
    } else if (ingresoCategoria == 3) {
        ingresoDeEleccion = parseInt(prompt("Ingrese el numero correspondiente para agregar el articulo al carrito.\n1 = Celular\n2 = Televisión\n3 = Teclado"))
        switch(ingresoDeEleccion){
            case 1:
                Carrito.push(new Producto("Celular" , "Tecnología", 20250, 7))
                break;
            case 2:
                Carrito.push(new Producto("Televisión" , "Tecnología", 32000, 8))
                break;
            case 3:
                Carrito.push(new Producto("Teclado" , "Tecnología", 21500, 9))
                break;
            default:
                break;
        }
    }
}
// Acumulador de precio de productos
function acumuladorDePrecios() {
    for (let i = 0; i < Carrito.length; i++) {
        const element = Carrito[i].precio;
        acumulador = acumulador + element;
        console.log(acumulador);
    }
}
// Suma total entre el precio de los productos y el IVA a pagar
function resultadoPrecioTotal() {
    resultado = total + acumulador;
    console.log(resultado);
}

alert("Bienvenido a la tienda online")
// Ingreso del usuario que categoria ver
let ingresoCategoria = parseInt(prompt("Ingresa 1 si queres ver nuestros productos en la categoria de indumentaria.\nIngresa 2 para nuestros productos en la categoria de accesorios.\nIngresa 3 para ver la categoria de tecnología."));
// Funcion
buscadorCategoria();
// Ingreso del usuario si añadir elementos al carrito o no
let interes = parseInt(prompt("Te gustaria añadir uno de estos productos al carrito de compras?\n1 = Si\n2 = No"))

if (interes == 1) {
    agregarAlCarrito();

    let interesDos = parseInt(prompt("Te gustaria añadir otro producto?\n1 = Si\n2 = No"))
    if (interesDos == 1) {
    agregarAlCarrito();
    acumuladorDePrecios();
    }
    // Mostrar el carrito y el precio final en el DOM
    verCarrito = parseInt(prompt("Te gustaria mirar el carrito y el precio total de los productos?\n1 = Si\n2 = No"))
    if (verCarrito == 1) {
        mostrarDom = document.getElementById('contenedorProductos')
        for (let i = 0; i < Carrito.length; i++) {
            const element = Carrito[i];
            let contenedorProductos = document.createElement("li");
            contenedorProductos.innerHTML = `<h2>Producto: ${element.nombre}</h2>
            <p> ID: ${element.id}</p>
            <hr>`;
            mostrarDom.appendChild(contenedorProductos);  
        }
        total = 0

        for (let i = 0; i < Carrito.length; i++) {
            total += Carrito[i].precio * 0.21;
        }

        resultadoPrecioTotal();
        contenedorProductos = document.createElement("div");
        contenedorProductos.innerHTML = `<h2> El precio total de tus productos es de $${resultado}</h2>
        <button class = "my-2 btn btn-success">Comprar</button>`;
        mostrarDom.appendChild(contenedorProductos);  
    }

} else {
    alert("Adios")
}