import render from './render.js';
import Sim from '../sim/sim.js';
import utils from './utils.js';

export const drag = {
  init(canvas) {
    canvas.addEventListener("mousemove", (event) => {
      
      if (Sim.running) { // We dont want to drag particles when simulation is running
        return;
      }

      const mousePosition = utils.mousePosition(canvas, event);

      // Detect if left mouse button is pressed
      if (event.which == 1) {

        Sim.simObjects.particles.forEach(particle => { // Repeat for each particle
          let particlePosition = particle.position; // Put particle position to variable
          if (utils.calcDistance(particlePosition, mousePosition) < particle.width) { // If mouse is on particle
            particle.position = mousePosition; // Set particle position to mouse position
          }
        });
        Sim.simObjects.platforms.forEach(platform => { // Repeat for each platform
          // Detect if mousePosition is at one of the points that define the platform
          if (utils.calcDistance(platform.position.point1, mousePosition) < 30) {
            platform.position.point1 = mousePosition;
          } else if (utils.calcDistance(platform.position.point2, mousePosition) < 30) {
            platform.position.point2 = mousePosition;
          }
        });
        Sim.simObjects.connections.forEach(connetion => { // Repeat for each connection
          // Detect if mousePosition is at one of the points that define the connection
          if (utils.calcDistance(connetion.position.point1, mousePosition) < 30) {
            connetion.position.point1 = mousePosition;
          } else if (utils.calcDistance(connetion.position.point2, mousePosition) < 30) {
            connetion.position.point2 = mousePosition;
          }
        });
      }
      Sim.simObjects.connections.forEach(connection => { // Update connections
        connection.update();
      });
      
      render.renderSim(); // Render simulation
    })
  }
}