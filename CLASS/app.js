var all_products = [
    { id: 1, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 1", price: 100 },
    { id: 2, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 2", price: 200 },
    { id: 3, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 3", price: 300 },
    { id: 4, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 4", price: 400 },
];


function DisplayData(){
    var content = "";
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

DisplayData()


var cart = [];

var cartCount = 0

function CartCount(){
    document.getElementById("cart-count").innerHTML = cartCount;
    document.getElementById("cart-count").style.display = cartCount === 0 ? "none" : "inline"
}

// function AddToCart(productID){
//     var productData = all_products.find(a => a.id === productID)
//     cart.push(productData)
//     DisplayCart(cart)
// }

function AddToCart(productID){
    var productData = all_products.find(a => a.id === productID)
    var existingProduct = cart.find(a => a.id === productID)
    
    if(existingProduct){
        existingProduct.quantity++
    }else{
        productData.quantity = 1;
        cart.push(productData)
    }

    cartCount++;
    CartCount()

    DisplayCart(cart)
}


function DisplayCart(cartData){
    var content = "";

    if(cartData.length === 0){
        content = `
            <tr>
                <td colspan="6" class="text-center text-danger">Your cart is empty!</td>
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
                    <td><button class="btn btn-danger" onclick="RemoveFun(${product.id})">Remove</button></td>
                </tr>
            `
        })
    }
    
    document.getElementById("cart-row").innerHTML = content;
}

DisplayCart(cart)


function RemoveFun(productID){
    var product = all_products.find(a => a.id === productID)

    if(product.quantity > 1){
        product.quantity--;
    }else{
        cart = cart.filter(a => a.id !== productID)
    }

    cartCount--;
    CartCount()
    
    DisplayCart(cart)
}