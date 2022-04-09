// typing
const typed = new Typed(".typing", {
  strings: [
    "Hello There!",
    "I am RishiDev",
    "I am a Cadet!",
    "I like coding",
    "I am a Coder",
    "I am a Pythonist",
    "I am a Web Developer",
    "I am a Student",
    "I am a Human",
    "I code in Python",
    "I code in HTML",
    "I code in JavaScript",
    "I code in CSS"
  ],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});

// Navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
