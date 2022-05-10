import utils from './modules/utils.js'; // Module to control global application functionality (logging to console etc.)
import settings from './modules/settings.js'; // It does what it says
import controller from './modules/controller.js'; // It does what it says
import render from './modules/render.js'; // Module used for redering
import textures from './modules/textures.js'; // Module for texture loading
import { drag } from './modules/drag.js'; // Module for dragging particles before simulation
import { selector } from './modules/selector.js'; // Module for selecting objects in simulation
import dataModifier from './modules/dataModifier.js';

const mode = 'test'; // enables displaying debug logs to console when set to 'dev'

utils.init(mode); // Make sure app started successfully

textures.init(); // Initialize textures

settings.init(); // Initialize settings

controller.init(); // Initialize controller

render.mount('canvas'); // Mount canvas to rendering module

render.clear(); // Clear canvas

drag.init(render.canvas); // Initialize drag module on canvas which is mounted to rendering module

selector.init(canvas); // Initialize selector module on canvas which is mounted to rendering module

dataModifier.init(); // Initialize dataModifier module