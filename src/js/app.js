$(document).ready(function(){
  // setStarTimer();

  var icons = Array.from(document.querySelectorAll('.xwing-icon'));
  icons.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  $('.xwing-icon').click(function(){
    $(this).addClass('playing');
    var id = $(this).attr('id').replace(/btn/, '');
    $('audio[id^="audio"]')[id-1].play();
  });

  // if (Modernizr.touch){
  //   $('sup').css('display': 'none');
  //
  // };

});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  var audio = $(`audio[data-key="${e.keyCode}"]`).get(0);
  var icon = $(`.xwing-icon[data-key="${e.keyCode}"]`);

  var target = $(this).data('key');


  if (!audio) return;

  icon.addClass('playing');
  audio.currentTime = 0;
  audio.play();
}

function setStarTimer() {
  var timesRun = 0;
  var timer =  setInterval(function(){
    timesRun += 1;
    if (timesRun === 50) {
      clearInterval(timer);
    }
    generateStar();
  }, 100);
}

function generateStar() {
  var sizeClass = ["xsmall", "small", "medium", "large"];
  var randomSize = sizeClass[Math.floor(Math.random() * sizeClass.length)];
  $('.js-star-generator').append(new Star(randomSize));
};

function randomUpDown() {
  var i = Math.floor(Math.random() * 2) + 1;
  if(i > 1) {
    return -window.innerHeight;
  } else {
    return window.innerHeight;
  }
}

function randomRightLeft() {
  var i = Math.floor(Math.random() * 2) + 1;
  if(i > 1) {
    return -window.innerWidth;
  } else {
    return window.innerWidth;
  }
}

function Star(size) {

  var randomLeft = Math.floor(Math.random() * 100);
  var randomTop = Math.floor(Math.random() * 100);

  var Star = $('<li></li>').addClass("star").addClass(size).css({"left": randomLeft + "%", "top": randomTop + "%"});
  var shooting = TweenMax.to(Star, 1, {scale: 5, y: randomUpDown(), x:randomRightLeft(), ease:Linear.easeNone, repeat: -1});

  return Star;
};
