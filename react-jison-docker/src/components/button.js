import React, { Component } from 'react'

export class button extends Component {
    analizar=()=> {
        const editor=this.props.editor
        const setconsola=this.props.setconsola
        //logica
        setconsola(editor)
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
