import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { TipoExp, Tipo } from "../Expresion/TipoExp";
import { Operacion, Operador } from "./Operacion";

export class Aritmeticas extends Operacion {

    Nlinea: Number
    Ncolumna: Number
    constructor(op1: Expresion, op2: Expresion, op: Operador, linea: Number, columna: Number) {
        super(op1, op2, op)
        this.Nlinea = linea
        this.Ncolumna = columna
    }
    getValor(e: Entorno) {
        switch(this.op){
            case Operador.SUMA:
                
        }
    }
    
}