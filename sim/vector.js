export default class Vector { // 100% Generated by Github copilot (AI)
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  clear() {
    this.x = 0;
    this.y = 0;
  }
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }
  divide(scalar) {
    return new Vector(this.x / scalar, this.y / scalar);
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    return this.divide(this.magnitude());
  }
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  angle(vector) {
    return Math.acos(this.dot(vector) / (this.magnitude() * vector.magnitude()));
  }
  avarage(vector) {
    return new Vector((this.x + vector.x) / 2, (this.y + vector.y) / 2);
  }
  static clear(vector) {
    return vector.clear()
  }
  static add(vector1, vector2) {
    return vector1.add(vector2);
  }
  static subtract(vector1, vector2) {
    return vector1.subtract(vector2);
  }
  static multiply(vector, scalar) {
    return vector.multiply(scalar);
  }
  static divide(vector, scalar) {
    return vector.divide(scalar);
  }
  static magnitude(vector) {
    return vector.magnitude();
  }
  static normalize(vector) {
    return vector.normalize();
  }
  static dot(vector1, vector2) {
    return vector1.dot(vector2);
  }
  static angle(vector1, vector2) {
    return vector1.angle(vector2);
  }
  static fromPositions(pos1, pos2) {
    return new Vector(pos2.x - pos1.x, pos2.y - pos1.y);
  }
  static avarage(vector1, vector2) {
    return vector1.avarage(vector2);
  }
}