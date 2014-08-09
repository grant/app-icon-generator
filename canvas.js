var numImages = 100;
var save = false;
var Rainbow = require('color-rainbow');

// The default image size should be pretty big. We will resize the images down later.
var defaultImageSize = 1024; //px

function canvasToImg() {
  var canvas = document.getElementById("canvas");
  canvas.setAttribute('width', defaultImageSize + 'px');
  canvas.setAttribute('height', defaultImageSize + 'px');
  var ctx = canvas.getContext("2d");

  var colors = Rainbow.create(numImages);
  var imgData = {};
  for (var i = 0; i < numImages; ++i) {
    var color = colors[i].hexString();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, defaultImageSize, defaultImageSize);
    ctx.font = '900px Helvetica';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';  // a color name or by using rgb/rgba/hex values
    ctx.fillText(i+1, defaultImageSize/2, defaultImageSize/2);

    var url = canvas.toDataURL();
    imgData[i] = url;

    var newImg = document.createElement("img");
    newImg.src = url;
    document.body.appendChild(newImg);
  }
  var data = JSON.stringify(imgData);

  var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
  if (save) {
    saveAs(blob, "data.json");
  }
}

canvasToImg();