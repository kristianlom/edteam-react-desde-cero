import React, {Component} from "react"
import axios from "axios"

class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCourse: {}
        }
    }

    componentDidMount() {
        axios.get(`http://my-json-server.typicode.com/kristianlom/edteam-json-db/courses/${this.props.match.params.id}`)
            .then(resp => this.setState(
                {
                    currentCourse: resp.data
                }
            ))
    }

    render() {
        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.currentCourse ?
                        (<>
                            <h1 className="m-cols-3">{this.state.currentCourse.title}</h1>
                            <img className="m-cols-1" src={this.state.currentCourse.image} alt={this.state.currentCourse.title}/>
                            <p className="m-cols-2">Profesor : {this.state.currentCourse.professor}</p>
                        </>)
                        : <h1>El curso no existe</h1>
                }
            </div>
        )
    }
}

export default Course
