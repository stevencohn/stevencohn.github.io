// See https://github.com/jquery/jquery/issues/4581
$(document).ready(function($) {

  // reset the anchor point when refreshing (F5) the page, otherwise the
  // scrolling hack below doesn't work the first time after a refresh
  window.location.hash = '';

  // setting height:100vh on the main-wrapper breaks scrollTop animation
  // so this is a work-around that temporarily unsets height, animates,
  // and then resets height; but we also need to manually set the window
  // location after the animation otherwise scroll position is reset back to 0
  // when the style is reapplied
  $(".scroller").click(function(event){
  event.preventDefault();

  // clear hash otherwise clicking current #href won't work
  window.location.hash = '';
  // disable offending style temporarily
  $('#wrapper').css('height', 'auto');
  let h = this.hash;
  $('body').animate({scrollTop:$(this.hash).offset().top}, 500,
    function() {
      $('#wrapper').css('height', '100vh')
        .promise().done(() => { window.location.hash = h; })
      }
    );
  });
});
