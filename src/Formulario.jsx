import React, { Component } from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            email: ""
        }
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input
                                id="nombre"
                                type="text"
                                onChange={e => this.setState({
                                    nombre: e.target.value
                                })} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                id="email"
                                type="email"
                                onChange={e => this.setState({
                                    email: e.target.value
                                })} />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

}

export default Formulario