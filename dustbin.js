class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.leftBody = Bodies.rectangle(x-100,y-50,20,100,options);
      this.rightBody = Bodies.rectangle(x+100,y-50,20,100,options);
      this.baseBody = Bodies.rectangle(x,y,200,20,options);
      this.image=loadImage("image/dustbingreen.png");
      
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
      World.add(world, this.baseBody);
    }
    display(){
      var leftPos =this.leftBody.position;
      var rightPos =this.rightBody.position;
      var basePos =this.baseBody.position;
      rectMode(CENTER);
      fill("brown");
      rect(leftPos.x, leftPos.y,20,100);
      rect(rightPos.x, rightPos.y,20,100);
      rect(basePos.x, basePos.y,200,20);
      imageMode(CENTER);
      image(this.image,basePos.x,basePos.y-75,175,111);

    }
  };