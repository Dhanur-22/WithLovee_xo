let favourites=JSON.parse(localStorage.getItem("favourites")) || [];

let container=document.getElementById("fav-container");

function showFav(){

container.innerHTML="";

favourites.forEach((item,index)=>{

container.innerHTML+=`

<div class="product-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeFav(${index})">

Remove

</button>

</div>

`;

});

localStorage.setItem(

"favourites",

JSON.stringify(favourites)

);

}

function removeFav(index){

favourites.splice(index,1);

showFav();

}

showFav();