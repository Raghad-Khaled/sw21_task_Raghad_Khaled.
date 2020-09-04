

document.getElementById("change").onclick = function(){
    
    var x = document.getElementById("myText").value;
    document.getElementById("head").style.color = x;
    document.getElementById("contener").style.color = x;
    document.getElementById("contener2").style.color = x;
}

document.getElementById("start").onclick = function(){

    var e = document.getElementById("last").value;
    var s = document.getElementById("first").value;
// Set the date we're counting down to
var end = new Date(e).getTime();
var start = new Date(s).getTime();
// Find the distance between now and the count down date
var distance = end- start;
console.log(distance);

// Update the count down every 1 second
var x = setInterval(function() {

 
  

  
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  distance=distance-1000;
  // If the count down is finished, make it  invisible
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);
}