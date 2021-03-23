import { Nodo } from "../AST/Nodo";
import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Instruccion } from "./Instruccion";

export class IF implements Instruccion{
    condicion:Expresion
    sentencias:Nodo[]
    Nlinea:Number
    Ncolumna:Number
    constructor(condicion:Expresion,sentencias:Nodo[],linea:Number,columna:Number){
        this.condicion=condicion
        this.sentencias=sentencias
        this.Nlinea=linea
        this.Ncolumna=columna
    }
    ejecutar(e: Entorno): any {
        let cond=this.condicion.getValor(e)
        if(cond==null){
            return null
        }
        let t=this.condicion.getTipo(e)
        if(t!=null){
            if(t.isBoolean()&&cond){
                let nuevo:Entorno=new Entorno(e);
                for(let i=0;i<this.sentencias.length;i++){
                    let n=this.sentencias[i]
                    if (n as Instruccion) {
                        let result = (n as Instruccion).ejecutar(nuevo)
                    } else if (n as Expresion) {
                        let exp = (n as Expresion).getValor(nuevo)
                        if (exp != null) {
                            return exp
                        }
                    }
                }
            }
        }
        return null;
    }
    linea(): Number {
        throw new Error("Method not implemented.");
    }
    columna(): Number {
        throw new Error("Method not implemented.");
    }

}