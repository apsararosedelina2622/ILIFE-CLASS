var all_products = [
    { id: 1, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 1", price: 100 },
    { id: 2, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 2", price: 200 },
    { id: 3, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 3", price: 300 },
    { id: 4, img : "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D", name: "Product 4", price: 400 },
];



function display_products(){
    var content = "";
    all_products.map((product) => {
        content += `
            <div class="col-lg-3 col-md-6">
                <div class="card my-2">
                    <img src="${product.img}" alt="">
                    <div class="card-body">
                        <h4>${product.name}</h4>
                        <p>Price : ₹${product.price}</p>
                        <button class="btn btn-primary w-100 my-2" onclick="AddToCart(${product.id})"> Add To Cart </button>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById("cardRow").innerHTML = content;
}

display_products()



var cartCount = 0;

function cart_count(){
    document.getElementById("cartCount").innerHTML = cartCount;
    document.getElementById("cartCount").style.display = cartCount === 0 ? "none" : "inline"
}



var cart = [];

var totalPrice = 0;

// function AddToCart(productID){
//     var data = all_products.find(a => a.id === productID)
//     cart.push(data)
//     display_cart(cart);
// }

function AddToCart(productID){
    var productData = all_products.find(a => a.id === productID)
    var existingProduct = cart.find(a => a.id === productID)
    
    if(existingProduct){
        existingProduct.quantity++;
    }else{
        productData.quantity = 1;
        cart.push(productData);
    }
    
    display_cart(cart);

    cartCount++;
    cart_count();

    totalPrice = totalPrice + productData.price;

    document.getElementById("totalPrice").innerHTML = `Total Price : ₹${totalPrice}`
}



function display_cart(cartData){
    var content = "";
    if(cartData.length === 0){
        content = `
            <tr>
                <td colspan="6" class="text-center text-danger p-2">Your Cart is Empty!</td>
            </tr>
        `
    }else{
        cartData.map((product) => {
            content += `
                <tr>
                    <td><img src="${product.img}" height="80" width="80" alt=""></td>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price * product.quantity}</td>
                    <td><button class="btn btn-danger" onclick="remove_cart(${product.id})">Remove</button></td>
                </tr>  
            `
        })
    }
    document.getElementById("tbody").innerHTML = content;
}

display_cart(cart);



function remove_cart(productID){
    var product = all_products.find(a => a.id === productID)
    if(product.quantity > 1){
        product.quantity--;
    }else{
        cart = cart.filter(a => a.id !== productID)
    } 
    display_cart(cart);

    cartCount--;
    cart_count();

    totalPrice = totalPrice - product.price;

    document.getElementById("totalPrice").innerHTML = totalPrice === 0 ? "" : `Total Price : ₹${totalPrice}`
}   

// 4 , 3 , 2 !== 4 



function search_product(){
    var searchInput = document.getElementById("searchBox").value.toLowerCase();

    var filteredData = all_products.filter(a => a.name.toLowerCase().includes(searchInput))

    if(searchInput.length === 0){
        document.getElementById("searchRow").innerHTML = "";
    }else{
        var content = ""; 
        filteredData.map((product) => {
            content += `
                <div class="col-lg-3">
                    <div class="card">
                        <img src="${product.img}" alt="">
                        <div class="card-body">
                            <h4>${product.name}</h4>
                            <p>Price : ₹${product.price}</p>
                        </div>
                    </div>
                </div>        
            `
        })
        document.getElementById("searchRow").innerHTML = content;
    }
 
}