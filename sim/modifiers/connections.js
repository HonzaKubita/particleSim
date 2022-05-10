import stick from './connections/stickConection.js';
import rubber from './connections/rubberConection.js';
import spring from './connections/springConection.js';

export default function connectionModifier(objects) {
  objects.connections.forEach(connection => {
    if (connection.connectionType == 'rubber') {
      rubber(connection);
    } else if (connection.connectionType == 'stick') {
      stick(connection);
    } else if (connection.connectionType == 'spring') {
      spring(connection);
    }
  })
}