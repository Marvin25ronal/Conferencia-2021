import React, { Component } from 'react'
import AceEditor from 'react-ace'


import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-vibrant_ink"
import "ace-builds/src-noconflict/mode-velocity"
import 'animate.css/animate.min.css'
export class editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tipo: this.props.tipo
        }
    }
    texto() {
        const texto = this.props.texto
        return texto
    }
    onChange = (props) => {
        if (this.props.tipo == 'editor') {
            let setEditor=this.props.setEditor
            setEditor(props)
        }
    }
    render() {
        return (
            <div className="box ">
                <AceEditor className=""
                    mode={this.props.mode}
                    theme={this.props.theme}
                    nLoad={this.onLoad}
                    onChange={this.onChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.texto()}
                    width="auto"

                ></AceEditor>
            </div>
        )

    }
}
export default editor

