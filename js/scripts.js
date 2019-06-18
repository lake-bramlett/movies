
  function Movie(movieTitle, posterUrl, showTimes, basePrice){
    this.movieTitle = movieTitle;
    this.posterUrl = posterUrl;
    this.showTimes = showTimes;
    this.basePrice = basePrice;
  }

  function Ticket(ticketTitle, ticketTime, ticketPrice) {
    this.ticketTitle = ticketTitle;
    this.ticketTime = ticketTime;
    this.ticketPrice = ticketPrice;
  }

var movie1 = new Movie("Zootopia", "zootopia.jpeg", [10, 12, 15], 7);
var movie2 = new Movie("Batman", "batman.jpg", [17, 19], 12);
var movie3 = new Movie ("The Thing", "thing.jpg", [21, 23], 9);

var moviesArray = [movie1, movie2, movie3];

// var ticket = new Ticket ($("whatever").val(), $("whatever").val(), ticketpriceresult);

function populateMovieRoster() {
  moviesArray.forEach(function(input){
    // this populates the title
    $(".movie-title-" + (moviesArray.indexOf(input) + 1)).text(input.movieTitle);
    // this populates the times
    input.showTimes.forEach(function(movieTime) {
      var originalValue = movieTime;
      var movieTime = convertTime(movieTime);
      $(".movie-selector-" + (moviesArray.indexOf(input) + 1)).append('<option value="' + originalValue + '">' + movieTime + '</option>');
    });
    // this populates the poster image path (posterUrl)
    $(".movie-card" + (moviesArray.indexOf(input) + 1) + " img").attr("src","img/" + input.posterUrl);
    console.log(input.posterUrl);
  });

}//function populateMovieRoster

function convertTime(numberVal) {
  if(numberVal > 12){
    return numberVal = (numberVal - 12) + ":00 PM";
  }else if (numberVal < 12){
    return numberVal = (numberVal) + ":00 AM";
  } else if (numberVal === 12) {
    return numberVal + ":00 PM";
  }
}


function ticketPriceGenerator(buttonVal){
    if(timeofday = undefined){

    } else {
    var timeofday = parseInt($(".movie-selector-" + buttonVal).val());
    console.log(timeofday);
    // var seniorBoolean = $("movie-card" + buttonVal + " input").is(":checked");
    var seniorBoolean = $(".movie-card" + buttonVal + " input:checkbox").is(":checked");
    console.log(seniorBoolean);
    var ticketPrice = function(price) {
      if (seniorBoolean === true) {
       return ticketPrice = "$" + (price / 2).toFixed(2);
     } else if (seniorBoolean === false && timeofday < 12) {
       return ticketPrice = "$" + (price - 2).toFixed(2);
     } else {
      return ticketPrice = "$" + (price).toFixed(2);
     }
    };
    ticketPrice(moviesArray[buttonVal-1].basePrice);
    var myTicket = new Ticket(moviesArray[buttonVal-1].movieTitle, convertTime(timeofday), ticketPrice);
    console.log(myTicket);
    showTicket(myTicket);
    }
  };//function show ticket


function showTicket(ticket) {
  $(".ticket h4").text("");
  $(".ticket ul").text("");
  $('.ticket h4').text(ticket.ticketTitle);
  $('.ticket ul').append('<li> Show Time: ' + ticket.ticketTime + '</li>');
  $('.ticket ul').append('<li> Ticket Price: ' + ticket.ticketPrice + '</li>');

}

$(document).ready(function(){
    console.log("jquery says hi");
    populateMovieRoster();


    // if selector 1 is clicked
    $("#buy-ticket-1").click(function(event){
      event.preventDefault();
      var buttonVal = 1
      ticketPriceGenerator(buttonVal);
    })

    // if selector 2 is clicked
    $("#buy-ticket-2").click(function(event){
      event.preventDefault();
      var buttonVal = 2
      ticketPriceGenerator(buttonVal);
    })
    // if selector 3 is clicked
    $("#buy-ticket-3").click(function(event){
      event.preventDefault();
      var buttonVal = 3
      ticketPriceGenerator(buttonVal);
    })

});
