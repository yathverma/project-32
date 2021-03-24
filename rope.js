class Rope {
    constructor(myBodyA, myPointB){
        var options={
            bodyA: myBodyA,
            pointB: myPointB,
            stiffness: 0.4,
            length : 450
        }
        this.rope = Constraint.create(options);
        this.pointB = myPointB;
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        stroke(0);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
}