import React, {useEffect, useState} from "react"
import axios from "axios";

const Course = ({match}) => {

    const [course, setCourse] = useState({});
    const [comment, setComment] = useState("Sin comentarios");

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/kristianlom/edteam-json-db/courses/${match.params.id}`)
            .then(resp => setCourse(
                resp.data
            ))
    }, []);

    const myComment = e => {
        setComment(e.target.value)
    }

    return (
        <div className="ed-grid m-grid-3"> {
            course
                ?
                (<div className="ed-grid">
                    <div className="l-block">
                        <h1 className="m-cols-3">{course.title}</h1>
                        <img className="m-cols-1" src={course.image} alt={course.title}/>
                        <p className="m-cols-2">Profesor : {course.professor}</p>
                    </div>
                    <div className="ed-grid">
                        <h2>Escribe tu comentario</h2>
                        <input type="text" placeholder="Escribe ... " onChange={myComment.bind(this)}/>
                        <p>{comment}</p>
                    </div>
                </div>)
                :
                <h1>El curso no existe</h1>
        }
        </div>
    )
};

export default Course;
