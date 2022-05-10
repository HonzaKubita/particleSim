import utils from './utils.js';
import Sim from '../sim/sim.js';
import textures from './textures.js'
import render from './render.js';

// Main render object
export default {
  canvas: "", // Canvas object
  c: "", // Canvas to draw on (context)
  mount(canvasID) { // Mount canvas on page
    utils.debug('Mounting canvas...');
    this.canvas = document.getElementById(canvasID);
    this.c = this.canvas.getContext("2d");
    utils.debug('Canvas mounted');
  },
  clear() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  draw(object, mid = false) { // Draw object on canvas
    utils.debug('Drawing object');
    if (object.type == 'platform' || object.type == 'connection') {
      this.c.strokeStyle = object.color;
      this.c.lineWidth = 10;
      this.c.beginPath();
      this.c.moveTo(object.position.point1.x, canvas.height - object.position.point1.y);
      this.c.lineTo(object.position.point2.x, canvas.height - object.position.point2.y);
      this.c.stroke();
      this.c.rect(object.position.point1.x - 5, canvas.height - object.position.point1.y - 5, 10, 10);
      this.c.rect(object.position.point2.x - 5, canvas.height - object.position.point2.y - 5, 10, 10);
      this.c.fill();
      this.c.stroke();
    } else if (object.type == 'particle') {
      if (object.selected && !Sim.running) {
        this.drawOutline(object);
      }
      let texture;
      if (object.charge == 0) {
        texture = textures.particleNeutral;
      } else if (object.charge > 0) {
        texture = textures.particlePositive;
      } else if (object.charge < 0) {
        texture = textures.particleNegative;
      }

      if (mid) {
        this.c.drawImage(texture, object.position.x - object.width / 2, canvas.height - object.position.y - object.height / 2);
      } else {
        this.c.drawImage(textures[object.charge], object.position.x, canvas.height - object.position.y);
      }
    }
  },
  drawMultiple(objects, mid = false) {
    utils.debug('Drawing multiple objects');
    objects.forEach(object => {
      this.draw(object, mid);
    });
  },
  drawVector(position, vector, color) {
    this.c.strokeStyle = color;
    this.c.lineWidth = 2;
    let dx = position.x + vector.x * 10
    let dy = canvas.height - position.y - vector.y * 10
    this.c.beginPath();
    this.c.moveTo(position.x, canvas.height - position.y);
    this.c.lineTo(dx, dy);
    this.c.stroke();
    this.c.font = "15px Arial";
    let speed = vector.magnitude().toString()
    this.c.fillText(speed.slice(0, speed.indexOf('.') + 2), dx, dy);
  },

  renderSim() {
    this.clear(); // Clear canvas
  
    this.drawMultiple(Sim.simObjects.connections); // Draw connections
    this.drawMultiple(Sim.simObjects.particles, true); // Draw particles
    this.drawMultiple(Sim.simObjects.platforms); // Draw platforms

    if (Sim.data.showVelocityVectors) { // If showVectors is enabled
      Sim.simObjects.particles.forEach(particle => {
        render.drawVector(particle.position, particle.velocity, '#00ff00'); // Display particle velocity vector as line
      });
    }

    if (Sim.data.showGravityVector && Sim.data.gravity) {
      Sim.simObjects.particles.forEach(particle => {
        render.drawVector(particle.position, Sim.gravityForce.multiply(100), '#0000ff'); // Display particle gravity vector as line
      });
    }

    // Sim.simObjects.particles.forEach(particle => { // Draw particle outlines
    //   if (particle.selected) {
    //     this.drawOutline(particle)
    //   }
    // });
  },
  drawCircle(position, radius, color) {
    this.c.beginPath();
    this.c.arc(position.x, canvas.height - position.y, radius, 0, 2 * Math.PI);
    this.c.fillStyle = color;
    this.c.fill();
  },
  drawOutline(object) {
    this.c.strokeStyle = '#ff0000';
    this.c.lineWidth = 3;
    if (object.type == 'particle') {
      let x = object.position.x - object.width / 2;
      let y = canvas.height - object.position.y - object.height / 2;
      this.c.beginPath();
      this.c.rect(x, y, object.width, object.height);
      this.c.stroke();
    }
  }
}