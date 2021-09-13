var speed = 50;
var toWrite = document.getElementsByClassName("typewrite");
function typeWrite(elem, txt, i) {
  if (i < txt.length) {
    elem.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWrite, speed);
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  for (i2 = 0; i2 < toWrite.length; i2++) {
    t = toWrite[i2].innerHTML;
    toWrite[i2].innerHTML = ''
    typeWrite(toWrite[i2], t, 0)
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
