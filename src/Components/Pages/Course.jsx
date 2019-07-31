import React from "react"

const courses = [
    {
        "id": 1,
        "title": "React desde cero",
        "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "price": 40,
        "professor": "Beto Quiroga"
    },
    {
        "id": 2,
        "title": "Drupal desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/drupal-poster-720_3.jpg?itok=e93ErhMN",
        "price": 30,
        "professor": "Beto Quiroga"
    },
    {
        "id": 3,
        "title": "Go desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/go_0.jpg?itok=k2amLhrN",
        "price": 50,
        "professor": "Alexys Lozada"
    },
    {
        "id": 4,
        "title": "HTML desde cero",
        "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/HTML-2018.jpg?itok=Gyvm-W9t",
        "price": 10,
        "professor": "Alvaro Felipe"
    },
];

const Course = ({match}) => {

    const currentCourse = courses.filter(c => c.id === parseInt(match.params.id))[0];

    return (
        <div className="ed-grid m-grid-3"> {
            currentCourse
                ?
                (<>
                    <h1 className="m-cols-3">{currentCourse.title}</h1>
                    <img className="m-cols-1" src={currentCourse.image} alt={currentCourse.title}/>
                    <p className="m-cols-2">Profesor : {currentCourse.professor}</p>
                </>)
                :
                <h1>El curso no existe</h1>
        }
        </div>
    )
};

export default Course
