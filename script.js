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

// PROTECT HOME PAGE
if(location.pathname.includes("home.html")){
 if(sessionStorage.getItem("auth") !== "true"){
  location.href = "index.html";
 }
}
