function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  typeWrite()
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var i = 0;
var speed = 200;
var toWrite = document.getElementById("typewrite");
function typeWrite() {
  for (i2 = 0; i2 < toWrite.length; i2++) {
    i = 0
    txt = toWrite[i2].innerHTML;
    toWrite[i2].innerHTML = ''
    if (i < txt.length) {
      toWrite[i2].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWrite, speed);
    }
  }
}
