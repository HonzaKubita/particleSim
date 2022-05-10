import Vector from './vector.js';
import textures from '../modules/textures.js';
export default class Particle {
  type = 'particle';
  fixed = false;
  position = { // Position in 2D space
    x: 0,
    y: 0
  };
  velocity = new Vector(0, 0); // Velocity in 2D space
  velocityBuffer = new Vector(0, 0); // Velocity buffer
  mass = 50; // Mass of the particle
  constructor(x, y, charge) {
    this.charge = charge; // Particle type (neutron/proton/electron)
    this.position.x = x; // Position of the particle in 2D space (x, y)
    this.position.y = y;
    this.height = 40; // Height of the particle
    this.width = 40; // Width of the particle
    this.radius = this.width / 2; // Radius of the particle
  }
  saveVelocityToBuffer() {
    this.velocityBuffer = this.velocity;
  }
  update() {
    if (!this.fixed) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }
}