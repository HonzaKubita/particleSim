import Sim from '../../sim/sim.js';
import utils from '../../modules/utils.js';
import Connection from '../../sim/connection.js';

export default function connectionMenu() {
  let connectionSelect = document.getElementById('connectionType');
  let addConnection = document.getElementById('addConnection');
  addConnection.addEventListener('click', () => {
    let connectionType = connectionSelect.options[connectionSelect.selectedIndex].value;
    if (connectionType == 'rubber') {
      utils.log('Added rubber connection');
      Sim.addObject(new Connection(300, 150, 400, 150, 'rubber'));
    } else if (connectionType == 'rope') {
      utils.log('Added rope connection');
      Sim.addObject(new Connection(300, 100, 400, 100, 'rope'));
    } else if (connectionType == 'stick') {
      utils.log('Added stick connection');
      Sim.addObject(new Connection(300, 50, 400, 50, 'stick'));
    } else if (connectionType == 'spring') {
      utils.log('Added spring connection');
      Sim.addObject(new Connection(300, 25, 400, 15, 'spring'));
    }
  });
}