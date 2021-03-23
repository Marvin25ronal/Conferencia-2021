import { Nodo } from "./Nodo"
import { Entorno } from "../Entorno/Entorno"
import { VarGlobal } from "../Globales/VarGlobal"
import { Instruccion } from "../Instruccion/Instruccion"
import { Expresion } from "../Expresion/Expresion"
export class AST {
    acciones: Nodo[]
    constructor(acciones: Nodo[]) {
        this.acciones = acciones
    }
    Ejecutar() {
        let global=new Entorno(null)
        VarGlobal.getInstance().cadena = ""
        VarGlobal.getInstance().concatenar("SALIDA--------------\n")
        for (let i = 0; i < this.acciones.length; i++) {
            let n=this.acciones[i]
            if(n as Instruccion){
                let result=(n as Instruccion).ejecutar(global)
            }else if (n as Expresion){
                let exp=(n as Expresion).getValor(global)
            }
        }
    }
}

