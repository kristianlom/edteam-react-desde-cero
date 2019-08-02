import {useEffect, useState} from "react"
import axios from "axios";

const useCourse = id => {

    const [course, setCourse] = useState({});

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/kristianlom/edteam-json-db/courses/${id}`)
            .then(resp => setCourse(
                resp.data
            ))
    }, []);

    return course
};
export default useCourse;