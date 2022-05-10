import Sim from '../../sim/sim.js';
import utils from '../../modules/utils.js';
import Platform from '../../sim/platform.js';

export default function platformMenu() {
  let platformSelect = document.getElementById('platformType');
  let addPlatform = document.getElementById('addPlatform');
  addPlatform.addEventListener('click', () => {
    let platformType = platformSelect.options[platformSelect.selectedIndex].value;
    if (platformType == 'bouncy') {
      utils.log('Added bouncy platform');
      Sim.addObject(new Platform(300, 350, 400, 350, 'bouncy'));
    } else if (platformType == 'stiff') {
      utils.log('Added stiff platform');
      Sim.addObject(new Platform(300, 250, 400, 250, 'stiff'));
    }
  });
}