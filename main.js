$(document).ready(function() {

  $("#myself").click(function() {
    $("#aboutme").css("display", "block");
    $("#ex").css("display", "block");
    $("#face").css("display", "block");
  });

  $("#ex").click(function() {
    $("#aboutme").css("display", "none");
    $("#face").css("display", "none");
    $("#ex").css("display", "none");
    $("#games").css("display", "none");
        $("#youtubedesc").css("display", "none");
    $("#skills").css("display", "none");
  });


  $("#rose").click(function() {
    $("#games").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
  });

  $("#plaque").click(function() {
    $("#youtubedesc").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
  });

  $("#camera").click(function() {
    $("#skills").css("display", "block");
    $("#face").css("display", "block");
    $("#ex").css("display", "block");
  });


});
