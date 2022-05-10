import Vector from "../vector.js";
export default function gravity(objects, gravity) {
  objects.particles.forEach(particle => {
    particle.velocity = Vector.add(particle.velocity, gravity) // Apply gravity to all particles
  });
}