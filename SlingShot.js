class  SlingShot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10

        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world,this.sling)


    }
display(){
    var pointA=this.sling.bodyA.position
    var pointB=this.pointB
    strokeWeight(5)
    line(ponitA.x,pointA.y,pointB.x,pointB.y)
}
}