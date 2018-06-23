function setup() {
    createCanvas(windowWidth,windowHeight); 
    
  }
  function draw () {
    background('orange');
    for (dim = width*0.9; dim>width/10; dim = dim-width/20 ) {
      rectMode(CENTER);
      rect(width/2,height/2,dim,height-dim);
    }
  }