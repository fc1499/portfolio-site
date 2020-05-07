$(document).ready(function() {

  $("#myself").click(function() {
    $("#aboutme").css("display", "block");
    $("#aboutme").css("display", "block");
    $("#ex").css("display", "block");
    $("#face").css("display", "block");
      $(".container").css('filter','brightness(50%)');
  });

  $("#ex").click(function() {
    $("#aboutme").css("display", "none");
    $("#face").css("display", "none");
    $("#ex").css("display", "none");
    $("#games").css("display", "none");
        $("#youtubedesc").css("display", "none");
    $("#skills").css("display", "none");
        $(".container").css('filter','brightness(100%)');
  });


  $("#rose").click(function() {
    $("#games").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
        $(".container").css('filter','brightness(50%)');
  });

  $("#plaque").click(function() {
    $("#youtubedesc").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
        $(".container").css('filter','brightness(50%)');
  });

  $("#camera").click(function() {
    $("#skills").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
        $(".container").css('filter','brightness(50%)');
  });

  $("#photo2").click(function() {
    $(".container").css('filter','brightness(50%)');
    $("#next").css("display", "block");
    $("#prev").css("display", "block");
    $("#exSlide1").css("display", "block");
    $("#nature1").css("display", "block");
    showSlides();
  });

  $("#exSlide1").click(function() {
    $("#next").css("display", "none");
    $("#prev").css("display", "none");
      $("#exSlide1").css("display", "none");
      $(".container").css('filter','brightness(100%)');
  $(".mySlides").css("display", "none");
  });

  $("#photo1").click(function() {
    $(".container").css('filter','brightness(50%)');
    $("#next2").css("display", "block");
    $("#prev2").css("display", "block");
    $("#exSlide1").css("display", "block");
    $("#portrait1").css("display", "block");

  });

});


// SOURCE: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

// SECOND SLIDESHOW
var slideInde = 1;
showSlide(slideInde);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideInde += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideInde = n);
}

function showSlide(n) {
  var z;
  var slide = document.getElementsByClassName("mySlide");
  if (n > slide.length) {slideInde = 1}
  if (n < 1) {slideInde = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[z].style.display = "none";
  }

  slide[slideInde-1].style.display = "block";
}
