const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth-20;
const height = canvas.height = window.innerHeight-20;
const ctx = canvas.getContext('2d');
//import listOfFunctions.js;
ctx.fillStyle = 'rgb(255,255,255)';
ctx.fillRect(0,0,width,height);
var curX;
var curY;
var curKey;
var curKeyLetter = String.fromCharCode(curKey).toLowerCase();
var UsefulFunctions = function(tester){
	this.tester = tester;
}
UsefulFunctions.prototype.convertToasdfjkl = function(letter){
	if(letter == "a"){
		return(0)
	}
	if(letter == "s"){
		return(1)
	}
	if(letter == "d"){
		return(2)
	}
	if(letter == "f"){
		return(3)
	}
	if(letter == "j"){
		return(6)
	}
	if(letter == "k"){
		return(7)
	}
	if(letter == "l"){
		return(8)
	}
	if(letter ==";"){
		return(9)
	}
}
var usefulFunctions = new UsefulFunctions("test");
// update mouse pointer coordinates
document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});
document.addEventListener("keypress", (e) => {
  curKey = e.keyCode;
  curKeyLetter = String.fromCharCode(curKey).toLowerCase();
});
var posY = 0;
var drawBackground = function(){
	var letters = ["a", "s", "d", "f","", "", "j", "k", "l", ";"]
	for(var i = 0; i < 10; i++){
		if(i != 4 && i != 5){
			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.lineWidth = 5;
			ctx.strokeRect(width*i/10, 0, width/10, height)
			ctx.fillStyle = "rgb(0, 0, 0, 0.25)";
			ctx.fillRect(width*i/10, height*2/3, width/10, height*1/3);
			if(usefulFunctions.convertToasdfjkl(curKeyLetter) == i){
				ctx.fillStyle = "rgb(255, 255, 255)";
			}else{
				ctx.fillStyle = "rgb(255, 255, 255, 0.25)";
			}
			ctx.font = (width/11).toString() + "px georgia";
			ctx.fillText(letters[i], width*i/10+(width/11)/3.5, height*2/3+(width/11));
			ctx.fillStyle = 'rgb(255,255,255)';
		}
	}
}
var FallingLetter = function(letter, xPos, yPos,size){
	this.letter = letter;
	this.xPos = xPos;
	this.yPos = yPos;
	this.size = size;
}
FallingLetter.prototype.drawBlock = function(){
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(this.xPos, this.yPos, this.size, this.size);
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.font = this.size.toString() + "px georgia";
	ctx.fillText(this.letter, this.xPos+this.size/3.5, this.yPos+this.size/1.5);
	ctx.fillStyle = 'rgb(255,255,255)';
}
function draw() {
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = "blue";
  ctx.font = "48px georgia";
  ctx.fillText(curKeyLetter, 50, 150);
  if (posY > height+50){
	  posY = -200;
  }
  posY = posY + 5;
  var testerLetter = new FallingLetter('a', curX-50, posY, width/11);
  testerLetter.drawBlock();
  drawBackground();
  window.requestAnimationFrame(draw);
};
draw();