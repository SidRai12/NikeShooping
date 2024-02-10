
var user24 = JSON.parse(localStorage.getItem("user24"));
var body = document.querySelector("body");


if (user24) {
 
    var amount = JSON.parse(localStorage.getItem("amount"));

    
    var cname = document.getElementById("name");
    var contact = document.getElementById("contact");
    var email = document.getElementById("email");
    var price = document.getElementById("amount");

    cname.innerHTML = `${user24.Username}  `;
    contact.innerHTML = `${user24.UserMobile}`;
    email.innerHTML = `${user24.UserEmail}`;
    price.innerHTML = `${amount}`;

    
    var table = document.createElement("table");
    var row = table.insertRow();

    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = user24.Username;
    cell2.innerHTML = user24.UserMobile;
    cell3.innerHTML = user24.UserEmail;
    cell4.innerHTML = amount;

    table.appendChild(row);

    
    //body.appendChild(table);
    document.getElementById("submitBtn").addEventListener("click", submit);
} else {
    body.innerHTML = "Please Login First";
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 1000);
}

function submit() {
    var cardname = document.getElementById("cardname").value;
    var cardnumber = document.getElementById("cardnumber").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
    var regx = /^[a-zA-Z ]{2,30}$/;  // Allow spaces in the name
    var regx1 = /^[0-9]{16}$/;
    var regx2 = /^[0-9]{3}$/;
    var paymentStatus = document.getElementById("paymentStatus");

    if (!regx.test(cardname)) {
        alert("Invalid Card Holder Name");
    } else if (!regx1.test(cardnumber)) {
        alert("Invalid Card Number");
    } else if (!regx2.test(cvv)) {
        alert("Invalid CVV Number");
    } else {
        
        paymentStatus.textContent = "Payment Done";
        window.location.href = "./nike.html";
    }
}
