let started = false;

function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u === "himanshu" && p === "annu") {
        window.location.href = "home.html";
            started = true;
        }

    } else {
        document.getElementById("error").innerText = "Wrong ❌";
    }
}

/* ❤️ Hearts Animation */
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);
}
