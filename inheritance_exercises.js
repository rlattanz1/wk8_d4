
Function.prototype.inherits = function(superClass) {

    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {};

MovingObject.prototype.move = function() {
    console.log('moving object')
};

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.shootLaser = function() {
    console.log('pew pew pew')
};

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.explode = function() {
    console.log('boom boom boom')
};

m = new MovingObject();
m.move()
s = new Ship();
s.move()
s.shootLaser()
a = new Asteroid();
a.explode()
a.move()
s.explode()
a.shootLaser()
