const images = [
    "images/b1.jpg",
    "images/b2.jpg",
    "images/f1.jpg",
    "images/f2.jpg",
    "images/k1.jpg",
    "images/r1.png"
];

let current = 0;

setInterval(function () {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    document.getElementById("slider").src = images[current];

}, 3000);
window.onload = function(){

const loader = document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

};
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

};

function topFunction(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}
function subscribe(){

const email =
document.getElementById("newsletterEmail").value.trim();

if(email===""){

alert("Please enter your email.");
return;

}

alert("Thank you for subscribing!");

document.getElementById("newsletterEmail").value="";

}