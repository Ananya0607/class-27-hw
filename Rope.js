class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        varoptions={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    

    display(){
       if(this.rope.bodyA){ var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}