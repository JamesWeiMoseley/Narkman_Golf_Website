var num = 1;

function next(n) {                        //onclick function
  nextPic(num += n);
}

function nextPic(n) {                     //this function is for the left and right buttons
  var i;
  var pics = document.getElementsByClassName("pics");
  if (n > pics.length) {
    num = 1
  }
  if (n < 1) {num = pics.length}
  for (i = 0; i < pics.length; i++) {
      pics[i].style.display = "none";
  }
  pics[num-1].style.display = "block";
}

autoMove();

function autoMove() {                       //this function moves the carousel automatically
  var i;
  var pics = document.getElementsByClassName("pics");
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
  num++;
  if (num > pics.length) {                   //reset back to first picture
    num = 1
  }
  pics[num-1].style.display = "block";
  setTimeout(autoMove, 3000);             //this will time the auto mover
}
    
// taken from https://www.balbooa.com/blog/tips-and-tricks/add-falling-snowflakes-animation-on-your-joomla-site

document.addEventListener('DOMContentLoaded', function(){
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = function(){
      particlesJS("snow", {
          "particles": {
              "number": {
                  "value": 200,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#ffffff"
              },
              "opacity": {
                  "value": 0.7,
                  "random": false,
                  "anim": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                      "enable": false
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "enable": true,
                  "speed": 5,
                  "direction": "bottom",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": true,
                      "rotateX": 300,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": false
                  },
                  "onclick": {
                      "enable": false
                  },
                  "resize": false
              }
          },
          "retina_detect": true
      });
  }
  document.head.append(script);
});