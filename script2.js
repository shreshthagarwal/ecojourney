var navItems = document.querySelectorAll(".bottom-nav-item");

navItems.forEach(function(e, i) {
  e.addEventListener("click", function(e) {
    navItems.forEach(function(e2, i2) {
      e2.classList.remove("active");
    });
    this.classList.add("active");
  });
});

$('.button-row').each( function() {
  var $buttonRow = $( this );
  var $activeButton = $buttonRow.find('.button.is-active');

  $buttonRow.on( 'click', '.button', function( event ) {
    // deactivate previous button
    $activeButton.removeClass('is-active');
    // set & activate new button
    $activeButton = $( this );
    $activeButton.addClass('is-active');
  });
});
