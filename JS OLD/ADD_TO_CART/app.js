var all_products = [
    { id: 1, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 1", price: 100 },
    { id: 2, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 2", price: 200 },
    { id: 3, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 3", price: 300 },
    { id: 4, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 4", price: 400 },
];

function display_products(){
    all_products.map((product) => {
        document.getElementById("productList").innerHTML += `
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <img src="${product.img}" alt="">
                    <div class="card-body">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <button class="btn btn-primary w-100" onclick="AddToCart(${product.id})">Add To Cart</button>
                    </div>
                </div>
            </div>
        `
    })
}

display_products()

var cart = [];

function AddToCart(productID){
    var products = all_products.find(a => a.id === productID)
    var existingProduct = cart.find(a => a.id === productID)
    if(existingProduct){
        existingProduct.quantity++;
    }else{
        products.quantity = 1;
        cart.push(products);
    }
    display_cart(cart)
}

function display_cart(cartData){
    var content = ""
    cartData.map((product) => {
       content += `
            <tr>
                <td><img src="${product.img}" height="80" width="80" alt=""></td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td><button onclick="remove_cart(${product.id})" class="btn btn-danger">Remove</button></td>
            </tr>
       ` 
    })
    document.getElementById("tbody").innerHTML = content;
}

function remove_cart(productID){
    var product = all_products.find(a => a.id !== productID)
    if(product.quantity > 1){
        product.quantity--;
    }else{  
        cart = cart.filter(a => a.id !== productID)
    }
    display_cart(cart);
}