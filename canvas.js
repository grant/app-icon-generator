// 
// Constants
// 
var Rainbow = require('color-rainbow');
// The default image size should be pretty big. We will resize the images down later.
var defaultImageSize = 1024; //px

// 
// Variables
// 
var sizes = [58, 80, 120];
var numImages = 100;
var save = true;

function canvasToImg() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  var colors = Rainbow.create(numImages * 1.2);
  var imgData = {};
  
  for (var j = 0; j < sizes.length; ++j) {
    var size = sizes[j];
    var scale = size/defaultImageSize;

    canvas.setAttribute('width', (scale * defaultImageSize) + 'px');
    canvas.setAttribute('height', (scale * defaultImageSize) + 'px');

    for (var i = 0; i < numImages; ++i) {
      var color = colors[i].hexString();
      var text = i + 1;
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, defaultImageSize, defaultImageSize);
      ctx.font = (scale * 900) + 'px Helvetica';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';  // a color name or by using rgb/rgba/hex values
      ctx.fillText(text, (scale * defaultImageSize)/2, (scale * defaultImageSize)/2);

      var dataString = canvas.toDataURL();
      var fileName = text + '_' + size + 'x' + size;
      imgData[fileName] = dataString;

      var newImg = document.createElement("img");
      newImg.src = dataString;
      document.body.appendChild(newImg);
    }

    document.body.appendChild(document.createElement('br'));
  }
  var data = JSON.stringify(imgData);

  var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
  if (save) {
    saveAs(blob, "data.json");
  }
}

canvasToImg();