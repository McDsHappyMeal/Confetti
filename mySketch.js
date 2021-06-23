const SPACE_KEY = 32; //to replace the number for the space key
let shape = 0; //this controls whether it's a square or a circle
let r = { //created object for all variables related to animating the rectangle
	width: 0, //width of the rectangle
	height: 0, //height of the rectangle
	w: 0, //growth of the width
	h: 5, //growth of the height
	shrink: true, //check whether the rectangle is shrinking or growing
	stop: true //check whether the rectangle is moving or stopped
}
let col = { //created object for the colour of the shapes
	r: 0, //red
	g: 0, //green
	b: 0, //blue
	t: 100 //transparency
}

function setup() {
	createCanvas(windowWidth, windowHeight); //making the canvas
	background(50); //starting background
	frameRate(8); //how fast the frames are
}

function draw() {
	noStroke();
	fill(245);
	rectMode(CORNER);
	rect(0, 0, windowWidth / 2, windowHeight / 2); //top left rectangle
	rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2); //bottom right rectangle
	//the shapes appear to flash in these regions

	textSize(25);
	textAlign(RIGHT, BOTTOM);
	noStroke();
	fill(225, 87, 128);
	text('Grace W', windowWidth, windowHeight); //my name printed at the bottom right corner

	col.r = random(256);
	col.g = random(256);
	col.b = random(256); //to pick a random colour

	let coor = randomCoordinate(); //calling my custom function

	if (shape % 2 == 0) {
		fill(col.r, col.g, col.b, col.t);
		stroke(col.r, col.g, col.b, col.t);
		strokeWeight(10);
		ellipse(coor.x, coor.y, 40, 40);
	} else {
		fill(col.r, col.g, col.b, col.t);
		stroke(col.r, col.g, col.b, col.t);
		strokeWeight(3);
		rect(coor.x, coor.y, 40, 40); //alternate between a randomly placed and coloured circles and squares
	}
	shape += 1;

	fill(50);
	stroke(245);
	strokeWeight(2);
	rectMode(CENTER);
	rect(windowWidth / 2, windowHeight / 2, r.width, r.height); //middle rectangle
	r.width += r.w;
	r.height += r.h; //to make the width and height of the rectangle grow/shrink

	fill(col.r, col.g, col.b);
	stroke(245);
	strokeWeight(2);
	beginShape();
	vertex(mouseX - 5, mouseY);
	vertex(mouseX + 5, mouseY);
	vertex(mouseX, mouseY - (10 * sqrt(3) / 2));
	endShape(CLOSE); //for the triangles that follow your mouse
}

function randomCoordinate() {
	let coordinate = {
		x: random(windowWidth),
		y: random(windowHeight)
	}
	return coordinate; //making a custom function to generate a random coordinate
}

function keyPressed() {
	if (keyCode == SPACE_KEY) {
		r.stop = !r.stop; //changing stop to true if false, and false if true
		if (!r.stop) {
			r.w = 0;
			r.h = 0; //if it wasn't stopped, make it stop
		} else {
			r.shrink = !r.shrink; //changing shrink to true if false, and false if true
			if (!r.shrink) {
				r.w = -5 * (windowWidth / windowHeight);
				r.h = -5; //if it wasn't shrinking, make it shrink
			} else {
				r.w = 5 * (windowWidth / windowHeight);
				r.h = 5; //if it was shrinking, make it grow
			} //if it was stopped, make it move (lines 90-96)
		}
	}
}
