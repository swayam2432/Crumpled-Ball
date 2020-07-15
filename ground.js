class Ground {
    constructor(x, y) {
        var option1 = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 1600, 50, option1);
        this.width = 1600;
        this.height = 50;

        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("red");
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, 1600, 50);
        pop();

    }
}
