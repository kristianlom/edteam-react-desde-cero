import React from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const cursos = [
    {
        "title": "React desde Cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "price": 40,
        "profesor": "Kristian Lopez"
    },
    {
        "title": "Drupal desde Cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
        "price": 30,
        "profesor": "Beto Quiroga"
    },
    {
        "title": "Go desde Cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
        "price": 50,
        "profesor": "Alexys Lozada"
    },
    {
        "title": "HTML desde Cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/pwa-poster_1.png?itok=CmNPn3bq",
        "price": 10,
        "profesor": "Alvaro Felipe"
    },
]

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
            {
                cursos.map(curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
            }
        </div>
    </>
)

export default App;
