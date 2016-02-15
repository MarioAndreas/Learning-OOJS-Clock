function onReady() {
  console.log('Hello Chapter 1');

  var clock = createClock('clock');
  var clock2 = createClock('clock2');

}

function createClock(id) {
  var c = new Object();
  c.updateClock = function() {
    var date = new Date();
    var clock = document.getElementById(id);
    clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds());
  };

  c.formatDigits = function(val) {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };

  c.updateClock();
  setInterval(function() {c.updateClock();}, 1000);
  return c;
}



window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com
