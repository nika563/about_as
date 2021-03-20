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

/*document.querySelectorAll('animate_eye').addEventListener('mousemove', eyes);
  function eyes(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = "rotate("+rotation+"deg)"
    });
  }*/