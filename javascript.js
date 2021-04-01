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
    

function myalert() {
  alert("Thanks, we will get back to you shortly!");
}