$(document).ready(function(){
  // Native CSS handles smooth scroll now, but this is kept for broad compatibility
  $("a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('body,html').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      } 
  });
});

// Clean and crisp loading screen exit
$(window).on('load', function() {
  setTimeout(function(){
      $("#loading").fadeOut(500, function() {
          $(this).remove(); // Removes the loader from the DOM completely once done
      });
  }, 800);
});