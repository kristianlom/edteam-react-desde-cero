import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const App = () => (
    <>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img alt="Banner" className="main-banner__img" src="https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Curso de EDTeam</p>
                        <p> Tu futuro te está esperando</p>
                        <a href="https://ed.team" className="button">Suscribirse</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            <Curso
                title="React desde cero"
                image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png"
                price="20 USD"
                profesor="Primer Maestro"
            />
            <Curso
                title="Google Ads"
                image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Google%20ads%20desde%20cero.png"
                price="30 USD"
                profesor="Segundo Maestro"
            />
            <Curso
                title="React desde cero 3"
                image="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png"
                price="40 USD"
                profesor="Tercer Maestro"
            />
        </div>
    </>
)

export default App;
