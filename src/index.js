import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const root = document.getElementById("root");
//const elemento = React.createElement(componente, propiedades, hijos);
const elemento = React.createElement("H1", {className: "saludo"}, "Hola Mundo");

ReactDOM.render(elemento, root);
