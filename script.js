// project statement
    $('.bighead').click(function(){
        $('.describe').toggleClass('visible');
    });


// audio
  var aud = document.getElementById("ASong").children[0];
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
  }


// pop-ups
$(".hover-state").mouseenter(function() {
    $(this).addClass("hovered");
})

$(".hover-state2").mouseenter(function() {
    $(this).addClass("hovered2");
})

$(".hover-state28").mouseenter(function() {
    $(this).addClass("hovered28");
})

$(".hover-state29").mouseenter(function() {
    $(this).addClass("hovered29");
})

$(".hover-state21").mouseenter(function() {
    $(this).addClass("hovered21");
})

$(".hover-state15").mouseenter(function() {
    $(this).addClass("hovered15");
})

$(".hover-state11").mouseenter(function() {
    $(this).addClass("hovered11");
})

$(".hover-state7").mouseenter(function() {
    $(this).addClass("hovered7");
})

$(".hover-state2-6").mouseenter(function() {
    $(this).addClass("hovered2-6");
})

$(".hover-state2-16").mouseenter(function() {
    $(this).addClass("hovered2-16");
})

$(".hover-state2-9").mouseenter(function() {
    $(this).addClass("hovered2-9");
})

$(".hover-state2-7").mouseenter(function() {
    $(this).addClass("hovered2-7");
})

$(".hover-state2-21").mouseenter(function() {
    $(this).addClass("hovered2-21");
})

$(".hover-state2-28").mouseenter(function() {
    $(this).addClass("hovered2-28");
})

$(".hover-state2-15").mouseenter(function() {
    $(this).addClass("hovered2-15");
})

$(".hover-state3-16").mouseenter(function() {
    $(this).addClass("hovered3-16");
})

$(".hover-state1-28").mouseenter(function() {
    $(this).addClass("hovered1-28");
})

$(".hover-state1-21").mouseenter(function() {
    $(this).addClass("hovered1-21","popup1-21");
    // $(this).addClass("popup1-21");
})

$(".hover-state2-25").mouseenter(function() {
    $(this).addClass("hovered2-25");
})

$(".hover-state1-22").mouseenter(function() {
    $(this).addClass("hovered1-22");
})

$(".hover-state1-24").mouseenter(function() {
    $(this).addClass("hovered1-24");
})

$(".hover-state3-4").mouseenter(function() {
    $(this).addClass("hovered3-4");
})

// $("hover-state3-30").mouseenter(function() {
//     $(this).addClass("hovered3-30");
// })