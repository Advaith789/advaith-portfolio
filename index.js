$(document).ready(function(){
  // Standardized smooth scroll behavior
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

// Crisp loading screen fade out
$(window).on('load', function() {
  setTimeout(function(){
      $("#loading").fadeOut(500, function() {
          $(this).remove(); // Cleans up the DOM completely once done
      });
  }, 800);
});