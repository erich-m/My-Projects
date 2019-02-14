var c;
var s1;
var s2;
function setup() {
  createCanvas(400, 400);
  c = new Circle(200,200,50,0);
  s1 = createSlider(0,10,0.1);
  s2 = createSlider(0,10,0.1);
}

function draw() {
  background(220);
  noFill();
  c.render();
  c.update(s1.value(),s2.value());
}

function Circle (x,y,r,a){
  this.x = x;
  this.y = y;
  this.r = r;
  this.d = r*2;
  
  this.a = a;
  this.rotatingV = 0;
  
  this.clockForce = 0;
  this.cClockForce = 0;
  
  this.pos = createVector(this.x,this.y);
  
  this.drag = 0.95;
  
  this.render = function(){
    translate(this.pos.x,this.pos.y);
  	ellipse(0,0,this.d,this.d);
    
    line(0,0,r*sin(radians(this.a)),r*cos(radians(this.a)));
    
    text(this.a,20,20);
  }
  
  this.update = function(force1,force2){
    this.clockForce = force1;
    this.cClockForce = force2;
    
    this.rotatingV += -this.clockForce + this.cClockForce;
    this.rotatingV *= this.drag;
    this.a += this.rotatingV;
    
    
  }
}
