import Vector from "../../vector.js";
import utils from "../../../modules/utils.js";
export default function rubber(connection) {
  let distance = utils.calcDistance(connection.position.point1, connection.position.point2);
  if (distance < connection.length) {
    // Connection is too short, so we need to lengthen it
    let forceVector = Vector.fromPositions(connection.position.point1, connection.position.point2);
    forceVector = forceVector.normalize();
    forceVector = forceVector.multiply(distance);
    forceVector = forceVector.divide(connection.length);
    if (!connection.connectedTo.point1.fixed) {
      connection.connectedTo.point1.velocity = Vector.subtract(connection.connectedTo.point1.velocity, forceVector);
    }
    if (!connection.connectedTo.point2.fixed) {
      connection.connectedTo.point2.velocity = Vector.add(connection.connectedTo.point2.velocity, forceVector);
    }
  }
}