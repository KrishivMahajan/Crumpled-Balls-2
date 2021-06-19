class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        dustbinImg=loadImage("images 2/dustbingreen.png");
        this.ground=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.ground);
    }
    display(){
        image (dustbinImg,)
        imageMode(CENTER);
		image(dustbinImg, 1000,590,200,200);
        console.log(this.width);
}
}