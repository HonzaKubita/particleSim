export default function solveWallCollisions(particles, enviroment, velocityLoose) {
  velocityLoose = (100 - velocityLoose) / 100; // Convert % to decimal. example: (60% loose = 40% keep => velocity = newVelocity * 0.4)
  particles.forEach(particle => { // Repeat for each particle
    if(particle.position.x - particle.width / 2 < 0) { // If particle is below the ground
      particle.velocity.x = Math.abs(particle.velocity.x) * velocityLoose; // Add positive y velocity to the particle and multiply it by the velocity loose
    } 
    else if (particle.position.x + particle.width / 2 > enviroment.width) { // If particle is above the ground
      particle.velocity.x = -(Math.abs(particle.velocity.x) * velocityLoose);  // Add negative y velocity to the particle and multiply it by the velocity loose
    }
    if(particle.position.y - particle.height / 2 < 0) { // If particle is behind left wall
      particle.velocity.y = Math.abs(particle.velocity.y) * velocityLoose; // Add positive x velocity to the particle and multiply it by the velocity loose
    }
    else if(particle.position.y + particle.height / 2 > enviroment.height) { // If particle is behind right wall
      particle.velocity.y = -(Math.abs(particle.velocity.y) * velocityLoose); // Add negative x velocity to the particle and multiply it by the velocity loose
    }
  });
}