var fs = require('fs');

// Gets the json data from   
function getData(cb) {
  fs.readFile('./build/data.json', function (err, data) {
    if (err) {
      console.log('Add `builddata.json`');
    } else {
      cb(err, JSON.parse(data));
    }
  });
}

function decodeBase64Image(dataString) {
  return new Buffer(dataString.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
}

function createImages() {
  getData(function(err, data) {
    fs.mkdir('./build/image/', function (err) {
      var keys = Object.keys(data);
      for (var i in keys) {
        var key = keys[i];
        var imgData = data[key];
        var path = './build/image/' + key + '.jpg';
        var decodedImage = decodeBase64Image(imgData);
        fs.writeFile(path, decodedImage, function (err) {});
      }
    });
  });
}

createImages();