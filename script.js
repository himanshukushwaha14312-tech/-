// 🎯 Typing Effect
let text = "You are very special for me 💖";
let i = 0;

function typing(){
 if(i < text.length){
  document.getElementById("typing").innerHTML += text.charAt(i);
  i++;
  setTimeout(typing,50);
 }
}

// 🎵 Music
function toggleMusic(){
 let m = document.getElementById("music");
 if(m.paused){
  m.play();
 }else{
  m.pause();
 }
}

// 🎆 Confetti Button
function fire(){
 confetti();
}

// Start typing after open
setTimeout(typing,5000);
