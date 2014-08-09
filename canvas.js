var imageSizes = [58, 80, 120];
var numImages = 100;

var Rainbow = require('color-rainbow');

function canvasToImg() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var colors = Rainbow.create(numImages);
  for (var i = 0; i < numImages; ++i) {
    var color = '#' + colors[i].hexString();
    ctx.fillStyle = color;
    console.log(color);
    // ctx.fillRect(10,10,30,30);

    // var url = canvas.toDataURL();
    // console.log(url);
  }
    

  // var newImg = document.createElement("img"); //create
  // newImg.src = url;
  // document.body.appendChild(newImg); //add to end of your document
}

canvasToImg();