let fname = document.querySelectorAll("input")[0];
let lname = document.querySelectorAll("input")[1];
let number = document.querySelectorAll("input")[2];
let email= document.querySelectorAll("input")[3];
let password = document.querySelectorAll("input")[4];
let cPassword = document.querySelectorAll("input")[5];
let span1 = document.querySelectorAll("span")[0];
let span2 = document.querySelectorAll("span")[1];
let span3 = document.querySelectorAll("span")[2];
let span4 = document.querySelectorAll("span")[3];
let span5 = document.querySelectorAll("span")[4];
let span6 = document.querySelectorAll("span")[5];
let form = document.querySelector("form");
let storage =[];
let LStorage = JSON.parse(localStorage.getItem("LStorage"));
if(LStorage)
{
  storage = LStorage;
}
form.addEventListener("submit",(e)=>{
  
  span1.innerHTML ="";
  span2.innerHTML ="";
  span3.innerHTML = "";
  span4.innerHTML ="";
  span5.innerHTML ="";

  span6.innerHTML ="";
 
  let regX =/^[a-zA-z]{2,15}$/; // regular expression
  let regx1 = /^[6-9][0-9]{9}$/
  let regx2 =/^[a-zA-Z0-9@]{6,15}$/
  let flag = true;
  let mobileVal = storage.find((e)=>{
    if(number.value = e.UserMobile)
    { 
      return e;


    }
  })

  


  if(fname.value =="")
  {
    
    span1.innerHTML ="*First Name is required*";
    e.preventDefault();
    flag = false;
    
  }
  else if(regX.test(fname.value)){
    span1.innerHTML ="";
    
  }
  else{
    span1.innerHTML="min -3 max -15 <br> Special characters are not allowed <br>A-Z/a -z are allowed" 
    e.preventDefault();
    flag = false;
    
  }
  if(lname.value =="")
  {
    
    span2.innerHTML ="*last Name is required*";
    e.preventDefault();
    flag = false;
    
  }
  else if(regX.test(lname.value)){
    span2.innerHTML ="";
    
  }
  else{
    span2.innerHTML="min -3 max -15 <br> Special characters are not allowed <br>A-Z/a -z are allowed" 
    e.preventDefault();
    flag = false;
    
  }
  if(email.value == "")
{
    e.preventDefault();
    span4.innerHTML = "*Email is required*";
    flag = false;
}
if(number.value =="")
{  
    e.preventDefault();
    span3.innerHTML ="*Mobile Number is required*"
    flag = false;

}

else if(regx1.test(number.value))
{
    span3.innerHTML="";
}

else{
    span3.innerHTML="*Number Should Start with 6 - 9 No characters are allowed*" ;
    e.preventDefault();
    flag = false;
}



  
if(password.value =="")
{
    e.preventDefault();
    span5.innerHTML="*Password is Required*";
    flag = false;
}
else if(regx2.test(password.value))
{
    span5.innerHTML="";

}
else{
    e.preventDefault();
    span5.innerHTML="min -6 and max - 15 a -z A -z 0 - 9 @ is allowed";
    flag = false;
}
if(cPassword.value == password.value)
{
    span6.innerHTML="";
}
else{
    e.preventDefault();
    span6.innerHTML ="*Password Mismatch*"
    flag = false;
}

if(flag)
{
  let obj =
    { Username :fname.value+" "+lname.value,
    UserEmail :email.value,
    UserMobile :number.value,
    UserPass : password.value,}
    storage.push(obj);
  
        
  localStorage.setItem("LStorage",JSON.stringify(storage));
  console.log(LStorage);
}

})




