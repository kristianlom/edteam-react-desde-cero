import React from 'react';
import "./styles/styles.scss";
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => (
    <Router>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos" exact component={CourseGrid} />
        <Route path="/formulario" exact component={() => <Formulario name="Página de contacto" />} />
        <Route component={()=> (
            <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Página no encontrada</span>
            </div>
        )}/>
    </Router>
)

export default App;
