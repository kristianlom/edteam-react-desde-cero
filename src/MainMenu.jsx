import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img src="https://ed.team/static/images/logo-premium.svg" alt="Logo" className="main-logo" />
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
                        <li><NavLink to="/courses" activeClassName="active">Cursos</NavLink></li>
                        <li><NavLink to="/form" activeClassName="active">Formulario</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"/>
            </div>
        </div>
    </header>
)

export default MainMenu