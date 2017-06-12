$(document).ready(function(){
  setStarTimer();
});

function setStarTimer() {
  var timesRun = 0;
  var timer =  setInterval(function(){
    timesRun += 1;
    if (timesRun === 100) {
      clearInterval(timer);
    }
    generateStar();
    createShootingStar();
  }, 1000);
}


function generateStar() {
  // var colourClass = ["Star-orange", "Star-pink", "Star-purple", "Star-green"];
  var sizeClass = ["xsmall", "small", "medium", "large"];
  var randomSize = sizeClass[Math.floor(Math.random() * sizeClass.length)];

  $('.js-star-generator').append(new Star(randomSize));
};

function createShootingStar() {
  var star = $('.star');
  var rand = Math.floor(Math.random() * 3)  + 1;
  star.eq(rand).addClass('shooting');
}

function Star(size) {
  var randomLeft = Math.floor(Math.random() * 100);
  var randomTop = Math.floor(Math.random() * 100);

  var Star = $('<li></li>').addClass("star").addClass(size).css({"left": randomLeft + "%", "top": randomTop + "%"});

  //animate upwards motion
  var tweenSmall =  TweenMax.to($('.star.large'), 60, {top: -100, opacity: 0, ease:Linear.easeNone, repeat: -1});
  var tweenMedium =  TweenMax.to($('.star.small, .star.medium'), 40, {top: -100, opacity: 0, ease:Linear.easeNone, repeat: -1});
  var tweenLarge =  TweenMax.to($('.star.xsmall'), 30, {top: -100, opacity: 0, ease:Linear.easeNone, repeat: -1});
  var tweenShooting =  TweenMax.to($('.star.shooting'), 1, {top: -100, ease:Linear.easeNone, repeat: -1});

  return Star;
};
