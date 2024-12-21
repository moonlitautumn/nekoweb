var frames = Array(
    'https://sillyivy.nekoweb.org/new-layout/randompic.html', 30,
    'https://dimden.neocities.org/navlink/', 30);
var i = 0, len = frames.length;

var j = 0;
function move() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("progress");
    var width = 1;
    var id = setInterval(frame, 3000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
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
  document.getElementById('progress').style.width = '0%';
  move();  
  setTimeout('ChangeSrc()', (frames[i++]*1000));

}
window.onload = ChangeSrc;