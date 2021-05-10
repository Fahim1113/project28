class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling)
    }
    //bodyA position to null
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        //making the bodyA null as false
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(5);
            line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
       
    }
}