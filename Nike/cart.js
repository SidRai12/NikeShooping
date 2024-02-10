var storage = JSON.parse(localStorage.getItem("Main-Cart-Nike1")) || [];
console.log(storage);
console.log(localStorage.getItem("Main-Cart-Nike1"));
var table = document.getElementById("table");
let user24 = JSON.parse(localStorage.getItem("user24"));
let right = document.querySelector("#cont");
var messageContainer = document.getElementById("message-container");

if(user24)
{


storage.forEach((e, index) => {
    var row = document.createElement("tr");

    
    row.setAttribute("data-index", index);

    row.innerHTML = `
        <td class="image"><img src="${e.src}" alt=""></td>
        <td class="name">${e.name}</td>
        <td class="quantity">
            <select name="size">
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </td>
        <td class="price">${e.price}</td>
        <td class="quantity"><input type="number" value="1" class="number"></td>
        <td class="subtotal">${e.price}</td>
        <td class="delete"><i class="fa-solid fa-trash"></i></td>
    `;

    table.appendChild(row);
});


function subtotalfunction() {
    var input = document.querySelectorAll(".number");
    input.forEach((e) => {
        e.addEventListener("input", () => {
            if (e.value <= 1) {
                e.value = 1;
            }
            var parent = e.parentElement.parentElement;
            var price = parent.querySelector(".price").innerHTML;
            var subtotal = parent.querySelector(".subtotal");

            subtotal.innerHTML = `${price * e.value}`;
            totalfunction();
        });
    });
}

var totalamount;
var total = document.querySelector("h4");
var addsub = document.querySelectorAll(".subtotal");

if (addsub.length < 1) {
    localStorage.removeItem("cart");
}
var sum = 0;

function totalfunction() {
    var addsub = document.querySelectorAll(".subtotal");
    sum = 0;  

    addsub.forEach((sub) => {
        var subnumber = parseInt(sub.innerHTML);
        sum = sum + subnumber;
    });

    total.innerHTML = `Total :RS ${sum}`;
    totalamount = sum;

   
    localStorage.setItem("amount", JSON.stringify(sum));

    if (addsub.length < 1) {
        total.innerHTML = `Total :RS 0`;
        localStorage.removeItem("cart");
    }
}



function deleteFunction() {
    var removeButtons = document.querySelectorAll(".fa-trash");

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            
            var confirmDeletion = confirm("Are you sure you want to delete this item?");
            
            if (confirmDeletion) {
                var parentRow = button.parentElement.parentElement;
                var itemIndex = parentRow.dataset.index;

                
                console.log("Item Index:", itemIndex);

                
                parentRow.remove();

                var storage = JSON.parse(localStorage.getItem("Main-Cart-Nike1")) || [];

                if (itemIndex !== undefined) {
                   
                    itemIndex = parseInt(itemIndex, 10);

                    
                    console.log("Before Deletion:", storage);

                    
                    storage.splice(itemIndex, 1);

                   
                    console.log("After Deletion:", storage);

                    
                    localStorage.setItem("Main-Cart-Nike1", JSON.stringify(storage));
                }

                
                totalfunction();
            }
        });
    });
}



subtotalfunction()
totalfunction()
deleteFunction();
messageContainer.style.display = "none";

}
else{
   
    
    messageContainer.innerHTML = '<p>To view your cart, please <a href="./login.html">Login in</a>.</p>';

    table.style.display = "none"; 
}
