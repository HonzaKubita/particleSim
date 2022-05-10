import Sim from '../sim/sim.js'
import utils from './utils.js'
import render from './render.js'
import dataModifier from './dataModifier.js'

export const selector = {
  init(canvas) {
    canvas.addEventListener('click', (event) => {

      if (Sim.running) { // We dont want to select objects when simulation is running
        return;
      }

      const mousePosition = utils.mousePosition(canvas, event);


      Sim.simObjects.particles.forEach(particle => {
        particle.selected = false;
        if (utils.calcDistance(particle.position, mousePosition) < particle.width) { // If mouse is on particle
          particle.selected = true;
        }
      })

      dataModifier.update();
      render.renderSim();
    });
  }
}