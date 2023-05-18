import Level from './level';
// import Bird from './bird';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  };

  animate() {
    this.level.animate(this.ctx);
    // this.bird.animate();
  };

  restart(animate) {
    this.level = new Level(this.dimensions);
    this.animate();
  };

};
