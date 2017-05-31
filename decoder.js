// wait until the page loads to run the script
// (otherwise there won't be a document to write to)
window.onload = function() {
  table = [];
  for (i = 0; i < 11; i++) {
      table.push(-11000 + i * 1000);
  }
  table.push(-100)
  table.push( -50)
  table.push( -20)
  table.push( -10)
  table.push(  -1)
  for (i = 0; i < 150; i++) {
      table.push(20 * i);
  }
  for (i = 0; i < 60; i++) {
      table.push(3000 + 50 * i);
  }
  for (i = 0; i < 29; i++) {
      table.push(6000 + 100 * i);
  }
  console.log(table);

  function bisectLeft (array, x) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= x) return i;
    }
    return array.length;
  }

  // make a new canvas element to draw into
  var canvas = document.createElement('canvas');
  canvas.id     = "canvas";
  canvas.width  = 255;
  canvas.height = 10;

  var ctx=canvas.getContext("2d");
  var imgData=ctx.createImageData(255,1);

  // all 10 rows are identical, just to make it easier to see
  for (j=0; j< 10; j++){
    // save data in the columns
    for (i = 0; i < 255; i++) {
    	v = table[i];
    	console.log('starting value:', v);
      // o = offset
    	o = v + 11000;
      // r = red channel
    	r = o % 256;
    	g = Math.floor(o / 256);
    	console.log('r:', r, 'g:', g);
    	console.log('reconstructed, r + g*256 - 11000:', (r+g*256)-11000);

      // build each pixel's color value
    	id = i * 4;
      {
        imgData.data[id+0]=r;
        imgData.data[id+1]=g;
        imgData.data[id+2]=0; // don't use b channel
        imgData.data[id+3]=255; // solid alpha
      }
    }
    ctx.putImageData(imgData,0,j);
  }
  // grab the contents of the otherwise invisible canvas 
  var d=canvas.toDataURL("image/png");
  // popup a new window
  var w=window.open('about:blank','image from canvas');
  // make a new image with the contents of the canvas
  w.document.write("<img src='"+d+"' alt='from canvas'/>");
}
