import Sim from '../../sim/sim.js';
import utils from '../../modules/utils.js';
import Particle from '../../sim/particle.js';

export default function particleMenu() {
  let particleSelect = document.getElementById('particleType');
  let addParticle = document.getElementById('addParticle');
  let removeParticle = document.getElementById('removeParticle');

  addParticle.addEventListener('click', () => {
    let particleType = particleSelect.options[particleSelect.selectedIndex].value;
    if (particleType == 'negative') {
      utils.log('Added negatively charged particle');
      Sim.addObject(new Particle(50, 450, -25));
    } else if (particleType == 'positive') {
      utils.log('Added positively charged particle');
      Sim.addObject(new Particle(100, 450, 25));
    } else if (particleType == 'neutral') {
      utils.log('Added neutrally charged particle');
      Sim.addObject(new Particle(150, 450, 0));
    }
  })

  removeParticle.addEventListener('click', () => {
    let selectedParticle = Sim.simObjects.particles.filter(particle => particle.selected)[0];
    Sim.removeObject(selectedParticle);
    utils.log('Removed particle');
  });
}