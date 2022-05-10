import render from './render.js'

let mode = 'default';
let clearBtn = document.getElementById('clearConsole');
let consoleDiv = document.getElementById('output');

clearBtn.addEventListener('click', () => { // Function for clearing the console
  consoleDiv.innerHTML = '';
});

const init = (runmode) => {
  // Check if the program inited correctly and set the mode
  mode = runmode;
  consoleDiv.innerHTML = '=-> App started successfully <br />';
  scrollDown();
};


const debug = (message) => { // Function for displaying debug logs to console dev mode only
  if (mode == 'dev') {
    consoleDiv.innerHTML += `=?> ${message} <br />`;
    scrollDown();
  }
};

const log = (message) => { // Function for logging to console in all modes
  consoleDiv.innerHTML += `=-> ${message} <br />`;
  scrollDown();
};

const scrollDown = () => { // Function for auto scrolling down the console
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

const calcDistance = (particle1, particle2) => {
  return Math.sqrt(Math.pow(particle1.x - particle2.x, 2) + Math.pow(particle1.y - particle2.y, 2));
}

const mousePosition = (canvas, event) => {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

  return {
    x: (event.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: render.canvas.height - ((event.clientY - rect.top) * scaleY)     // been adjusted to be relative to element
  }
}

const delay = async (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default {
  init,
  debug,
  log,
  calcDistance,
  mousePosition,
  delay,
}