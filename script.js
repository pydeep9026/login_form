let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let showPasswordButton = document.querySelector(".password-button");
let signusername=document.querySelector(".tophell");
let signpassword=document.querySelector(".bottomhell");
let loginbutton=document.querySelector(".login-button");
let spanusername=document.querySelector(".messageusername");
let spanpassword=document.querySelector(".messagepassword");
let face = document.querySelector(".face");

showPasswordButton.addEventListener('click', function (event) {
  event.preventDefault();
});

loginbutton.addEventListener("click",function(e){
  var usernamecheck=usernameInput.value.trim()
  if(usernamecheck==""){
    showerror(usernameInput,"username is required")
    e.preventDefault();
  }else if(usernamecheck.length<6){
    showerror(usernameInput,"username cannot be less than 6 characters")
    e.preventDefault();
  }else if(usernamecheck.length>15){
    showerror(usernameInput,"username cannot be more than 15 characters")
    e.preventDefault();
  }
  else{
    showcheck(usernameInput)
    
  }
})


function showerror(usernameInput, message){
  var inputparent=usernameInput.parentElement
  inputparent.className="usernamelabelerror"
  signusername.className="fa-solid fa-circle-exclamation"
  spanusername.innerHTML=message
}

function showcheck(usernameInput){
  var inputparent=usernameInput.parentElement
  inputparent.className="usernamelabelcheck"
  signusername.className="fa-sharp fa-solid fa-circle-check"

}






loginbutton.addEventListener("click",function(e){
  var passwordcheck=passwordInput.value.trim()
  if(passwordcheck.length>15){
    showerrorp(passwordInput,"password cannot be more than 15 characters")
    e.preventDefault();
  }else if(passwordcheck==""){
    showerrorp(passwordInput,"password is required")
    e.preventDefault();
  }else if(passwordcheck==="password"){
    showerrorp(passwordInput,"password cannot be password")
    e.preventDefault();
  }else if(passwordcheck.length<6){
    showerrorp(passwordInput,"password cannot be less than 6 characters")
    e.preventDefault();
  }else if(passwordcheck.length>12){
    showerrorp(passwordInput,"password cannot be more than 12 characters")
    e.preventDefault();
  }
  else{
    showcheckp(passwordInput)
  }
})


function showerrorp(passwordInput, messagep){
  var inputparent=passwordInput.parentElement
  inputparent.className="passwordlabelerror"
  signpassword.className="fa-solid fa-circle-exclamation"
  spanpassword.innerHTML=messagep
}

function showcheckp(passwordInput){
var inputparent=passwordInput.parentElement
inputparent.className="passwordlabelcheck"
signpassword.className="fa-sharp fa-solid fa-circle-check"
}








passwordInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

passwordInput.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

usernameInput.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${-length}deg`);
});

usernameInput.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

usernameInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);

    face.style.setProperty("--rotate-head", `${-length}deg`);
  }, 100)
);

showPasswordButton.addEventListener("click", (event) => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  } else {
    passwordInput.type = "text";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add("peek");
    });
  }
});
