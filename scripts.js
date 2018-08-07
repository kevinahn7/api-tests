$(document).ready(function() {
  // //Guy on github
  // $("#newGif").click(function() {
  //   let q = "finger guns"; // search query
  //
  //   let request = new XMLHttpRequest;
  //   request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q, true);
  //   request.send();
  //
  //   request.onload = function() {
  //   	if (request.status >= 200 && request.status < 400){
  //   		let data = JSON.parse(request.responseText).data.image_url;
  //   		console.log(data);
  //   		document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  //   	} else {
  //   		console.log('reached giphy, but API returned an error');
  //   	 }
  //   };
  //
  //   request.onerror = function() {
  //   	console.log('connection error');
  //   };
  // )};


  //learn to code ~ with JavaScript
  // $("#newGif").click(function() {
  //   let q = "";
  //   let request = new XMLHttpRequest();
  //   let url = 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q;
  //   let data;
  //   request.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       data = JSON.parse(request.responseText).data.image_url;
  //       getElements();
  //     }
  //   }
  //
  //   request.open("GET", url, true);
  //   request.send();
  //
  //   getElements = function() {
  //     document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  //   }
  // )};



  //learn to code ~ with jquery
  $("#newGif").click(function() {
    let q = "";
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          console.log(response);
          $('#giphyme').html("<center><img src = '" + response.data.image_url + "'></center>");
        },
        error: function() {
          $('#giphyme').html("There was an error processing your request. Please try again.");
        }
      });
  })




  //Will and Nates way
  // let request = new XMLHttpRequest;
  //
  //
  // request.onreadystatechange = function() {
  //   if (request.readyState === 4 && request.status === 200){
  //     let data = JSON.parse(request.responseText).data.image_url;
  //     console.log("here is data: " + data);
  //     document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  //   } else {
  //     console.log('reached giphy, but API returned an error');
  //   }
  // };
  //
  // request.onerror = function() {
  //   console.log('connection error');
  // };
  //
  // request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag=', true);
  // request.send();







  //Pokemon API

  // $("#pokemonForm").submit(function(event) {
  //   event.preventDefault();
  //   let p = document.getElementById("pokemonNumber").value;
  //   let request = new XMLHttpRequest();
  //   let url = 'http://pokeapi.co/api/v2/pokemon/'+p;
  //   let data;
  //   request.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       data = JSON.parse(request.responseText);
  //       getElements();
  //     }
  //   }
  //
  //   request.open("GET", url, true);
  //   request.send();
  //
  //   getElements = function() {
  //     document.getElementById("pokemon").innerHTML = '<center><p>Number ' + p + '<p><p>This is a ' + data.name + '</p><img src = "'+data.sprites.front_default+'"  title="GIF via Giphy"></center>';
  //   }
  // });








  //learn to code ~ with jquery
  $("#pokemonForm").submit(function(event) {
    event.preventDefault();
    let p = $("#pokemonNumber").val();
    $.ajax({
        url: 'http://pokeapi.co/api/v2/pokemon/'+ p,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('#pokemon').html("<center><p>Number " + p + "<p><p>This is a " + response.name + "</p><img src = '" + response.sprites.front_default + "'></center>");
        },
        error: function() {
          $('#pokemon').html("There was an error processing your request. Please try again.");
        }
      });
    });


});
