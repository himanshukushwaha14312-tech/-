function login(){
 let u=document.getElementById("user").value;
 let p=document.getElementById("pass").value;

 if(u=="himanshu" && p=="annu"){
  sessionStorage.setItem("auth","true");
  window.location="home.html";
 }else{
  document.getElementById("msg").innerText="Wrong ❌";
 }
}

// PROTECT PAGE
if(location.pathname.includes("home.html")){
 if(sessionStorage.getItem("auth")!="true"){
  location.href="index.html";
 }
}

// MUSIC
function toggleMusic(){
 let m=document.getElementById("music");
 m.paused?m.play():m.pause();
}

// CONFETTI
function fire(){
 confetti({particleCount:200,spread:120});
}

// TYPING
let text="Tum meri sabse special ho ❤️";
let i=0;

function typing(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text[i];
  i++;
  setTimeout(typing,50);
 }
}

window.onload=typing;
