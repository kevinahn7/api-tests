$(document).ready(function() {
  // //Guy on github
  // let q = "finger guns"; // search query
  //
  // let request = new XMLHttpRequest;
  // request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q, true);
  // request.send();
  //
  // request.onload = function() {
  // 	if (request.status >= 200 && request.status < 400){
  // 		let data = JSON.parse(request.responseText).data.image_url;
  // 		console.log(data);
  // 		document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  // 	} else {
  // 		console.log('reached giphy, but API returned an error');
  // 	 }
  // };
  //
  // request.onerror = function() {
  // 	console.log('connection error');
  // };


  //learn to code ~ with JavaScript
  // let q = "";
  // let request = new XMLHttpRequest();
  // let url = 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q;
  // let data;
  // request.onreadystatechange = function() {
  //   if (this.readyState === 4 && this.status === 200) {
  //     data = JSON.parse(request.responseText).data.image_url;
  //     getElements();
  //   }
  // }
  //
  // request.open("GET", url, true);
  // request.send();
  //
  // getElements = function() {
  //   document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  // }



  //learn to code ~ with jquery
  let q = "";
  $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=rtRsFZTvQcH0dHcUjv9HH80EVzMzpBmR&tag='+q,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('#giphyme').html("<center><img src = '" + response.data.image_url + "'></center>");
      },
      error: function() {
        $('#giphyme').html("There was an error processing your request. Please try again.");
      }
    });



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



});
