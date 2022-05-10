import Vector from "../../vector.js";
import utils from '../../../modules/utils.js';

export default function stick(connection) {
  
  //                    NON-WORKING COMPLICATED VERSION
  // let particleV1 = connection.connectedTo.point1.velocity;
  // let particleV2 = connection.connectedTo.point2.velocity;
  // let connectionVector = Vector.fromPositions(connection.position.point1, connection.position.point2);

  // let connectionSplit1 = connectionVector.multiply(Vector.dot(particleV1, connectionVector) / (connectionVector.magnitude() ** 2));
  // let connectionSplit2 = connectionVector.multiply(Vector.dot(particleV2, connectionVector) / (connectionVector.magnitude() ** 2));

  // let avarage = Vector.avarage(connectionSplit1, connectionSplit2);

  // let particle1Force = Vector.subtract(particleV1, connectionSplit1);
  // let particle2Force = Vector.subtract(particleV2, connectionSplit2);

  // connection.connectedTo.point1.velocity = Vector.add(particle1Force, avarage);
  // connection.connectedTo.point2.velocity = Vector.add(particle2Force, avarage);

}