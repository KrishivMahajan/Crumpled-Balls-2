class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        paperImg=loadImage("images 2/paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angles=this.body.angle;
        
        image(paperImg,pos.x,pos.y,this.radius,this.radius);
    }
}