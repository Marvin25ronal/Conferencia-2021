import React, { Component } from 'react'
import {Analizador} from '../Codigo/build/Analizador/Analizador'
export class button extends Component {
    analizar=()=> {
        const editor=this.props.editor
        const setconsola=this.props.setconsola
        let analizador=new Analizador();
        let res=analizador.Interpretar(editor)
        //logica
        setconsola(res)
    }
    render() {
        return (
            <div className="container box mb-4">
                <div className="buttons" >
                    <button className="button is-info is-medium is-fullwidth" onClick={this.analizar}>{this.props.texto}</button>
                </div>
            </div>
        )
    }
}

export default button
