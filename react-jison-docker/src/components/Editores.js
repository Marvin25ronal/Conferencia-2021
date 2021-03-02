import Editor from './editor'
import Button from './button'
import 'animate.css/animate.min.css'
import React, { Component } from 'react'




export class Editores extends Component {
    state = {
        consola: 'Salida-----',
        editor: `print("Hola mundo")`
    }
    setconsola=(consola)=>{
        this.setState({consola:consola,editor:this.state.editor})
    }
    
    render() {
        const { consola, editor } = this.state
        return (
            <div className=" container mt-4 animate__animated animate__fadeInUp">
                <div className="columns">
                    <div className="column is-three-quarteers">
                        <Editor theme="cobalt" mode="golang" tipo='editor' texto={editor}/>
                    </div>
                    <div className="column is-three-quarteers">
                        <Editor theme="vibrant_ink" mode="velocity" texto={consola} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-2">
                        <Button texto="Analizar" consola={consola} editor={editor} setconsola={this.setconsola}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editores
