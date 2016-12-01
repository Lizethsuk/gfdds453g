import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <div class="list">
          <h3>Por hacer:</h3>
          <ul class="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
          </ul>
          <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
        </div>
      </div>
    )
  }
}

export default App;
