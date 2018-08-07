$(document).ready(function() {
  // let q = "finger guns"; // search query
  //
  // let request = new XMLHttpRequest;
  // request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=qmmVAJKAWCLcMoOlVbsSDvBnkJEPuxDE&tag='+q, true);
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



  let q = "";
  let request = new XMLHttpRequest();
  let url = 'http://api.giphy.com/v1/gifs/random?api_key=qmmVAJKAWCLcMoOlVbsSDvBnkJEPuxDE&tag='+q;
  let data;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      data = JSON.parse(request.responseText).data.image_url;
      getElements();
    }
  }

  request.open("GET", url, true);
  request.send();

  getElements = function() {
    document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
  }





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
  // request.open('GET', 'https://api.giphy.com/v1/stickers/random?api_key=qmmVAJKAWCLcMoOlVbsSDvBnkJEPuxDE&tag=salamander', true);
  // request.send();



});
