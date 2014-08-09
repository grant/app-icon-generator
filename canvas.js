var imageSizes = [58, 80, 120];
var numImages = 100;

var Rainbow = require('color-rainbow');

var defaultImageSize = 800; //px

function canvasToImg() {
  var canvas = document.getElementById("canvas");
  canvas.style.width = defaultImageSize + 'px';
  canvas.style.height = defaultImageSize + 'px';
  var ctx = canvas.getContext("2d");

  var colors = Rainbow.create(numImages);
  var imgData = {};
  for (var i = 0; i < numImages; ++i) {
    var color = colors[i].hexString();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, defaultImageSize, defaultImageSize);

    var url = canvas.toDataURL();
    imgData[i] = url;
  }
  console.log(JSON.stringify(imgData));

  // var newImg = document.createElement("img"); //create
  // newImg.src = url;
  // document.body.appendChild(newImg); //add to end of your document
}

canvasToImg();