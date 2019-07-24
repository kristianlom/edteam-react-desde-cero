import React, { Component } from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="form__item">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input id="nombre" type="text" />
                    </div>
                    <div className="form__item">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input id="email" type="email" />
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario