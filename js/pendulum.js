class Pendulum{
    constructor(x,y,vcolor){
        var ball_options={
            restitution:1,
            density:0.8,
            isStatic:false,
            friction:0
        }
        this.body=Bodies.circle(x,y,25,ball_options);
        this.colr=vcolor;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        strokeWeight(3);
        stroke("white")
        fill(this.colr);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25,25);
    }
}