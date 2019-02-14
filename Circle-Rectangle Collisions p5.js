var debugShapes = false;
var c;//initialize c
var b;//initialize b
function setup() {//setup
  createCanvas(400, 400);//create a canvas
  c = new Circle(25);//set c to Circle object
  b = new Rectangle(100,100,200,100);//set b to Rectangle object
}//setup

function draw() {//draw
  noFill();
  background(220);//background color
  c.show();//show the circle
  b.show();//show the rectangle
  b.check(c);
	
}//draw

function Rectangle (x,y,w,h){//rectangle
  
  //dimensions
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //dimensions
  
  //find the corner vectors
  this.a = createVector(x,y);
  this.b = createVector(x+w,h);
  this.c = createVector(x,y+h);
  this.d = createVector(x+w,y+h);
  //find the corner vectors
  

       this.allPoints;
  
  this.show = function(){//show
    //console.log(this.abm + " " + this.bcm + " " + this.cdm + " " + this.dam);
    
       this.allPoints = [];

    
    if(debugShapes){//plot corners if debug is on
    //plot corners
    strokeWeight(5);
    point(this.a.x,this.a.y);
    point(this.b.x,this.b.y);
    point(this.c.x,this.c.y);
    point(this.d.x,this.d.y);
    strokeWeight(1);
    //plot corners 
    }//plot corners if debug is on
    
    //Plot points
    for (var ab  = this.a.x;ab <= this.b.x;ab++){
      point(ab,this.a.y);
      this.allPoints.push(createVector(ab,this.a.y));
    }
    for (var bc  = this.b.y;bc <= this.c.y;bc++){
      point(this.b.x,bc);
      this.allPoints.push(createVector(this.b.x,bc));
    }
    for (var cd = this.c.x;cd <= this.d.x;cd++){
      point(cd,this.c.y);
      this.allPoints.push(createVector(cd,this.c.y));
    }
    for (var da = this.a.y;da <= this.d.y;da++){
      point(this.a.x,da);
      this.allPoints.push(createVector(this.a.x,da));
    }
    //plot points
    
    
    //plot shape
    //rect(x,y,w,h);//plot original shape
    //plot shape
    //console.log(this.allPoints.length);
  }//show
  
  this.check = function(circle){//check for collision
    //console.log(this.allPoints[602]);
    var a = false;
    for (var c  = 0;c < this.allPoints.length;c++){//for every point
      this.distance = dist(this.allPoints[c].x,this.allPoints[c].y,circle.pos.x,circle.pos.y);
      if (this.distance <=circle.r+1){//if the distance is less than the radius of the circle + 1
        a = true;//set a to true
      }else if (a){//if it is not in contact, but a is true
        a = true;//keep a set to true
      }else {//if it is not colling and has not already detected a collision
        a = false;//keep as false
      }//close else statement
    }//for every point
    
    //returns a true or false based on whether the circle is contained in the rectangle
    var b = (this.x <= circle.pos.x && this.x + this.w >= circle.pos.x) && (this.y <= circle.pos.y && this.y + this.h >= circle.pos.y);
    
    if(a||b){//if the edge contact is true
      stroke(255,0,0);//color red
    }else {//open else the if condition is false and false
      stroke(0);//stroke 0
    }//close color else statement
  }//check for collision
}//rectangle
function Circle(r){//circle
  this.pos = createVector(mouseX,mouseY);//position vector
  this.r = r;
  this.d = this.r*2;
  
  this.show = function(){//show
    this.pos = createVector(mouseX,mouseY);//updates the position vector
  	ellipseMode(CENTER);//ellipse mode to center
  	ellipse(this.pos.x,this.pos.y,this.d,this.d);//draw the ellipse
    
    if(debugShapes){//plot middle if debug is on
  	strokeWeight(5);//change stroke
  	point(this.pos.x,this.pos.y);//place center point
 		strokeWeight(1);//change stroke
    }//plot middle if debug is on
    
  }//show
}//circle
