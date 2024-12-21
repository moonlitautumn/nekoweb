var frames = Array(
    'https://sillyivy.nekoweb.org/new-layout/randompic.html', 30,
    'https://dimden.neocities.org/navlink/', 30);
var i = 0, len = frames.length;
function ChangeSrc()
{
  if (i >= len) { i = 0; } // start over
  document.getElementById('imgimg').src = frames[i++];
  console.log("change");
  document.getElementById('progress').style.width = '0%';
  clearInterval(id);
  a = 0;
  move();
  setTimeout('ChangeSrc()', (frames[i++]*1000));
}
var a = 0;
function move() {
  if (a == 0) {
    a = 1;
    var elem = document.getElementById("progress");
    var width = 0;
    var id = setInterval(frame2, 3.33333333);
    function frame2() {
      if (width >= 100) {
        clearInterval(id);
        a = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} 
window.onload = ChangeSrc;