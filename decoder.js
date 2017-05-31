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
    if (array[i] >= x) return i
  }
  return array.length
}
//console.log(bisectLeft(table, 5000))

var canvas = document.createElement('canvas');
canvas.id     = "canvas";
canvas.width  = 255;
canvas.height = 10;
canvas.style.zIndex   = 8;
canvas.style.position = "absolute";

document.body.appendChild(canvas);

var ctx=canvas.getContext("2d");
var imgData=ctx.createImageData(255,1);

for (j=0; j< 10; j++){
for (i = 0; i < 255; i++) {
	v = table[i];
	console.log('starting value:', v);
	o = v + 11000;
	// console.log('offset:', o);
	r = o % 256;
	g = Math.floor(o / 256);
	console.log('r:', r, 'g:', g);
	console.log('reconstructed, r + g*256 - 11000:', (r+g*256)-11000);

	id = i * 4;
  {
    imgData.data[id+0]=r;
    imgData.data[id+1]=g;
    imgData.data[id+2]=0;
    imgData.data[id+3]=255;
  }
}
ctx.putImageData(imgData,0,j);
}
var d=canvas.toDataURL("image/png");
var w=window.open('about:blank','image from canvas');
w.document.write("<img src='"+d+"' alt='from canvas'/>");
}

