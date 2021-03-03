# Conferencia para el curso de compiladores 1
## React

Para iniciar creamos el proyecto de react
```bash
npx create-react-app react-jison-docker 
```
esperamos unos minutos para que termine de configurar el servidor


para correr el servidor es con 

```bash
npm start
```
* Crear Carpeta components dentro de src
* Borrar codigo innecesario
* Crear componentes rfce | rce |     
* [TOP FRAMEWORKS CSS](https://athemes.com/collections/best-css-frameworks/)
* instalar bulma
* [Ir a la pagina de bulma](https://bulma.io/)
* En los node modules buscar bulma
* carpeta dist/css
* Creamos la carpeta components
* Agregamos un componente navbar
* [Para convertir el codigo HTML a react](https://magic.reactjs.net/htmltojsx.htm)
* Convertimos el codigo de bulma
* Borrar los que no nos interesan
* Agregar la carpeta assets
* agregar la imagen
```javascript
import img1 from '../assets/img1.png'
src={img1}
```
### Fondo
Para agregar un fondo de color a nuestra aplicacion tenemos que modificar el div de nuestro app y hacer uso del archivo app.css
importamos el css
Para el fondo
[Gradiente](https://cssgradient.io/)
```css
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,73,112,1) 26%, rgba(20,224,240,1) 65%, rgba(223,255,251,1) 90%);
```


```javascript
import './App.css'
```

### Animacion -- EXTRA
Para agregar la animacion
[Animacion](https://animate.style/)


```bash
npm install animate.css

```

USO:
```javascript
//Archivo a utilizar
import 'animate.css/animate.min.css'
//Pegar en el codigo
animate__animated   animate__bounce
```




### Editor de texto
Para mostrar un editor de texto hacemos uso de Ace Editor para react
[Link para ACE EDITOR](https://github.com/securingsincity/react-ace)
```bash
npm install react-ace ace-builds
```
Para consultar los tipos de editor se puede utilizar el siguiente link


[Demo](https://securingsincity.github.io/react-ace/)


[Themas](https://ace.c9.io/build/kitchen-sink.html)
Para agregar los temas y modos
```javascript
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
```
* Crear un archivo llamado Editor 
* Crear un archivo Editores 

```javascript

import React from 'react'
import Editor from './editor'

function Editores() {
    return (
        <div className="box container mt-4">
            <div className="columns">
                <div className= "column is-three-quarteers">
                    <Editor />
                </div>
                <div className= "column is-three-quarteers">
                    <Editor />
                </div>
            </div>
        </div>
    )
}

export default Editores


//Editor
import React, { Component } from 'react'
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-cobalt";
export class editor extends Component {
    render() {
        return (
            <div className="box">
                <AceEditor className=""
                    mode="golang"
                    theme="cobalt"
                    nLoad={this.onLoad}
                    onChange={this.onChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    width="auto"
                ></AceEditor>
            </div>
        )
    }
}

export default editor
```


### Comunicacion entre componentes REACT-CONTEXT

Para esta parte usamos react context entre los editores y la consola
se pasan los valores por el state de la clase editores

```javascript
 state = {
        consola: 'Salida-----',
        editor: `print("Hola mundo")`
    }
    setconsola=(consola)=>{
        this.setState({consola:consola,editor:this.state.editor})
    }
```

## Jison
En la carpeta analizador agregamos el archivo para crear la sintaxys.jison

vamos a utilizar el patron interprete por lo cual es mejor tener typescript para el uso de clases
```bash
npm install typescript awesome-typescript-loader
```

Para compilar todo nuestro codigo ctrl+shift+B y seleccionamos tsc:build

Archivo de configuracion
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true,
        "watch": true,
        "outDir": "build",
        "allowJs": true
    },
    "exclude": [
        "build",
        "node_modules"
    ],
    "include": [
        "./**/*"
    ]
}
```

