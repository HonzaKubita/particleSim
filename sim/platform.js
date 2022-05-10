export default class Platform {
  type = 'platform';
  position = { // Position in 2D space
    point1: {x: 0, y: 0},
    point2: {x: 0, y: 0}
  };
  angle() { // Function to calculate the angle of platform
    return Math.atan2(this.position.point2.y - this.position.point1.y, this.position.point2.x - this.position.point1.x);
  }
  constructor(x, y, x2, y2, platformType) {
    this.platformType = platformType;
    if (platformType == 'bouncy') {
      this.color = '#ff0000';
    } else if (platformType == 'stiff') {
      this.color = '#000000';
    }
    this.position.point1.x = x; // Position of the particle in 2D space (x, y)
    this.position.point1.y = y;
    this.position.point2.x = x2;
    this.position.point2.y = y2;
  }
}