async function main() {
  
  // Al hacer click en el logo, desaparece y aparece otra vez.
  $('#logo').click(() => {
    $('#logo')
    .animate({opacity: '0.2'}, 1500)
    .animate({opacity: '1'}, 1500)
  })

  let productList2 = []
  
  await fetch('./json/productos.json')
    .then(promesa => promesa.json())
    .then(productList => {
      productList2 = productList
      productList.forEach(product => {
        $("#productList").append(`
        <div class="card m-3 p-1 text-center" style="width: 18rem;">
          <img src="./images/${product.imgId}"class="card-img-top" alt="...">
          <div class="card-body" id="card-body-product-${product.productId}">
            <h5 class="card-title"><strong>${product.name}</strong></h5>
            <p class="card-text">Precio: $${product.price}</p>
            <div class="dropdown">
              <select id="select-quantity-product-${product.productId}" class="form-select form-select-sm text-center" aria-label=".form-select-sm example">
                <option value="0" selected disabled>Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br>
            </div>
            <button class="btn m-1 btn-warning add-to-cart-btn" data-product-id="${product.productId}">Comprar</button>
          </div>
        </div>
        `);
      });
    })
    
  $(".add-to-cart-btn").on("click", addProductToCart);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function addProductToCart(event) {
    console.log("asd")
    const productId = event.target.dataset.productId;
    const $selectQuantity = $(`#select-quantity-product-${productId}`);
    const quantity = $selectQuantity.val();
  
    // Si no eligió cantidad, no hacer nada.
    if (quantity === null) {
      return;
    }
  
    const productAlreadyInCart = cart.find(
      (product) => product.productId == productId
    );
  
    // Si el producto ya está en el carrito, sumar sólo la cantidad.
    if (productAlreadyInCart) {
      productAlreadyInCart.quantity += parseInt(quantity);
    }
    // Si no está en el carrito, lo agregamos.
    else {
      const productToAdd = productList2.find(
        (product) => product.productId == productId
      );
  
      productToAdd.quantity = parseInt(quantity);
  
      cart.push(productToAdd);
    }
  
    updateCartList();
  
    $selectQuantity.val("0");
  
    // Si no hay mensaje de que ya fue agregado al carrito, mostrarlo.
    if ($(`#success-message-${productId}`).length == 0) {
      $(`#card-body-product-${productId}`).append(
        `<p id="success-message-${productId}" class="text-center bg-success text-white fs-3">${productToAdd.name} agregado al carrito</p>`
      );
  
      setTimeout(() => {
        $(`#success-message-${productId}`).remove();
      }, 5000);
    }
  }
  
  $cartProductList = $("#cartProductList");
  $cartCheckout = $("#cartCheckout");
  
  let $removeFromCartButtons = [];
  
  function updateCartList() {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalCost = 0;
  
    // Limpiar HTML del carrito.
    $cartProductList.html("");
    $cartCheckout.html("");
  
    // Si no hay productos, mostrar mensaje de que está vacío.
    if (cart.length == 0) {
      $cartProductList.html(
        "<p>El carrito está vacío. Comprá algunos productos.</p>"
      );
      return;
    }
  
    cart.forEach((product) => {
      totalCost += product.quantity * product.price;
      $cartProductList.append(`
        <div class="card m-3  p-1 text-center" style="width: 18rem;">
          <img src="./images/product${
            product.productId
          }.jpeg"class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>${product.name}</strong></h5>
            <p class="card-text">Precio: $${product.price}</p>
            <p class="card-text">Cantidad: ${product.quantity}</p>
            <p class="card-text">Subtotal: $${
              product.quantity * product.price
            }</p>
            <div><a class="btn m-2 p-2 btn-danger remove-from-cart-btn" data-product-id="${
              product.productId
            }">Eliminar</a></div></div>
          </div>
        </div>
      `);
    });
  
    $cartCheckout.prepend(
      `<a id="clearCart" class="btn m-2  p-2 btn-danger" style="width: 200px;">Vaciar carrito</a>`
    );
    $cartCheckout.prepend(
      `<a class="btn m-2  p-2 btn-primary" href="#" style="width: 200px;">Pagar</a>`
    );
    $cartCheckout.prepend(`<p>Total: $${totalCost}</p>`);
  
    $removeFromCartButtons = $(".remove-from-cart-btn");
  
    $removeFromCartButtons.on("click", removeProductFromCart);
  
    const $clearCart = $("#clearCart");
  
    $clearCart.on("click", clearCart);
  }
  
  function removeProductFromCart(event) {
    const productId = event.target.dataset.productId;
    cart = cart.filter((product) => product.productId != productId);
    updateCartList();
  }
  
  function clearCart() {
    cart = [];
    updateCartList();
  }
  
  updateCartList();

}
main()