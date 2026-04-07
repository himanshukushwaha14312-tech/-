function login() {
    let u = document.getElementById("user").value.trim();
    let p = document.getElementById("pass").value.trim();

    if(u === "himanshu" && p === "annu") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Wrong ❌";
    }
}
