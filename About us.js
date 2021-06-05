

$('.click-for-video').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('video.youtube').prop('src', 'foto/video/video о нас.mp4; controls=0&;');
});


document.addEventListener("mousemove", parallax);
 function parallax(e){
 	this.querySelectorAll('.layer').forEach(layer => {
 		const speed = layer.getAttribute('data-speed')

 		const x = (window.innerWidth - e.pageX*speed)/100
 		const y = (window.innerWidth - e.pageY*speed)/100

 		layer.style.transform = `translateX(${x}px) 
 		                         translateY(${y}px)`
 	})
 }
function myFunction() {
  var change = document.getElementById("toggle");
  if (change.innerHTML == "Ранго:'тут ничего нет'"){
    change.innerHTML = "Ранго:'найди навык!'";
  }
  else {
    change.innerHTML = "Ранго:'тут ничего нет'";
  }
}

var tag = document.getElementById('demo');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
});


document.onmousemove = function(event){
  let x = event.x - 1565;
  let y = event.y - 290;
  console.log(x+""+y);
  document.querySelector('.y-1').style.transform = 'rotate('+57.2958 * arcctg(x - 1490,y - 2100)+'deg)';
  document.querySelector('.y-3').style.transform = 'rotate('+57.2958 * arcctg(x - 1545,y - 1545)+'deg)';
  function arcctg(x,y){
    if (x > 0 && y > 0) return Math.PI/2 - Math.atan(x/y);
    if (x < 0 && y > 0) return Math.PI/2 - Math.atan(x/y);
    if (x < 0 && y < 0) return Math.PI + Math.atan(y/x);
    if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x/y));
  }
}