/*
function red() {
  document.cookie = "hr="+window.location.href;
  window.location.href = "https://rrrdev.cf/verify";
}
if (!document.cookie.split("; ").find(r => r.startsWith("ip="))) {
  red();
} else {
  $.getJSON('https://ipinfo.io/json', function(data) {
    var ip=data.ip;
    if (document.cookie.split("; ").find(r => r.startsWith("ip=")).split("=")[1]!=ip) {
      red();
    }
  });
}
*/
