class SNAKE {
    constructor (x,y,radius){
      var optios = {
        isStatic : true,
        ///restution :1.8,
        //density : 0,
        
      }
        
      this.body=Bodies.circle(x,y,radius,optios);
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        stroke("blue")
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}