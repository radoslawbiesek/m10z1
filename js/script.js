'use strict';
(function() {
  var elem = document.querySelector('.main-carousel');
  var progressBar = document.querySelector('.progress-bar');
  var restartButton = document.querySelector('.restart-button');

  var carouselTemplate = document.querySelector('#cell-template').innerHTML;
  var carouselDiv = document.querySelector('.main-carousel');

  var carouselCells = '';

  for (var i = 0; i < summitsList.length; i++) {
    summitsList[i].number = i + 1;
    carouselCells += Mustache.render(carouselTemplate, summitsList[i]);
  }

  carouselDiv.insertAdjacentHTML('beforeend', carouselCells);

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

  // Init google map
  window.initMap = function() {
    // The map, centered at Summit from slide 1
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 6, 
        center: summitsList[0].coords, 
        mapTypeId: 'satellite'}
      );
      
    // Markers for all summits
    var summitsListLength = summitsList.length;
    for (var i = 0; i < summitsListLength; i++) {
      var marker = new google.maps.Marker({
        position: summitsList[i].coords,
        map: map,
      });
    }
  }

})();