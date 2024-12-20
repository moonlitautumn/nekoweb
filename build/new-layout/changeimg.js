var frames = Array(
    'https://sillyivy.nekoweb.org/new-layout/randompic.html', 15,
    'https://dimden.neocities.org/navlink/', 15);
var i = 0, len = frames.length;
function ChangeSrc()
{
  if (i >= len) { i = 0; } // start over
  document.getElementById('imgrotate').src = frames[i++];
  setTimeout('ChangeSrc()', (frames[i++]*1000));
}
ChangeSrc();