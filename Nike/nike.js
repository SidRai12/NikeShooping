let img = document.getElementById("img");
let user24 = JSON.parse(localStorage.getItem("user24"));
let right = document.querySelector("#right");
let j1 = document.querySelector("#j1");
let s1 = document.querySelector("#s1");
let login = document.getElementById("login");
console.log(login);
console.log(j1,s1);
// console.log(user24);
console.log(img);
document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function() {
       
        preloader.style.display = "none";
        content.style.display = "block";
    }, 2500);
});
let storage  =[
    "./image/632661.jpg",
"./image/632659.jpg",
"./image/470824.jpg",
"./image/1331511.png"
]
if(user24)
{   
   j1.style.display="none";
   s1.style.display="none";
    right.innerHTML=` <a href="./nike.html" id ="logout" ><button id="logout1">Logout</button></a>
    <span style="color:black;">${user24.Username}</span> 
    <a href="./cart.html"><svg id="svg3" aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></a>
   `;
    let logout = document.querySelector("#logout");
    logout.addEventListener("click", (event) => {
        event.preventDefault();
         localStorage.removeItem("user24");
       
        right.innerHTML = `

        <a href="./cart.html"><svg id="svg3" aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></a>
    ` 
    j1.style.display="block";
    s1.style.display="block";
     });
     
}


var index = 0;
setInterval(()=>{
    index = (index+1)%storage.length;
     img.src = storage[index];
},3000)
let shop = [
    { id: "1", src: "./image/sportswear-older-t-shirt-7Lz5Pm.png", name: "Older Kid's T-Shirts", desc: "Nike Sportswear", price: 1200 },
   
    { id: "2", src: "./image/sportswear-boxy-t-shirt-L1c21h.png", name: "Women Boxy T-Shirts", desc: "Nike Sportswear", price: 1200 },
    { id: "3", src: "./image/3.png", name: "T-Shirts", desc: "Nike Sportswear", price: 1200 },
    { id: "4", src: "./image/4.png", name: "Nike Court Vision Low", desc: "Women Sportswear", price: 1200 },
    { id: "5", src: "./image/5.png", name: "Nike Court Legacy Lift", desc: "Women Sportswear", price: 1200 },
    { id: "6", src: "./image/6.png", name: "Nike Air Max SC", desc: "Women Sportswear", price: 1200 },
    { id: "7", src: "./image/7.png", name: "Nike Air Force 1'07", desc: "Women Sportswear", price: 1200 },
    { id: "8", src: "./image/8.png", name: "Long Sleeve T-Shirts", desc: "Nike Sportswear", price: 1200 },
    
    



];function createProductItems() {
    let sliderContent = document.getElementById("sliderContent");

    shop.forEach((e) => {
        let item = document.createElement("li");
        item.className = "item-a";
        item.id = e.id;

        item.innerHTML = `<div class="box">
            <div class="slide-img">
                <img class="img2" src=${e.src} alt="1">
            </div>
            <div class="detail-box">
                <div class="type">
                    <a href="#" class="desc">${e.name}</a>
                    <br>
                    <span class="name">${e.desc}</span>
                </div>
                
            </div>
        </div>`;
        
        sliderContent.appendChild(item);
    });
}



createProductItems();
let currentIndex = 0;
let items = document.getElementsByClassName("item-a");
let totalItems = items.length;
function showNext() {
    if (totalItems > 0 && currentIndex < totalItems - 0) {
        currentIndex++;
        updateSlider();
    } else {
        
        document.getElementById("sliderContent").style.backgroundColor = "red";
    }
}

function showPrevious() {
    if (totalItems > 0 && currentIndex > 0) {
        currentIndex--;
        updateSlider();
    } 
}

function updateSlider() {
    if (totalItems > 0)  {
        let translateValue = -currentIndex * 100; 
        document.getElementById("sliderContent").style.transform = `translateX(${translateValue}%)`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    startSlider();
});

function startSlider() {
    setInterval(showPrevious, 3000); 
}


let men = document.getElementById("men");
console.log(men);

let menStorage =[
    { id: "m1", src: "./image/m1.png", name: "Nike Air Force 1'07", desc: "Nike Sportswear", price: 1200 },
   
    { id: "m2", src: "./image/m2.png", name: "Air Jordan 1 Low SE Craft", desc: "Nike Sportswear", price: 1200 },
    { id: "m3", src: "./image/m3.png", name: "Nike Dunk Low Retro SE", desc: "Nike Sportswear", price: 1200 },
    { id: "m4", src: "./image/m4.png", name: "Nike Court Vision Low", desc: "Women Sportswear", price: 1200 },
    { id: "m5", src: "./image/m5.png", name: "Nike Court Legacy Lift", desc: "Women Sportswear", price: 1200 },
    { id: "m6", src: "./image/m6.png", name: "Nike Air Max SC", desc: "Women Sportswear", price: 1200 },
    { id: "m7", src: "./image/m7.png", name: "Nike Air Force 1'09", desc: "Women Sportswear", price: 1200 },
    { id: "m8", src: "./image/m8.png", name: "Nike Zoom", desc: "Nike Sportswear", price: 1200 },
];

function MenShoes()
{
   menStorage.forEach((e) => {
        men.innerHTML +=`<nav class="box" id=${e.id}> 
            <img src=${e.src} alt="">
            <h3>${e.name}</h3>
            <nav class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
            </nav>
            <p>RS ${e.price}</p>
            <button class="addcart">Add to Cart</button>
            </nav>`
                 })
}
MenShoes();

let women = document.getElementById("women");
console.log(women);

let WomenStorage =[
    { id: "w1", src: "./image/w1.png", name: "Nike Dunk Low", desc: "Nike Sportswear", price: 1200 },
   
    { id: "w2", src: "./image/w2.png", name: "Nike Court Legacy", desc: "Nike Sportswear", price: 1200 },
    { id: "w3", src: "./image/w3.png", name: "Nike Air Max", desc: "Nike Sportswear", price: 1200 },
    { id: "w4", src: "./image/w4.png", name: "Nike Court Vision Low", desc: "Women Sportswear", price: 1200 },
    { id: "w5", src: "./image/w5.png", name: "Nike Court Legacy Lift", desc: "Women Sportswear", price: 1200 },
    { id: "w6", src: "./image/w6.png", name: "Nike Air Max SC", desc: "Women Sportswear", price: 1200 },
    { id: "w7", src: "./image/w7.png", name: "Nike Air Force 1'07", desc: "Women Sportswear", price: 1200 },
    { id: "w8", src: "./image/w8.png", name: "Nike Air Max 90", desc: "Nike Sportswear", price: 1200 },

];
function WomenShoes(){
    WomenStorage.forEach((e)=>{
        women.innerHTML +=`<nav class="box" id=${e.id}> 
        <img src=${e.src} alt="">
        <h3>${e.name}</h3>
        <nav class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
        </nav>
        <p>RS ${e.price}</p>
        <button class="addcart">Add to Cart</button>
        </nav>`
    })
}
WomenShoes();


let kid = document.getElementById("kid");
let KidStorage =[
    { id: "k1", src: "./image/k1.png", name: "Nike Air Force 1", desc: "Nike Sportswear", price: 1200 },
   
{ id: "k2", src: "./image/k2.png", name: "Nike Dunk Low", desc: "Nike Sportswear", price: 1200 },
{ id: "k3", src: "./image/k3.png", name: "Nike Kawa SE", desc: "Nike Sportswear", price: 1200 },
{ id: "k4", src: "./image/k4.png", name: "Nike Court Vision Low", desc: "Women Sportswear", price: 1200 },
{ id: "k5", src: "./image/k5.png", name: "Nike Court Legacy Lift", desc: "Women Sportswear", price: 1200 },
{ id: "k6", src: "./image/k6.png", name: "Nike Air Max SC", desc: "Women Sportswear", price: 1200 },
{ id: "k7", src: "./image/k7.png", name: "Nike Air Force 1'07", desc: "Women Sportswear", price: 1200 },
{ id: "k8", src: "./image/k8.png", name: "Nike Air Force 1 L08", desc: "Nike Sportswear", price: 1200 },
];

function KidsShop(){
   KidStorage.forEach((e)=>{
        kid.innerHTML +=`<nav class="box" id=${e.id}> 
        <img src=${e.src} alt="">
        <h3>${e.name}</h3>
        <nav class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
        </nav>
        <p>RS ${e.price}</p>
        <button class="addcart">Add to Cart</button>
        </nav>`
    })
}
KidsShop();
let storage1 = JSON.parse(localStorage.getItem("Main-Cart-Nike1")) || [];

function addToCart(item) {
    storage1.push(item);
    localStorage.setItem("Main-Cart-Nike1", JSON.stringify(storage1));
}

function mainCart() {
    var allitems = [menStorage, WomenStorage, KidStorage];
    var btns = document.querySelectorAll(".addcart");

    btns.forEach((button) => {
        button.addEventListener("click", () => {
            var parent = button.parentElement.id;
            console.log("Parent ID:", parent);
        
            for (const items of allitems) {
                const foundItem = items.find((check) => check.id == parent);
        
                if (foundItem) {
                    addToCart(foundItem);
                    alert("Added to Cart");
                    window.location="cart.html";
                    break;
                }
            }
        });
        
    });
}


mainCart();
