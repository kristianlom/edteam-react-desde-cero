import React, {Component} from "react"

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            date: new Date()
        };
        this.changeName = this.changeName.bind(this);
        this.changeEMail = this.changeEMail.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeEMail(e) {
        this.setState({
            email: e.target.value
        })
    }

    changeDate() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4> Fecha actual : {Math.ceil(this.state.date / 1000)}</h4>
                <form id="element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                id="name"
                                type="text"
                                onChange={this.changeName}/>
                        </div>
                        <div className="form__item">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                id="email"
                                type="email"
                                onChange={this.changeEMail}/>
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.intervaloFecha = setInterval(() => {
            this.changeDate();
            console.log(new Date())
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState)
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
}

export default Form