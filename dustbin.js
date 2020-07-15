class Dustbin {
    constructor(x, y, width, height) {
        var option3 = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height,option3);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}