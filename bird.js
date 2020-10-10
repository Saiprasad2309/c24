class Bird{
    constructor(x,y)
    {
        var options={
            restitution:0.2,
            density:1,
            friction:1.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display()
    {
        this.body.position.x=mouseX
        this.body.position.y=mouseY 
        fill ("red")
        var angle = this.body.angle
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();    
    }
}