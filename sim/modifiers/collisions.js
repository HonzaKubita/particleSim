import utils from '../../modules/utils.js';

import solveWallCollisions from './collisions/wallCollision.js';
import solvePlatformCollisions from './collisions/platformCollision.js';
import solveParticleCollisions from './collisions/particleCollision.js';

export default {
  solveWallCollisions,
  solvePlatformCollisions,
  solveParticleCollisions,
}