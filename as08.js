function setup()
{
   createCanvas(800,800);
}


function draw()
{
  background('#DC143C');
  stroke('black');

var m=0 ;

for(var j=0; j < 350; j+=50)
{ 
  

  if(m == 2)
  {
  for(var i=0;i < 355; i+=40)
  {
   push();
    var c = (i,j,i);
    fill(c);
    ellipse(20+i,50+j,20,20);
    pop();

    push();
    var c2 = (100,170,150);
    fill(c2);
    ellipse(20+i,50+j,10,10);
    pop();
  }
}
  else {
    for(var k=0;k< 355; k+=40)
  {
   
    var c1 = (k,j,k);
    fill(c1);
    ellipse(20+k,50+j,20,20);

  }
  }

  m++;

  }
 }
