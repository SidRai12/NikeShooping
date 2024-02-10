let username = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let form = document.querySelector("form");
let euser = document.querySelectorAll("span")[0];
let epass = document.querySelectorAll("span")[1];
let eform  = document.querySelectorAll("span")[2];

console.log(euser,epass,eform);
// form.addEventListener("submit",()=>{
//    if(username.value =="" && password.value==""){
//      alert("username required");
//      alert("password required")

//    }
//    else if(username.value ==""){
//     alert("username required");
//    }

//    else if(password.value==""){
//     alert("password required")
//    }
//     else if(username.value == "siddhant" && password.value == "12345678")
//    {
//     alert("login Successfully")
//    }
//    else{
//     alert("user credentials Wrong")

//    }
// })
let LStorage = JSON.parse(localStorage.getItem("LStorage"));
console.log(LStorage);
console.log("Hii");

form.addEventListener("submit",(e)=>{
 
   euser.innerHTML="";
   epass.innerHTML ="";
   eform.innerHTML = "";

   let matching = LStorage.find((e)=>{
     if((e.UserMobile == username.value || e.UserEmail == username.value) && e.UserPass == password.value)
     {
      return  e;

     }
     
   })
   console.log(matching);
    if(username.value =="" && password.value==""){
        euser.innerHTML = "Username is required";
        epass.innerHTML ="password is required"
        e.preventDefault();
         }

         else if(username.value =="")
         {
            euser.innerHTML = "Username is required";
            e.preventDefault();
         }

         else if(password.value=="")
         {
            epass.innerHTML = "password is reuired"
            e.preventDefault();
         }
         else if(matching)
        {
           alert("welcome to the page");
           localStorage.setItem("user24",JSON.stringify(matching));
           

        }
     else{
      eform.innerHTML = "User Credentials are wrong"

      e.preventDefault();
     }


})