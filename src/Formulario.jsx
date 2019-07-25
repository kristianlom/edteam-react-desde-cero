import React, { Component } from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            email: "",
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarEMail = this.cambiarEMail.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarEMail(e) {
        this.setState({
            email: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }
    render() {

        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4> Fecha actual : {Math.ceil(this.state.fecha / 1000)}</h4>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input
                                id="nombre"
                                type="text"
                                onChange={this.cambiarNombre} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                id="email"
                                type="email"
                                onChange={this.cambiarEMail} />
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

    componentDidMount() {
        let elemento = document.getElementById("elemento")
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
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



export default Formulario