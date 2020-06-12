class Chain {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB, 
            stiffness: 1.3,
            length: 0
        }
       this.chain = Matter.Constraint.create(options)
       World.add(world, this.chain);
    }
    display() {
        var Point_A = this.chain.bodyA.position 
        var Point_B = this.chain.bodyB.position 
        strokeWeight(3)
        line(Point_A.x, Point_A.y, Point_B.x, Point_B.y);
    }
}