class Iron{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:3,
            density:30
        }
        this.w=50;
        this.h=50;
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER)
        fill("red");
        rect(0, 0, this.w, this.h);
    }
    
}