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
function drawTrig(xPos, yPos){
	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.beginPath();
	ctx.moveTo(50+xPos,yPos);
	ctx.lineTo(150+xPos,yPos);
	var triHeight = 50 * Math.tan(Math.PI/3);
	ctx.lineTo(100+xPos,triHeight+yPos);
	ctx.lineTo(50+xPos,yPos);
	ctx.fill();
	ctx.fillStyle = 'rgb(255,255,255)';
}
function draw() {
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = "blue";
  ctx.font = "48px georgia";
  ctx.fillText(curKey, 50, 150);
  drawTrig(curX-100,posY);
  if (posY > height){
	  posY = -100;
  }
  posY = posY + 5;
  window.requestAnimationFrame(draw);
};
draw();