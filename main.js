$(document).ready(function() {

  $("#myself").click(function() {
    $("#aboutme").css("display", "block");
    $("#aboutme").css("display", "block");
    $("#ex").css("display", "block");
    $("#face").css("display", "block");
    $("#contact").css("display", "block");
    $("#twitter").css("display", "block");
    $("#insta").css("display", "block");
    $(".container").css('filter', 'brightness(50%)');
  });

  $("#ex").click(function() {
    $("#aboutme").css("display", "none");
    $("#face").css("display", "none");
    $("#ex").css("display", "none");
    $("#games").css("display", "none");
    $("#youtubedesc").css("display", "none");
    $("#skills").css("display", "none");
    $(".container").css('filter', 'brightness(100%)');
    $("#contact").css("display", "none");
    $("#twitter").css("display", "none");
    $("#insta").css("display", "none");
  });


  $("#rose").click(function() {
    $("#games").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
    $(".container").css('filter', 'brightness(50%)');
  });

  $("#plaque").click(function() {
    $("#youtubedesc").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
    $(".container").css('filter', 'brightness(50%)');
  });

  $("#camera").click(function() {
    $("#skills").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
    $(".container").css('filter', 'brightness(50%)');
  });

  $("#photo2").click(function() {
    $(".container").css('filter', 'brightness(50%)');
    $("#next").css("display", "block");
    $("#prev").css("display", "block");
    $("#exSlide1").css("display", "block");
    showSlides(1, 0);
  });

  $("#exSlide1").click(function() {
    $("#next").css("display", "none");
    $("#prev").css("display", "none");
    $("#next2").css("display", "none");
    $("#prev2").css("display", "none");
    $("#exSlide1").css("display", "none");
    $(".container").css('filter', 'brightness(100%)');
    $(".mySlides").css("display", "none");
    $(".mySlides2").css("display", "none");

  });

  $("#photo1").click(function() {
    $(".container").css('filter', 'brightness(50%)');
    $("#next2").css("display", "block");
    $("#prev2").css("display", "block");
    $("#exSlide1").css("display", "block");
    showSlides(1, 1);
  });
});





// SOURCE: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = [1, 1];
var slideId = ["mySlides", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
