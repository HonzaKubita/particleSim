import Sim from '../sim/sim.js';

// Main settings object
export default {
  button: document.getElementById('settingsBtn'),
  settingsDiv: document.getElementById('settings'),

  settingsDivContent: document.getElementsByName('settingsModifier'),

  init() {
    // Event listeners for settings button
    this.button.addEventListener('click', () => {
      if (this.button.innerHTML == 'Settings') {
        this.button.innerHTML = 'Close';
        this.settingsDiv.classList.add('settings-show');
      } else {
        this.button.innerHTML = 'Settings';
        this.settingsDiv.classList.remove('settings-show');
      }
    })

    this.add('Slowmotion', 'slowmotion', 'checkbox');
    this.add('Show velocity vectors', 'showVelocityVectors', 'checkbox');
    this.add('Infinite velocity', 'infiniteVelocity', 'checkbox');
    this.add('Electromagnetic force', 'electromagneticForce' , 'checkbox');
    this.add('Show electromagnetic force vector', 'electromagneticForceVector', 'checkbox');
    this.add('Gravity', 'gravity', 'checkbox');
    this.add('Gravity strength', 'gravityStrength', 'number');
    this.add('Show gravity vector', 'showGravityVector', 'checkbox');
    this.add('Particle collisions', 'particleCollisions', 'checkbox');
    this.add('Platform collision', 'platformCollisions', 'checkbox');

    Sim.data = this.getData();
  },
  add(text, name, type) {
    let div = document.createElement('div');

    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', 'settingsModifier');
    input.setAttribute('id', name);

    let label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML = text;

    div.appendChild(input);
    div.appendChild(label);

    this.settingsDiv.appendChild(div);
  },
  getData() {
    let data = {};
    
    this.settingsDivContent.forEach(element => {
      if (element.type == 'checkbox') {
        data[element.id] = element.checked;
      } else if (element.type == 'number') {
        data[element.id] = Number(element.value);
      }
    })
    return data;
  },
  disable() {
    this.settingsDivContent.forEach(element => {
      element.disabled = true;
    })
  },
  enable() {
    this.settingsDivContent.forEach(element => {
      element.disabled = false;
    })
  }
}