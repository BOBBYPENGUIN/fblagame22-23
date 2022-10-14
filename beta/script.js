const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255,255,255)';
ctx.fillRect(0,0,width,height);
var curX;
var curY;
var curKey;
// update mouse pointer coordinates
document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});
document.addEventListener("keypress", (e) => {
  curKey = e.keyCode;
});
var posY = 0;
var FallingLetter = function(letter, xPos, yPos,size){
	this.letter = letter;
	this.xPos = xPos;
	this.yPos = yPos;
	this.size = size;
}
FallingLetter.prototype.drawBlock = function(){
	ctx.fillStyle = "rgb(0, 255, 255)";
	ctx.fillRect(this.xPos, this.yPos, this.size, this.size);
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.font = this.size.toString() + "px georgia";
	ctx.fillText(this.letter, this.xPos+this.size/3.5, this.yPos+this.size/1.5);
	ctx.fillStyle = 'rgb(255,255,255)';
}
function draw() {
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = "blue";
  ctx.font = "48px georgia";
  ctx.fillText(curKey, 50, 150);
  if (posY > height){
	  posY = -100;
  }
  posY = posY + 5;
  var testerLetter = new FallingLetter('a', curX-25, posY, 100);
  testerLetter.drawBlock();
  window.requestAnimationFrame(draw);
};
draw();