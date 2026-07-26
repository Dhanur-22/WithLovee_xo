let discountAmount = 0;
let totalAmount = 0;
let cart=JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
const container = document.getElementById("cart-items");
let total=0;

function displayCart(){

if(!container) return;

container.innerHTML="";

total=0;

cart.forEach((item,index)=>{

total+=item.price*item.quantity;

container.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div>

<h2>${item.name}</h2>

<p>

&#8377;${item.price} x ${item.quantity}

</p>

<p>

<b>Subtotal: &#8377;${item.price * item.quantity}</b>

</p>

<button onclick="decrease(${index})">-</button>

${item.quantity}

<button onclick="increase(${index})">+</button>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

`;

});

totalAmount = total;

document.getElementById("grandTotal").innerHTML =
"Total : &#8377;" + totalAmount;

localStorage.setItem("cart",JSON.stringify(cart));

}

function increase(index){

cart[index].quantity++;

displayCart();

}

function decrease(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}

displayCart();

}

function removeItem(index){

cart.splice(index,1);

displayCart();

}

displayCart();

function displayCheckout(){

const summary = document.getElementById("summary");

if(!summary) return;

summary.innerHTML = "";

let total = 0;

cart.forEach(item=>{

let subtotal = item.price * item.quantity;

total += subtotal;

summary.innerHTML += `

<div class="summary-item">

<img src="${item.image}" class="summary-image">

<div class="summary-details">

<h4>${item.name}</h4>

<p>Quantity: ${item.quantity}</p>

<p>&#8377;${subtotal}</p>

</div>

</div>

`;

});

totalAmount = total;

document.getElementById("grandTotal").innerHTML =
"Total : &#8377;" + total;

}

displayCheckout();

function placeOrder(){

if(cart.length===0){

alert("Your cart is empty!");
return;

}

let order="🛍️ *New Order - WithLovee_xo*%0A%0A";

let total=0;

cart.forEach(item=>{

order+=`• ${item.name} x ${item.quantity} - ₹${item.price*item.quantity}%0A`;

total+=item.price*item.quantity;

});

order+=`%0A💰 Total : ₹${total}`;

localStorage.removeItem("cart");

window.open(
"https://wa.me/916281427528?text="+order,
"_blank"
);

window.location.href="order-success.html";

}

function changePayment(){

let method=document.querySelector("input[name='payment']:checked").value;

let box=document.getElementById("paymentBox");

if(!box) return;

if(method==="cod"){

box.innerHTML="";

}

else if(method==="upi"){

box.innerHTML=`

<h3>UPI Payment</h3>

<input
type="text"
placeholder="Enter your UPI ID"
class="payment-input">

<p style="margin-top:10px;">
Example: yourname@upi
</p>

`;

}

else{

box.innerHTML=`

<h3>Card Details</h3>

<input
type="text"
placeholder="Card Number"
class="payment-input">

<input
type="text"
placeholder="Card Holder Name"
class="payment-input">

<div class="card-row">

<input
type="text"
placeholder="MM/YY"
class="payment-input">

<input
type="password"
placeholder="CVV"
class="payment-input">

</div>

`;

}

}

changePayment();
function applyCoupon(){

let code =
document.getElementById("coupon")
.value
.trim()
.toUpperCase();

discountAmount = 0;

if(code==="WELCOME10"){

discountAmount = totalAmount * 0.10;

}

else if(code==="HANDMADE20"){

discountAmount = totalAmount * 0.20;

}

else if(code==="RAKHI15"){

discountAmount = totalAmount * 0.15;

}

else{

alert("Invalid Coupon Code");

}

document.getElementById("discount").innerHTML =
"Discount : &#8377;" + discountAmount.toFixed(2);

document.getElementById("grandTotal").innerHTML =
"Total : &#8377;" + (totalAmount - discountAmount).toFixed(2);

}