var frames = Array(
    'https://sillyivy.nekoweb.org/new-layout/randompic.html',
    'https://dimden.neocities.org/navlink/',
    'https://sillyivy.nekoweb.org/assets/imgs/mossy1.png');
var i = 0, len = frames.length;

var j = 0;
function move() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("progress");
    var width = 1;
    var id = setInterval(frame, 300);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
        ChangeSrc()
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function ChangeSrc()
{
  if (i >= len) { i = 0; } // start over
  document.getElementById('imgimg').src = frames[i++];
  console.log("change");
  // setTimeout('ChangeSrc()', (frames[i++]*1000));
  move();
}
window.onload = ChangeSrc;