import React from 'react';
import "./styles/styles.scss";
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="/cursos" component={CourseGrid} />
            <Route path="/cursos/:id" component={Course} />
            <Route path="/formulario" component={() => <Formulario name="Página de contacto" />} />
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )} />
        </Switch>
    </Router>
)

export default App;
