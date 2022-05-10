import Vector from "../vector.js";
import utils from "../../modules/utils.js";
import render from "../../modules/render.js";

export default function electromagneticForce(objects) {
  objects.particles.forEach(particle => {
    objects.particles.forEach(otherParticle => {
      if (particle !== otherParticle && particle.charge != 0 && otherParticle.charge != 0) { // Calculate only for particles with charge
        let distance = utils.calcDistance(particle.position, otherParticle.position);
        let forceVector = Vector.fromPositions(particle.position, otherParticle.position);
        forceVector = forceVector.normalize();
        forceVector = forceVector.multiply((Math.abs(particle.charge) * Math.abs(otherParticle.charge)));
        forceVector = forceVector.divide(distance ** 2);
        if ((particle.charge * otherParticle.charge) < 0) { // If the paricles heve same chrage
          // Particles have different charges so they attract each other
          particle.velocity = Vector.add(particle.velocity, forceVector);
          render.drawVector(particle.position, forceVector.multiply(100), "red");
        } else {
          // Particles have the same charge so they repel each other
          particle.velocity = Vector.subtract(particle.velocity, forceVector);
          render.drawVector(particle.position, forceVector.multiply(100), "red");
        }
      }
    });
  });
}
