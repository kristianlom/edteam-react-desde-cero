import React from 'react'
import "./styles/styles.scss"
import Banner from "./Banner"
import Form from "./Form"
import CourseGrid from './CourseGrid'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./Course"
import MainMenu from './MainMenu'
import History from './History'

const App = () => (
    <Router>
        <MainMenu/>
        <Switch>
            <Route path="/" exact component={Banner}/>
            <Route path="/courses/:id" component={Course}/>
            <Route path="/courses" component={CourseGrid}/>
            <Route path="/history/:value" component={History}/>
            <Route path="/history" component={History}/>
            <Route path="/form" component={() => <Form name="Página de contacto"/>}/>
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )}/>
        </Switch>
    </Router>
);

export default App;
