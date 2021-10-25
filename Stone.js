class Stone{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.w=50;
        this.h=50;
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world, this.body);
     }
     display()
     { var pos = this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER)
        fill("brown");
        rect(0, 0, this.w, this.h)
    }
    
    }
