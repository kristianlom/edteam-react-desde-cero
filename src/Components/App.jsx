import React from 'react'
import "../styles/styles.scss"
import Form from "./Pages/Form"
import Courses from './Pages/Courses'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./Pages/Course"
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from "../Components/Pages/Home";
import Users from "./Pages/Users";

const App = () => (
    <Router>
        <MainMenu/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/courses/:id" component={Course}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/history/:value" component={History}/>
            <Route path="/history" component={History}/>
            <Route path="/users" component={Users}/>
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
