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

document.addEventListener("DOMContentLoaded", function () {
  const elements = Array.from(document.querySelectorAll("h2[data-count]"));
  const observer = new IntersectionObserver(
      function (entries) {
          entries.forEach((entry) => {
              if (entry.intersectionRatio >= 0.5) {
                  const index = elements.indexOf(entry.target);
                  const delay = index * 250;
                  setTimeout(() => startCounter(entry.target), delay);
                  observer.unobserve(entry.target);
              }
          });
      },
      {
          threshold: 0.5
      }
  );
  elements.forEach((element) => observer.observe(element));

  function startCounter(element) {
      const target = parseInt(element.getAttribute("data-count"));
      const additionalData = element.getAttribute("additional-data") || "";
      const totalFrames = 480;
      let frame = 0;

      function easeOut(t, b, c, d) {
          return c * ((t = t / d - 1) * t * t + 1) + b;
      }

      function counter() {
          if (frame >= totalFrames) {
              element.textContent = target + additionalData;
              return;
          }
          frame++;
          const easedValue = easeOut(frame, 0, target, totalFrames);
          element.textContent = Math.floor(easedValue) + additionalData;
          requestAnimationFrame(counter);
      }
      counter();
  }
});
