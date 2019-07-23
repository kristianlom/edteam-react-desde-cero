import React from 'react';
import "./styles/styles.scss";

const App = () => (
  <>
    <div className="saludo">
      <h1>Hola Mundo</h1>
      <p>Hola, saludando desde mi componente.</p>
    </div>
    <div>
      <img src="https://ed-grid.com/assets/img/EDgrid-logo.svg"></img>
    </div>
  </>
)

export default App;


// Reglas JSX
// 1: Toda etiqueta debe cerrarse.
// 2: Los componentes deben devolver un solo elemento padre.
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra.
// 6: class => className.
// 7: for => htmlFor
// NO if, else, while