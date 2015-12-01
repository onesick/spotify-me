// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/
$(document).ready(function(){

  $('form#search input[type=submit]').on("click", searchFunc);
  function searchFunc() {
    event.preventDefault();
    var search_key = $("#search-keyword").val();
    var search_type = $("#search-type").val();

    if (search_type==="artist"){
      searchByArtist(search_key);
    }
    else if (search_type==="track") {
      searchByTrack(search_key);
    }


  }

  function searchByArtist(keyword) {
    var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      for(var i=0; i<response.artists.length; i++){
        $("#results").append("<li><a href="+response.artists[i].href+"> "+response.artists[i].name+ "</a></li>");
      }
      console.log(response.artists.name);
    }).fail(function(){
      console.log("ajax load failed");
    })
  }


  function searchByTrack(keyword) {
    var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(){
      console.log("ajax loaded");
    }).fail(function(){
      console.log("ajax load failed");
    })
  }

  // end of jQuery load
})
