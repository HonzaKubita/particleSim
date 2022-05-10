import Vector from '../../vector.js';

export default function solvePlatformCollisions(particles, platforms, velocityLoose) {
  velocityLoose = (100 - velocityLoose) / 100; // Convert % to decimal. example: (60% loose = 40% keep => velocity = newVelocity * 0.4)
  platforms.forEach(platform => {
    particles.forEach(particle => {
      if (doesLineInterceptCircle(platform, particle)) {
        solveCollision(platform, particle);
      }
    });
  });
}

function solveCollision(platform, particle) {
  // Response to collision between circle and line

  // Get platform rotation angle
  let platformRotation = platform.angle();
  
  // Fake horizontal vector
  let horizontal = new Vector(5, 0);

  // Get particle velocity angle
  let velocityAngle = particle.velocity.angle(horizontal);

  // Rotate the particle velocity 90 + platform rotation degrees
  let rotatedVelocity = rotate(particle.velocity, velocityAngle * 2 + platformRotation);

  particle.velocity = rotatedVelocity;
  
}

function rotate(velocity, angle) { // Vector rotation
  return new Vector(
    velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  )
}


// Function to check intercept of line seg and circle
    // A,B end points of line segment
    // C center of circle
    // radius of circle
    // returns true if touching or crossing else false   
function doesLineInterceptCircle(platform, particle) {

  let A = platform.position.point1;
  let B = platform.position.point2;

  let C = particle.position;

  let radius = particle.radius;

  var dist;
  const v1x = B.x - A.x;
  const v1y = B.y - A.y;
  const v2x = C.x - A.x;
  const v2y = C.y - A.y;
  // get the unit distance along the line of the closest point to
  // circle center
  const u = (v2x * v1x + v2y * v1y) / (v1y * v1y + v1x * v1x);
  
  
  // if the point is on the line segment get the distance squared
  // from that point to the circle center
  if(u >= 0 && u <= 1){
      dist  = (A.x + v1x * u - C.x) ** 2 + (A.y + v1y * u - C.y) ** 2;
  } else {
      // if closest point not on the line segment
      // use the unit distance to determine which end is closest
      // and get dist square to circle
      dist = u < 0 ?
            (A.x - C.x) ** 2 + (A.y - C.y) ** 2 :
            (B.x - C.x) ** 2 + (B.y - C.y) ** 2;
  }
  return dist < radius * radius;
}