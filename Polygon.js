class Polygon 
{
    constructor(x, y, radius) 
      {
        var options = 
            {
            'restitution' : 1.2,
            'friction' : 1.1,
            'density' : 0.8,
            }

      this.body = Bodies.circle (x, y, radius, options);
      this.radius= radius

      this.image= loadImage("polygon.png");

      World.add(world, this.body);
      }


        display()
        {
            var pos =this.body.position;
            var angle = this.body.angle;

            push();

            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);

            //strokeWeight(4);
            //stroke("green");
            //fill("225");

            image(this.image,0,0, this.radius,this.radius);

            pop();
        }
};
