var angle = 0,
		inc		= 0;
function setup() {
	createCanvas(800, 600);
	background(200);
	rectMode(CENTER);
	
	frameRate(120);
	strokeWeight(1);

}

function draw() {
	// map the mouse x position to the range (0.01, 0.08)
  inc = map(mouseX, 0, width, 0.01, 0.08);

  // incremment the current angle
  angle += inc;

	if( mouseIsPressed ) {
		// draw a line
		rect(mouseX, mouseY, 3, 3);
		line(pmouseX, pmouseY, mouseX, mouseY);

		// draw dot
		// ellipse(mouseX + 10 , mouseY + 10 , 3, 3);
	
		var radius = 30 * abs( sin(frameCount));

		var counterClockwiseBranchX = mouseX + radius * cos ( angle);
		var counterClockwiseBranchY = mouseY + radius * sin ( angle);

		var clockwiseBranchX = mouseX + radius * cos ( -angle);
		var clockwiseBranchY = mouseY + radius * sin ( -angle);

		// draw branch
		line(mouseX, mouseY, counterClockwiseBranchX, counterClockwiseBranchY);
		line(mouseX, mouseY, clockwiseBranchX, clockwiseBranchY);

		// draw randomly sized circles at the end of the branch.
		var circleSize = random(5); 
		ellipse(counterClockwiseBranchX, counterClockwiseBranchY, circleSize, circleSize);
		ellipse(clockwiseBranchX, clockwiseBranchY, circleSize, circleSize);
	}
}

function keyPressed() {

	switch(keyCode) {
		case 82:
			background(200);
			break;
		case 83:
			saveCanvas('canvasFrame', 'png');
			break;
	}
}
