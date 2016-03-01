function onReady() {
  log('index.html Ready');

  displayTime();
  setInterval(displayTime, 1000);
}
window.onload = onReady;


function formatDigits(digits) {
  return digits > 9 ? digits : "0" + digits;
}

function displayTime() {
  var date = new Date();
  var clock1 = document.getElementById('clock1');
  clock1.innerHTML = formatDigits(date.getHours()) + ":"
    + formatDigits(date.getMinutes()) + ":"
    + formatDigits(date.getSeconds());
}

function log(msg) {
  window.console.log(msg);
}
