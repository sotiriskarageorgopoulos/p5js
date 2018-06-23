var	x= 300;
var	y= 200;
var	speedx= 4;
var speedy= -3;
var r = 24;
function setup() {
	createCanvas(600,400);
}	
function draw() {
	background(1);
	strokeWeight(5);
	stroke(255);
	fill(255, 0, 0);
	x = x + speedx;
	y = y + speedy;
	if (x > (width-r/2) || x- r/2< 0) {
		speedx = speedx* (-1);
	}
	if (y> (height-r/2)  || y -r/2 < 0) {
		speedy = speedy* (-1);
	}
	ellipse(x, y ,r);	
}