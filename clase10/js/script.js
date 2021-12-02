let productList = [];
let finalPrice = 0;
let stockQty = 50;
let priceHoddie = 3300;
let priceTshirt = 1300;
let priceEmbrodery = 1000;

class Product {
  constructor(id, type, quantity, price, number) {
    this.productId = id;
    this.name = type;
    this.qty = quantity;
    this.price = parseInt(price);
    this.imgId = number;
  }
}

const product1 = new Product(1, "Buzo MY UNIVERSE", stockQty, priceHoddie, 0);
const product2 = new Product(2, "Buzo EPIPHANY", stockQty, priceHoddie, 0);
const product3 = new Product(3, "Buzo HOPE WORLD", stockQty, priceHoddie, 0);
const product4 = new Product(4, "Buzo MIC DROP", stockQty, priceHoddie, 0);
const product5 = new Product(5, "Buzo INNER CHILD", stockQty, priceHoddie, 0);
const product6 = new Product(6, "Buzo EGO", stockQty, priceHoddie, 0);
const product7 = new Product(7, "Remera FIRE", stockQty - 30, priceTshirt, 0);
const product8 = new Product(8, "Remera SOOBIN", stockQty - 40, priceTshirt, 0);
const product9 = new Product(9, "Remera DAYDREAM", stockQty - 40, priceTshirt, 0);
const product10 = new Product(10, "Piluso RM", stockQty - 40, priceEmbrodery, 0);
const product11 = new Product(11, "Piluso TXT", stockQty - 40, priceEmbrodery, 0);
const product12 = new Product(12, "Piluso NAMJOONING", stockQty - 40, priceEmbrodery, 0);
let productList2 = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12];

// Agrego los productos al DOM
function allProducts() {
  let insertProducts = document.getElementById('list');
  productList2.forEach((product, idNumber) => {
    insertProducts.innerHTML += `
  <div class="card m-3  p-1 text-center" id="product${idNumber + 1}"style="width: 18rem;">
  <a ><img src="./images/product${idNumber + 1}.jpeg"class="card-img-top" alt="..."></a>
 
  <div class="card-body"  id="text${idNumber + 1}">
    <h5 class="card-title"><strong>${product.name}</strong></h5>
    <p class="card-text">Precio: ${product.price} </p>
    <div class="dropdown">
<select  id="itemQty${idNumber + 1}" class="form-select form-select-sm text-center" aria-label=".form-select-sm example">
  <option selected>Cantidad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
<br>
</div>
    <a id="shop${idNumber + 1}"class="btn m-1 btn-warning" >Comprar</a>
  </div>
  
</div>
`
  })
}
allProducts();

// Limpia el carrito
function clearList() {
  let limpiar = document.getElementById('clearAll');
  limpiar.addEventListener('click', () => {
    localStorage.clear();
    alert("se eliminaron todos los productos");
  })
}
// Cuando se hace click en COMPRAR, se agrega el producto a la lista.
productList2.forEach((item, idNumber) => {
  document.getElementById(`shop${idNumber + 1}`).addEventListener('click', () => {
    let itemQty = document.getElementById(`itemQty${idNumber + 1}`).value;
    if (itemQty != 'Cantidad') {
      productList.push(new Product(item.productId, item.name, parseInt(itemQty), item.price, idNumber + 1));
      itemQty = document.getElementById(`itemQty${idNumber + 1}`);
      itemQty.innerHTML = `<option selected>Cantidad</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>`;
      if (productList.length > 0) {
        let buttons = document.getElementById('buttons');
        let message=document.getElementById(`text${idNumber + 1}`);
        message.innerHTML=`<br><p class="text-center bg-success text-white fs-3">${item.name} agregado al carrito</p>`;
        buttons.innerHTML = `<br><a class="btn m-1 btn-dark" id="finalizar">Ver carrito</a><a class="btn m-1 btn-dark" href="" id="clearAll">Vaciar Carrito</a><br>`
        setTimeout(function () {
          location.href = "index.html";
          list();
        }, 1000)
        clearList();
        showAll();
      }
    }
  })
})

// Muestra los productos del localStorage que se almacenan cada vez que se agrega un producto al carrito o se modifica.
function showAll() {
  let end = document.getElementById('finalizar');
  end.addEventListener('click', () => {
    buttons.innerHTML = `<a class="btn m-1 btn-danger" href="" id="clearAll">Vaciar Carrito</a><br>`
    clearList();
    list();
    let productResume = JSON.parse(localStorage.getItem("Productos"));
      let insertProducts = document.getElementById('list');
      insertProducts.innerHTML = ""
      productResume.forEach((item, idNumber) => {
        finalPrice += item.price * item.qty;
        document.getElementById('finalPrice').innerHTML = `<p class="text-center p-2">Total: ${finalPrice}</p><br><div><a class="btn m-2  p-2 btn-primary" href="https://www.mercadopago.com.ar/home">Pagar</a>
              <a class="btn m-2  p-2 btn-primary" href="" >Seguir Comprando</a></div>`;
        insertProducts.innerHTML += `<div id="product${idNumber + 1}"class="card m-3  p-1 text-center" style="width: 18rem;">
              <a ><img src="./images/product${item.imgId}.jpeg"class="card-img-top" alt="..."></a>
              <div class="card-body">
              <h5 class="card-title"><strong>${item.name}</strong></h5>
              <p class="card-text">Cantidad: ${item.qty} </p>
              <p class="card-text">Precio: ${item.price} </p>
              <div><a class="btn m-2  p-2 btn-danger" id="deleteItem${idNumber + 1}" >Eliminar</a></div></div>`
      })
    if (productResume) {
      productResume.forEach((item, idNumber) => {
        let deleteItem = document.getElementById(`deleteItem${idNumber + 1}`);
        deleteItem.addEventListener('click', () => {
          let cardItem = document.getElementById(`product${idNumber + 1}`);
          cardItem.innerHTML = `<p>${item.name} eliminado</p>`;
          if (productResume.length > 0) {
            productResume.splice(idNumber, 1);
            setTimeout(function () {
              location.href = "index.html";
            }, 1000)
            document.getElementById('finalPrice').innerHTML = `<p class="text-center p-2"id="${idNumber + 1}">Total: ${finalPrice - (item.price * item.qty)}</p><br><div><a class="btn m-2  p-2 btn-primary" href="https://www.mercadopago.com.ar/home" >Pagar</a>
            <a class="btn m-2  p-2 btn-primary" href="" >Seguir Comprando</a></div>`
            localStorage.setItem("Productos", JSON.stringify(productResume));
          }
          if (productResume.length == 0) {
            document.getElementById('finalPrice').innerHTML = `<p class="text-center p-2"id="${idNumber + 1}">Volvemos a la tienda</p>`
            localStorage.clear();
            setTimeout(function () {
              location.href = "index.html";
            }, 1000 * 2)
          }
        })
      })
    }
  })
}

// Botón que aparece sólo si se cargó un producto al carrito.
let productResume = JSON.parse(localStorage.getItem("Productos"));
if (productResume) {
  let button = document.getElementById('buttons');
  button.innerHTML = '<a class="btn m-1 btn-dark" id="finalizar">Ver carrito</a>'
  showAll();
}

// Busca en todo el array los productos con el mismo nombre y suma las cantidades para tener una cantidad final.
function find(item) {
  let finalQty = 0;
  const filtered = productList.filter(producto => producto.name == item);
  for (const prod of filtered) {
    finalQty += prod.qty;
  }
  if (finalQty != 0) {
    return finalQty;
  }
}

// Se agrega la lista final al localStorage para después consultarlo cuando haga click en finalizar.
function list() {
  let products = JSON.parse(localStorage.getItem("Productos"));
  let prevProd;
  let productResume = [];
  let qty = 0;
  for (let i = 0; i < productList.length; i++) {
    if (i == 0) {
      prevProd = productList[i].imgId;
      qty = find(productList[i].name);
      productResume.push(new Product(productList[i].productId, productList[i].name, qty, productList[i].price, productList[i].imgId));
    }
    else {
      if (prevProd != productList[i].imgId) {
        qty = find(productList[i].name);
        productResume.push(new Product(productList[i].productId, productList[i].name, qty, productList[i].price, productList[i].imgId));
        prevProd = productList[i].imgId;
      }
    }
  }
    if (products) {
    products = products.concat(productResume);
        localStorage.setItem("Productos", JSON.stringify(products));
    } else {
        localStorage.setItem("Productos", JSON.stringify(productResume));
    }
}