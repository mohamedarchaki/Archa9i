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
        
        return false;
    }
}
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
  let testBody = localStorage.getItem("body") || "body"; 
bodyDark.classList.add(testBody);
}
var i
//==========JSON REVIEW=================

  let reviews = [
    { 'id': 1, 'name': 'John Doe', 'email': '', 'titel': '', 'freedback': '', 'rvPnt': 4 },
    { 'id': 2, 'name': 'Jane Smith', 'email': '', 'titel': '', 'freedback': '', 'rvPnt': 3 },
    { 'id': 4, 'name': 'Bob Brown', 'email': '', 'titel': '', 'freedback': 'sssss ss s ssss s sss', 'rvPnt': 2 },
  ];
  function getTasksFromStorage(){
    let retrivedTasks = JSON.parse(localStorage.getItem("reviews"))
    reviews  = retrivedTasks ?? [
      { 'id': 1, 'name': 'John Doe', 'email': '', 'titel': '', 'freedback': '', 'rvPnt': 4 },
      { 'id': 2, 'name': 'Jane Smith', 'email': '', 'titel': '', 'freedback': '', 'rvPnt': 3 },
      { 'id': 4, 'name': 'Bob Brown', 'email': '', 'titel': '', 'freedback': 'sssss ss s ssss s sss', 'rvPnt': 2 },
    ];
}
getTasksFromStorage()
  function afficherReview() {
    const boxPpl = document.querySelector('.box_ppl');
    if (!boxPpl) return;

    reviews.forEach(review => {
      boxPpl.insertAdjacentHTML('beforeend', `
        <div class="box" id="box${review.id}">
          <h1>${review.name}</h1>
          
          <img src="img/avatar-05.png" alt="">
          <p>${review.freedback}</p>
          
          <div class="stars">
            ${[...Array(5)].map((_, i) => `<i class="fa-solid fa-star ${i < review.rvPnt ? 'gold' : ''}"></i>`).join('')}
          </div>
        </div>
      `);
    });

    document.querySelectorAll('.gold').forEach(star => {
      star.style.color = 'gold';
    });
  }

  afficherReview();

  function addToStorage(){
    let reviewsString= JSON.stringify(reviews)
    localStorage.setItem("reviews",reviewsString)
}
addToStorage()

function changeColor(starNum) {
  var stars = document.querySelectorAll('.sta');
  for (i = 0; i < stars.length; i++) {
    if (i < starNum) {
      stars[i].style.color = 'gold'; // تغيير اللون إلى الذهبي للنجوم المحددة
    } else {
      stars[i].style.color = 'var(--color-p)'; // الحفاظ على النجوم الباقية بلونها الافتراضي
    }
  }


  // add review 
btnRv= document.querySelector("#addRev")
box_ppl=document.querySelector(".box_ppl")
btnRv.onclick=function (){
  box_ppl.innerHTML+=`
  <div class="box">
                  <h1>${document.getElementById("contact-name").value}</h1>
                  <img src="img/avatar-05.png" alt="">
                  <p>${document.getElementById("contact-message").value}</p>
                  <div class="stars">
                    <i class="fa-solid fa-star sta2"></i>
                    <i class="fa-solid fa-star sta2"></i>
                    <i class="fa-solid fa-star sta2"></i>
                    <i class="fa-solid fa-star sta2"></i>
                    <i class="fa-solid fa-star sta2"></i>
                  </div>  
              </div>`;
  var stars2 = document.querySelectorAll('.sta2');
  for (i = 0; i < stars2.length; i++) {
    if (i < starNum) {
      stars2[i].style.color = 'gold'; // تغيير اللون إلى الذهبي للنجوم المحددة
    } else {
      stars2[i].style.color = 'var(--color-p)'; // الحفاظ على النجوم الباقية بلونها الافتراضي
    }
  }
  rvi = 
  { 'id': 6, 'name': `${document.getElementById("contact-name").value}`, 'email': '', 'titel': '', 'freedback': `${document.getElementById("contact-message").value}`, 'rvPnt': starNum }
reviews.push(rvi)
addToStorage()
}

}






document.addEventListener("DOMContentLoaded", () => {
  let currentBoxIndex = 0;
  const boxes = document.querySelectorAll('.box_ppl .box');
  const totalBoxes = boxes.length;

  function showBox(index) {
      boxes.forEach((box, i) => {
          box.classList.remove('active');
          if (i === index) {
              box.classList.add('active');
          }
      });
  }

  document.getElementById('leftBtn').addEventListener('click', () => {
      currentBoxIndex = (currentBoxIndex === 0) ? totalBoxes - 1 : currentBoxIndex - 1;
      showBox(currentBoxIndex);
  });

  document.getElementById('rightBtn').addEventListener('click', () => {
      currentBoxIndex = (currentBoxIndex === totalBoxes - 1) ? 0 : currentBoxIndex + 1;
      showBox(currentBoxIndex);
  });

  // Show the first box initially
  showBox(currentBoxIndex);
});
