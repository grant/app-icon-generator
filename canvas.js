var numImages = 100;

var Rainbow = require('color-rainbow');

// The default image size should be pretty big. We will resize the images down later.
var defaultImageSize = 1024; //px

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
  document.getElementById('data').value = JSON.stringify(imgData);

  // var newImg = document.createElement("img"); //create
  // newImg.src = url;
  // document.body.appendChild(newImg); //add to end of your document
}

canvasToImg();