function onReady() {
  console.log('Hello Chapter 1');

  var clock1 = new Clock('clock1', 0, 'UTC');
  var clock2 = new Clock('clock2', 300, 'ET');
}

function Clock(id, offset, label) {
  offset = offset || 0;
  offset = offset*60*1000;
  label = label || '';
  this.updateClock = function() {
    var date = new Date();
        date = new Date(date - date.getTimezoneOffset()*60*1000
                        + offset);

    var clock = document.getElementById(id),
        clockLabel = document.getElementById(id + '-label');
    clockLabel.innerHTML = label;
    clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds());
  };

  this.formatDigits = function(val) {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };

  var that = this;
  setInterval(function() {
    that.updateClock();
  }, 1000);
  this.updateClock();
}

window.onload = onReady;

//follow me at https://twitter.com/02geek
//learn more about me at http://02geek.com
