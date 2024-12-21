var frames = Array(
    'https://sillyivy.nekoweb.org/new-layout/randompic.html', 30,
    'https://dimden.neocities.org/navlink/', 30);
var i = 0, len = frames.length;
function ChangeSrc()
{
  if (i >= len) { i = 0; } // start over
  document.getElementById('imgimg').src = frames[i++];
  console.log("change");
  setTimeout('ChangeSrc()', (frames[i++]*1000));
}
window.onload = ChangeSrc;