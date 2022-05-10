
import Sim from '../sim/sim.js';
import utils from '../modules/utils.js'

// Main connection class
export default class Connection {
  type = 'connection';
  position = {
    point1: {x: 0, y: 0},
    point2: {x: 0, y: 0},
  }
  connectedTo = {
    point1: null,
    point2: null,
  }
  constructor(x, y, x2, y2, connectionType, length = 200) {
    this.position.point1.x = x;
    this.position.point1.y = y;
    this.position.point2.x = x2;
    this.position.point2.y = y2;
    this.connectionType = connectionType;
    this.length = length;
    if (connectionType == 'rubber') {
      this.color = '#2e2e2e';
    } else if (connectionType == 'stick') {
      this.color = '#693b00';
    } else if (connectionType == 'spring') {
      this.color = '#758275';
    } else {
      this.color = '#0000ff';
    }
  }
  update() {
    Sim.simObjects.particles.forEach(particle => {
      if (particle.position.x == this.position.point1.x && particle.position.y == this.position.point1.y) {
        this.connectedTo.point1 = particle;
      } else if (particle.position.x == this.position.point2.x && particle.position.y == this.position.point2.y) {
        this.connectedTo.point2 = particle;
      }
    });
    this.length = utils.calcDistance(this.position.point1, this.position.point2);
  }
}
