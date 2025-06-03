var all_products = [
    { id: 1, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 1", price: 100 },
    { id: 2, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 2", price: 200 },
    { id: 3, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 3", price: 300 },
    { id: 4, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 4", price: 400 },
];

var cartcount = 0

function cartCount(){
    document.getElementById("cart-count").innerHTML = cartcount;
    document.getElementById("cart-count").style.display = cartcount === 0 ? "none" : "inline"
}

var totalPrice = 0

function DisplayProduct(){
    var content = ""
    all_products.map((product) => {
        content += `
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <img src="${product.img}" alt="">
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        <p>Price : ₹${product.price}</p>
                        <button class="btn btn-primary w-100" onclick="AddToCart(${product.id})">Add To Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById("card-row").innerHTML = content;
}

DisplayProduct()


var cart = [];

function AddToCart(productID){
    var productData = all_products.find(a => a.id === productID)
    var existingProduct = cart.find(a => a.id === productID)

    if(existingProduct){
        existingProduct.quantity++
    }else{
        productData.quantity = 1
        cart.push(productData)
    }
    DisplayCart(cart)

    cartcount++
    cartCount()

    totalPrice = totalPrice + productData.price;
    document.getElementById("total-price").innerHTML = `Total Price - ${totalPrice}`
}

function DisplayCart(cartData){
    var content = ""
    if(cartData.length === 0){
        content = `
            <tr>
                <td colspan="6" class="text-center text-danger">Your Cart is Empty!</td>
            </tr>
        `
    }else{
        cartData.map((product) => {
            content += `
                    <tr>
                        <td><img src="${product.img}" alt="" height="50"></td>
                        <td>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td><button class="btn btn-danger" onclick="RemoveCart(${product.id})">Remove</button></td>
                    </tr>
            `
        })
    }
    document.getElementById("cart-row").innerHTML = content;
}

DisplayCart(cart)

function RemoveCart(productId){
    var product = all_products.find(a => a.id === productId)
    if(product.quantity > 1){
        product.quantity--
    }else{
        cart = cart.filter(a => a.id !== productId)
    }
    DisplayCart(cart)

    cartcount--
    cartCount()

    totalPrice = totalPrice - product.price;
    document.getElementById("total-price").innerHTML = totalPrice === 0 ? "" : `Total Price - ${totalPrice}`
}

