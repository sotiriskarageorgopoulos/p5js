function setup() {
    // create canvas
    createCanvas(800,500);
   
   
    }

function draw() {
    // set background color
   background('#D66761');
    noFill();
    // create the face ellipse
    ellipse(width/2,height/2,200,300);
    // for the left eye
    // draw the base ellipse for the eye, the sclera/“white of the eye”
    ellipse(210,210,50,25);
    // draw the Iris for the eye
    ellipse(210,210,25);
    // draw the center of the eye
    fill('black');
    ellipse(210,210,12.5);
    // for the right eye
    // draw the base ellipse for the eye, the sclera/“white of the eye”
    noFill();
    ellipse(300,210,50,25);
    // draw the Iris for the eye
    ellipse(300,210,25);
    // draw the center of the eye
    fill('black');
    ellipse(300,210,12.5);
}