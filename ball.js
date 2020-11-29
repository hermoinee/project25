class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.radius=radius;
      this.image=loadImage("image/paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x,pos.y);
      //rectMode(CENTER);
      fill(255);
      //rect(0, 0, this.width, this.height);
       //ellipseMode(RADIUS);
       //ellipse(0,0,this.radius);
       imageMode(CENTER);
       image(this.image,0,0,this.radius);
      pop();

    }
  };
