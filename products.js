const products = [

{
id:1,
name:"Pink Rose Bouquet",
price:659,
oldPrice:799,
category:"Bouquet",
image:"images/b1.jpg",
rating:4.9,
stock:8,
badge:"Best Seller",
description:"Beautiful handmade pipe cleaner bouquet made with premium quality materials. Perfect for birthdays, anniversaries and gifting."
},

{
id:2,
name:"Sunflower Bouquet",
price:599,
oldPrice:699,
category:"Bouquet",
image:"images/b2.jpg",
rating:5.0,
stock:5,
badge:"New Arrival",
description:"Bright handmade sunflower bouquet crafted using premium pipe cleaners."
},

{
id:3,
name:"Red Flower Pot",
price:199,
oldPrice:299,
category:"Flower Pot",
image:"images/f1.jpg",
rating:4.8,
stock:10,
badge:"Best Seller",
description:"Cute handmade flower pot suitable for home decoration."
},

{
id:4,
name:"Mini Flower Pot",
price:199,
oldPrice:299,
category:"Flower Pot",
image:"images/f2.jpg",
rating:4.8,
stock:10,
badge:"Best Seller",
description:"Cute handmade flower pot suitable for home decoration."
},

{
id:5,
name:"Pink Bear Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k1.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:6,
name:"Purple Flower Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k2.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:7,
name:"White Daisy Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k3.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:8,
name:"Red Flower Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k4.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:9,
name:"Mint Flower Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k5.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:10,
name:"Tulip Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k6.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:11,
name:"Pink Daisy Keychain",
price:99,
oldPrice:149,
category:"Keychain",
image:"images/k7.jpg",
rating:4.9,
stock:20,
badge:"Trending",
description:"Handmade pipe cleaner bear keychain."
},

{
id:12,
name:"Rakhi's",
price:69,
oldPrice:99,
category:"Rakhi's",
image:"images/r1.png",
rating:5.0,
stock:15,
badge:"Festive Special",
description:"Handmade rakhi crafted with love."
},

{
id:13,
name:"Rakhi's",
price:69,
oldPrice:99,
category:"Rakhi's",
image:"images/r2.png",
rating:5.0,
stock:15,
badge:"Festive Special",
description:"Handmade rakhi crafted with love."
},

{
id:14,
name:"Rakhi's",
price:69,
oldPrice:99,
category:"Rakhi's",
image:"images/r3.png",
rating:5.0,
stock:15,
badge:"Festive Special",
description:"Handmade rakhi crafted with love."
},

];

const productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

function updateCounts() {

const cartCount=document.getElementById("cart-count");
const favCount=document.getElementById("fav-count");

if(cartCount)
cartCount.innerText=cart.length;

if(favCount)
favCount.innerText=favourites.length;

}

function displayProducts(items){

productContainer.innerHTML="";

items.forEach(product=>{

let fav=favourites.find(item=>item.id===product.id);

let heart = fav ? "❤️" : "🤍";

productContainer.innerHTML+=`

<div class="product-card">

<div class="badge">${product.badge}</div>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<div class="rating">
⭐ ${product.rating}
</div>

<p class="price">

₹${product.price}

<span>₹${product.oldPrice}</span>

</p>

<p class="stock">

${product.stock > 5 ? "🟢 In Stock" : "🔴 Only " + product.stock + " left"}

</p>

<div class="buttons">

<button class="cart-btn"
onclick="addToCart(${product.id})">

Add to Cart

</button>

<button class="fav-btn"
onclick="toggleFavourite(${product.id})">

${heart}

</button>

</div>

<button class="view-btn"
onclick="viewProduct(${product.id})">

Quick View

</button>

<button class="buy-btn"
onclick="buyNow(${product.id})">

Buy Now

</button>

</div>

`;

});

updateCounts();

}
function addToCart(id){

let product=products.find(p=>p.id===id);

let existing=cart.find(item=>item.id===id);

if(existing){

existing.quantity++;

}

else{

cart.push({

...product,

quantity:1

});

}

localStorage.setItem("cart",JSON.stringify(cart));

updateCounts();

alert("Added to Cart");

}
function toggleFavourite(id){

let exists=favourites.find(item=>item.id===id);

if(exists){

favourites=favourites.filter(item=>item.id!==id);

}

else{

let product=products.find(p=>p.id===id);

favourites.push(product);

}

localStorage.setItem("favourites",JSON.stringify(favourites));

displayProducts(products);

}
let selectedCategory = "All";
let searchText = "";
let sortValue = "default";

updateProducts();

function filterProducts(category){

selectedCategory = category;

updateProducts();

}

document.getElementById("search").addEventListener("keyup",function(){

searchText = this.value.toLowerCase();

updateProducts();

});

function viewProduct(id){

localStorage.setItem("selectedProduct", id);

window.location.href="product.html";

}
function sortProducts(){

sortValue = document.getElementById("sort").value;

updateProducts();

}

function updateProducts(){

let filtered = [...products];

if(selectedCategory !== "All"){

filtered = filtered.filter(item => item.category === selectedCategory);

}

if(searchText !== ""){

filtered = filtered.filter(item =>
item.name.toLowerCase().includes(searchText)
);

}

if(sortValue === "low"){

filtered.sort((a,b)=>a.price-b.price);

}

else if(sortValue === "high"){

filtered.sort((a,b)=>b.price-a.price);

}

else if(sortValue === "name"){

filtered.sort((a,b)=>a.name.localeCompare(b.name));

}

displayProducts(filtered);

}
function buyNow(id){

let product = products.find(p => p.id === id);

cart = [];

cart.push({
...product,
quantity:1
});

localStorage.setItem("cart", JSON.stringify(cart));

window.location.href = "checkout.html";

}