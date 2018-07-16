$(document).ready(function() {
  var body = $('body');
  var maruImages = ['/img/maru.jpg', '/img/maru-in-box2.jpg'];
var current = 0;

function nextBackground() {
  $('img').attr(
   'src', maruImages[current = ++current % maruImages.length]

 );

 setTimeout(nextBackground, 5000);
 }
 setTimeout(nextBackground, 5000);
   $('img').attr('src', maruImages[0]);
})