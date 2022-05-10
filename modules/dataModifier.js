import Sim from '../sim/sim.js';
import render from './render.js';

const uneditable = ['type', 'width', 'height', 'radius' , 'selected', 'velocityBuffer'];
const dataModifierDiv = document.getElementById('objectData');
const objectType = document.getElementById('objectType');

const applyBtn = document.getElementById('applyData');

let newHTML = ''

// Main dataModifier object
export default {
  update() {

    dataModifierDiv.innerHTML = '';
    newHTML = '';

    objectType.innerHTML = 'Nothing selected';
    applyBtn.style.display = 'none';


    Sim.simObjects.particles.forEach(particle => {
      if (particle.selected) {
        objectType.innerHTML = 'Particle data:';
        applyBtn.style.display = 'block';
        for (const property in particle) {
          if (!uneditable.includes(property)) {
            generateDataModifier(particle, property);
          }
        }
      }
    });
    dataModifierDiv.innerHTML = newHTML;
  },
  init() {
    applyBtn.addEventListener('click', () => {
      applyData();
      render.renderSim();
    })
  }
}

function generateDataModifier(particle, property) {
  if (typeof particle[property] == 'boolean') {
    newHTML += `${property}: <input name="dataModifier" type="checkbox" id="${property}" ${particle[property] ? 'checked' : ''}><br>`;
  } 
  else if (typeof particle[property] == 'number') {
    newHTML += `${property}: <input name="dataModifier" type="number" id="${property}" value="${particle[property]}"><br>`;
  }
  else if (typeof particle[property] == 'string') {
    newHTML += `${property}: <input name="dataModifier" type="text" id="${property}" value="${particle[property]}"><br>`;
  } else if (typeof particle[property] == 'object') {
    newHTML += `<div name="dataModifier", id="${property}">${property}:<br>`;
    for (const subProperty in particle[property]) {
      generateDataModifier(particle[property], subProperty);  
    }
    newHTML += '</div>';
  }
}

function applyData() {
  let dataModifierE = document.getElementById('objectData').children
  let selectedParticle = Sim.simObjects.particles.filter(particle => particle.selected)[0];

  for (let i = 0; i < dataModifierE.length; i++) {
    modifyData(selectedParticle, dataModifierE[i]);
  }
}

function modifyData(object, element) {
  if (element.nodeName == 'INPUT') {
    if (element.type == 'checkbox') {
      object[element.id] = element.checked;
    } else if (element.type == 'number' || element.type == 'radio') {
      object[element.id] = Number(element.value);
    } else if (element.type == 'text' || element.type == 'select') {
      object[element.id] = element.value;
    }
  } else if (element.nodeName == 'DIV') {
    for (let i = 0; i < element.children.length; i++) {
      modifyData(object[element.id], element.children[i]);
    }
  }
}