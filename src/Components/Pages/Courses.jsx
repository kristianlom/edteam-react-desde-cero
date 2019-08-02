import React, {useState} from "react"

const Course = ({match}) => {

    const [state, setState] = useState({
        currentCourse: {
            "id": 1,
            "title": "React desde cero",
            "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
            "price": 40,
            "professor": "Beto Quiroga"
        }
    });

    console.log(state);

    return (
        <div className="ed-grid m-grid-3"> {
            state.currentCourse
                ?
                (<>
                    <h1 className="m-cols-3">{state.currentCourse.title}</h1>
                    <img className="m-cols-1" src={state.currentCourse.image} alt={state.currentCourse.title}/>
                    <p className="m-cols-2">Profesor : {state.currentCourse.professor}</p>
                </>)
                :
                <h1>El curso no existe</h1>
        }
        </div>
    )
};

export default Course
