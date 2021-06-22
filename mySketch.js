const SPACE_KEY = 32; //to replace the number for the space key
let shape = 0; //this controls whether it's a square or a circle
let shade = 50; //controls the colour of the background
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
	textSize(25);
	textAlign(RIGHT, BOTTOM);
	noStroke();
	fill(225, 87, 128);
	text('Grace W', windowWidth, windowHeight); //my name printed at the bottom right corner

	col.r = random(256);
	col.g = random(256);
	col.b = random(256); //to pick a random colour

	fill(col.r, col.g, col.b);
	beginShape();
	vertex(mouseX - 5, mouseY);
	vertex(mouseX + 5, mouseY);
	vertex(mouseX, mouseY - (10 * sqrt(3) / 2));
	endShape(CLOSE); //for the triangles that follow your mouse

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
		if (shade === 50) {
			shade = 245;
			fill(shade);
			noStroke();
			rect(0, 0, windowWidth, windowHeight);
		} else {
			shade = 50;
			fill(shade);
			noStroke();
			rect(0, 0, windowWidth, windowHeight); //alternating background when the space key is pressed (erasing the shapes)
		}
	}
}
