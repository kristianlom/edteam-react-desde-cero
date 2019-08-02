import React, {useState} from "react"

const Course = ({match}) => {

    const [state, setState] = useState({
        id: 1,
        title: "React desde cero",
        image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        price: 40,
        professor: "Beto Quiroga"
    });

    const changeTitle = (text) => {
        setState({
                ...state,
                title: text
            }
        )
    }

    return (
        <div className="ed-grid m-grid-3"> {
            state
                ?
                (<>
                    <h1 className="m-cols-3">{state.title}</h1>
                    <img className="m-cols-1" src={state.image} alt={state.title}/>
                    <p className="m-cols-2">Profesor : {state.professor}</p>
                    <button onClick={changeTitle.bind(this, "Go desde cero")}>Cambiar titutlo</button>
                </>)
                :
                <h1>El curso no existe</h1>
        }
        </div>
    )
};

export default Course
