function setup() {
	createCanvas(800, 600);
	background(200);
	frameRate(60);

}

function draw() {

}

function mouseDragged() {
	stroke(random(255), random(255), random(255));
	strokeWeight(random(10));
 	ellipse(mouseX, mouseY, random(10));
}

function keyPressed(){
	// 's' to save frame
	if (keyCode === 83 ) {
		saveCanvas('canvasFrame', 'png');
	}
	// 'r' to erase drawing
	if (keyCode === 82) {
		background(200);		
	}
	// console.log(keyCode);
}