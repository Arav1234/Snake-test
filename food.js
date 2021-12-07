class FOOD {
    constructor (x, y, width, height ){
      var optios = {
        isStatic : true,
        
      }
        
      this.body=Bodies.rectangle(x, y, width, height, optios);
           this.width = width;
           this.height = height;
           this.image = loadImage("food.png")
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        stroke("red")
       image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
