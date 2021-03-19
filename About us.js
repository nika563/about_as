/*$('.click-for-video').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('video.youtube').prop('src', 'foto/video/video о нас.mp4; controls=0&;');
});*/

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
  if (change.innerHTML == "тут ничего нет"){
    change.innerHTML = "найди навык!";
  }
  else {
    change.innerHTML = "тут ничего нет";
  }
}