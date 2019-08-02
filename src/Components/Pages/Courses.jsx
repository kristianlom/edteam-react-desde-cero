import React, {useEffect, useState} from "react"
import axios from "axios";

const Course = ({match}) => {

    const [state, setState] = useState({});

    useEffect(() => {
        console.log("Hola");
        axios.get(`http://my-json-server.typicode.com/kristianlom/edteam-json-db/courses/4`)
            .then(resp => setState(
                resp.data
            ))
    }, []);

    return (
        <div className="ed-grid m-grid-3"> {
            state
                ?
                (<>
                    <h1 className="m-cols-3">{state.title}</h1>
                    <img className="m-cols-1" src={state.image} alt={state.title}/>
                    <p className="m-cols-2">Profesor : {state.professor}</p>
                </>)
                :
                <h1>El curso no existe</h1>
        }
        </div>
    )
};

export default Course
