// toggle patent background images
togpat = {
  show: function(e) { $(`#${e}`).css('visibility', 'visible'); },
  hide: function(e) { $(`#${e}`).css('visibility', 'hidden'); }
  }

// toggle resume overlay
togres = {
  show: function() { $('#resumeBox').css('height', '100%'); },
  hide: function() { $('#resumeBox').css('height', '0%'); }
  }
