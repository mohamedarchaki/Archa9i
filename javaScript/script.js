const menu = document.getElementById("menu");
const actoins = document.getElementById("actoins");
const t = document.getElementById("a");
const tt = document.getElementById("b");
const ttt = document.getElementById("c");
menu.addEventListener("click", () => {
    hundleMenu();
});

function hundleMenu(){
    menu.classList.toggle("is-active")
    actoins.classList.toggle("is-active")
    t.classList.toggle("is-active")
    tt.classList.toggle("is-active")
    ttt.classList.toggle("is-active")
}


let icon = document.getElementById("icon");
let bodyDark = document.body;
let logo =  document.getElementById("logo");
let logo1 =  document.getElementById("logo1");
let logo2 =  document.getElementById("logo2");
getInStorge()


icon.onclick= function(){
    bodyDark.classList.toggle("darck-mode");

    if(document.body.classList.contains("darck-mode")){
        icon.className="fa-solid fa-sun"
        logo.src="img/logo archa9i darck.png";
        logo1.src="img/logo archa9i darck.png";
        logo2.src="img/logo archa9i darck.png";

        localStorage.setItem("body","darck-mode")
        localStorage.setItem("logo","img/logo archa9i darck.png")
        localStorage.setItem("logo1","img/logo archa9i darck.png")
        localStorage.setItem("logo2","img/logo archa9i darck.png")
        localStorage.setItem("icon","fa-solid fa-sun")
    }
    else{
        icon.className="fa-solid fa-moon"
        logo.src="img/logo archa9i.png";
        logo1.src="img/logo archa9i.png";
        logo2.src="img/logo archa9i.png";
        
        localStorage.setItem("body","")
        localStorage.setItem("logo","img/logo archa9i.png")
        localStorage.setItem("logo1","img/logo archa9i.png")
        localStorage.setItem("logo2","img/logo archa9i.png")
        localStorage.setItem("icon","fa-solid fa-moon")
    }
    getInStorge()
}

let nameError = document.getElementById("name-error")
let emailError = document.getElementById("email-error")
let sujeteError = document.getElementById("sujete-error")
let messageError = document.getElementById("message-error")
let submError = document.getElementById("subm-error")
    
function validateName(){
    var firtName = document.getElementById("contact-name").value;
    if(firtName.length==0){
    nameError.innerHTML='Name is required';  
    return false;
  }
  if(!firtName.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
    nameError.innerHTML=' <i class="fas fa-exclamation" style="color:red;"></i>';  
    return false;

  }
  nameError.innerHTML='<i class="fas fa-check"></i>'; 
  return true;
}

function validateEmail(){
    var Email = document.getElementById("contact-email").value;
    if(Email.length==0){
        emailError.innerHTML='Email is required';  
    return false;
  }
  if(!Email.match(/^[a-z0-9]+@\w+.\w+$/)){
    emailError.innerHTML='<i class="fas fa-exclamation" style="color:red;"></i>';  
    return false;
  }
  emailError.innerHTML='<i class="fas fa-check"></i>'; 
  return true;
}
// =========== validateSujete() ==========
function validateSujete(){
    var sujete = document.getElementById("contact-sujete").value;
    if(sujete.length==0){
        sujeteError.innerHTML='Sujete is required';  
    return false;
  }
  if(sujete.length < 10){
    sujeteError.innerHTML=`${10-sujete.length } more charactesrs required`;  
    sujeteError.style.bottom= "10px";
    return false;
  }
  sujeteError.innerHTML='<i class="fas fa-check"></i>'; 
  return true;
}

// =========== validateMessage() ==========
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    if(message.length==0){
        messageError.innerHTML='Message is required';  
    return false;
  }
  if(message.length < 30){
    messageError.innerHTML=`${30-message.length }more charactesrs required`;  
    return false;
  }
  messageError.innerHTML='<i class="fas fa-check"></i>'; 
  return true;
}
// =========== validateForme() ==========
function validateForme(){
    if(!validateName()  || !validateEmail() || !validateSujete() || !validateMessage()){
        submError.style.display='block';
        submError.style.top='auto';
        submError.style.left='0';
        submError.style.transform='translateY(0%)';
        submError.innerHTML='Plese fix error to submit';
        setTimeout(function (){submError.style.display='none';},4000);
        return false;
    }
}
// =========== btn scroltop==========
let btnUp = document.querySelector(".btnUp");

window.onscroll = function () {
  if(window.scrollY > 600){
    btnUp.style.display="flex"
  }
  else{
    btnUp.style.display="none"
  }
};

btnUp.onclick= function (){
  window.scrollTo({
    left:0,
    top:0,
  });
};

//loding 
window.addEventListener('load', () => {
  const loader= document.querySelector(".loading")
  loader.classList.add("loading__hidden")

    document.body.removeChild(loader)
  })


// ============ add to Storage =========
function addToStorage(a,b){
  a=toString(a)
  localStorage.setItem(`${a}`,b)
}
function getInStorge(){
  let testIcon = localStorage.getItem("icon")
  icon.className= testIcon ?? "fa-solid fa-moon"

  let testLogo = localStorage.getItem("logo")
  logo.src=testLogo || "img/logo archa9i.png"
  logo1.src=testLogo || "img/logo archa9i.png"
  logo2.src=testLogo || "img/logo archa9i.png"
  let testBody = localStorage.getItem("body") || "body"; 
bodyDark.classList.add(testBody);
}
