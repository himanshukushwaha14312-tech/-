// LOGIN
function login(){
 let u = document.getElementById("user").value.trim().toLowerCase();
 let p = document.getElementById("pass").value.trim();

 if(u === "himanshu" && p === "annu"){
  sessionStorage.setItem("auth","true");
  window.location.href = "home.html";
 }else{
  document.getElementById("msg").innerText = "❌ Wrong Username or Password";
 }
}

// PROTECT HOME
if(location.pathname.includes("home.html")){
 if(sessionStorage.getItem("auth") !== "true"){
  location.href = "index.html";
 }
}

// 🎯 Typing
let text = "You are very special for me 💖";
let i = 0;

function typing(){
 if(i < text.length){
  document.getElementById("typing").innerHTML += text.charAt(i);
  i++;
  setTimeout(typing,50);
 }
}

setTimeout(typing,5000);

// 🎵 Music
function toggleMusic(){
 let m = document.getElementById("music");
 if(m.paused){ m.play(); }
 else{ m.pause(); }
}

// 🎆 Confetti
function fire(){
 confetti();
}
