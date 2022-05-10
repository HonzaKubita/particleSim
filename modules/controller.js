import simMenu from './menus/simMenu.js';
import particleMenu from './menus/particleMenu.js';
import platformMenu from './menus/platformMenu.js';
import connectionMenu from './menus/connectionMenu.js';

const init = () => {
  simMenu();
  particleMenu();
  platformMenu();
  connectionMenu();
}

export default {
  init,
}