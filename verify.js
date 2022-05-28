if (!document.cookie.split("; ").find(r => r.startsWith("ip="))) {
  document.cookie = "hr="+window.location.href;
  window.location.href = "https://rrrdev.cf/test";
}
