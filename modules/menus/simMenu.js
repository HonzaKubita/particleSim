import Sim from '../../sim/sim.js';
import utils from '../../modules/utils.js';
import settings from '../../modules/settings.js';
import dataModifier from '../dataModifier.js';

let startStopBtn = document.getElementById('startStopBtn');
let resetSimBtn = document.getElementById('resetBtn');

function startStop() {
  startStopBtn.addEventListener('click', () => {
    if (Sim.running) {
      startStopBtn.classList.remove('pause-button');
      startStopBtn.innerHTML = 'Resume';
      Sim.stop();
      settings.enable(); // After simulation is started, disable settings menu
    } else {
      startStopBtn.classList.add('pause-button');
      startStopBtn.innerHTML = 'Pause';
      Sim.start();
      settings.disable();
    }
    dataModifier.update();
  })
}

function resetSim() {
  resetSimBtn.addEventListener('click', () => {
    if (!Sim.running) {
      Sim.reset();
      startStopBtn.innerHTML = 'Start';
    }
  });
}

export default function simMenu() {
  startStop();
  resetSim();
}