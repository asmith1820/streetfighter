$(document).ready(function() {
  $(this).keydown(function(event) {
       if (event.which == 88){
       $('.ryu div').hide();
       $('.ryu-cool').show(); }
   });
  $('.ryu').mouseenter(function() {
    $('.ryu div').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu div').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '1020px'},
        500,
        function() {
          $('.hadouken').hide();
          $('.hadouken').css('left', '520px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
  })
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.2;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
