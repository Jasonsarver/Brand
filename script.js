let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon")
let failureIcon = document.getElementsByClassName("failure-icon")
let form = document.getElementById("form")


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    /* username */
    if(username.value === ""){
        errorMsg[0].innerHTML = "Please Enter Username";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity="0";
    } else {
        errorMsg[0].innerHTML = "";
        successIcon[0].style.opacity="1";
        failureIcon[0].style.opacity = "0";
    }

    /* password */
    if(password.value === ""){
        errorMsg[2].innerHTML = "Please Enter Password";
        failureIcon[2].style.opacity = "1";
        successIcon[1].style.opacity="0";
    } else {
        errorMsg[2].innerHTML = "";
        successIcon[2].style.opacity="1";
        failureIcon[2].style.opacity = "0";
    }

    /* email */
    if(email.value === ""){
        errorMsg[1].innerHTML = "Please Enter Email";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity="0";
    } else {
        errorMsg[1].innerHTML = "";
        successIcon[1].style.opacity="1";
        failureIcon[1].style.opacity = "0";
    }
})