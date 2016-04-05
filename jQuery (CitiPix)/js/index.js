//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').on('click', function(e){
    e.preventDefault();

    //get the value of the #city-type input and correct for capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();


    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city == 'new york city' || city == 'nyc' || city == 'new york' || city == 'ny') {
      clearCity();
      $('body').addClass('nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area' || city == 'san fran') {
      clearCity();
      $('body').addClass('sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx' || city == 'aus') {
      clearCity();
      $('body').addClass('austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      clearCity();
      $('body').addClass('la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      clearCity();
      $('body').addClass('sydney');
    }

  });
  

function clearCity(){
    $('body').removeClass('nyc');
    $('body').removeClass('austin');
    $('body').removeClass('sf');
    $('body').removeClass('la');
    $('body').removeClass('sydney');
}
});