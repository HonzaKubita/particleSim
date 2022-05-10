import utils from '../../../modules/utils.js';
import Vector from '../../vector.js';

export default function solveParticleCollisions(particles) {
  particles.forEach(particle => { // We don't want to modify data we are currently working with
    particle.saveVelocityToBuffer();
  })

  particles.forEach(particle => {
    particles.forEach(otherParticle => {
      if (particle !== otherParticle) { 
        if (collision(particle, otherParticle)) {
          solveCollision(particle, otherParticle);
        }
      }
    })
  })
}

const collision = (particle, otherParticle) => { // Collision detection
  let distance = utils.calcDistance(particle.position, otherParticle.position);
  return (distance < (particle.width / 2 + otherParticle.width / 2))
}

// Respnse system V2

function rotate(velocity, angle) { // Vector rotation
  return new Vector(
    velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  )
}

function solveCollision(particle, otherParticle) { // Solve collision beetween two circle objects
  
  // First fix position of particles
  
  let distance = utils.calcDistance(particle.position, otherParticle.position);
  let difference = (particle.radius + otherParticle.radius) - distance;

  let angle = -Math.atan2(otherParticle.position.y - particle.position.y, otherParticle.position.x - particle.position.x); // We will reuse this var later in response
  
  particle.x += Math.cos(angle) * difference;
  particle.y += Math.sin(angle) * difference;

  // Now we can calculate the velocity of the particle


  let m1 = particle.mass;
  let m2 = otherParticle.mass;

  let u1 = rotate(particle.velocityBuffer, angle);
  let u2 = rotate(otherParticle.velocityBuffer, angle);

  let v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };

  particle.velocity = rotate(v1, -angle);
}

// Response system V1 - Trash

// export function solveParticleCollisions(particles) {
//   // Solve collisions between particles
//   particles.forEach(particle => {
//     particles.forEach(otherParticle => {
//       if (particle !== otherParticle) {
//         let distance = utils.calcDistance(particle.position, otherParticle.position);
//         if (distance < ((particle.width + otherParticle.width) / 2)) {
//           // Collision detected
//           let collisionVector = Vector.fromPositions(particle.position, otherParticle.position);
//           collisionVector = collisionVector.normalize();
//           particle.velocity = Vector.subtract(particle.velocity, collisionVector);
//         }
//       }
//     })
//   });
// }