var i = 20;
function setup() {
  // create canvas
  createCanvas(800,500);

}
function draw () {
     // set background color
  background('orange');
  // left line
  line (350,100, 350,300);
  // right line
  line (450,100, 450,300);
  // draw horizontal lines across the height of the two vertical lines
  for (var i=10; i<200; i= i+20){
    line (350,100+i, 450,100+i);
  }
}