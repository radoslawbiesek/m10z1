'use strict';
(function() {
  var elem = document.querySelector('.main-carousel');
  var progressBar = document.querySelector('.progress-bar');
  var restartButton = document.querySelector('.restart-button');

  var flkty = new Flickity( elem, {
    cellAlign: 'center',
    contain: true,
    hash: true,
    pageDots: false,
  });

  flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });

  restartButton.addEventListener('click', function() {
    flkty.select(0);
  });


})();