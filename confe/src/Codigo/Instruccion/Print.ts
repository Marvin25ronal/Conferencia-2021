import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Literal } from "../Expresion/Literal";
import { VarGlobal } from "../Globales/VarGlobal";
import { Instruccion } from "./Instruccion";

export class Print implements Instruccion {
    toprint: Expresion
    Nlinea: Number
    Ncolumna: Number
    constructor(toprint: Expresion, linea: Number, columna: Number) {
        this.toprint = toprint
        this.Nlinea = linea
        this.Ncolumna = columna
    }
    ejecutar(e: Entorno): any {
        //console.log(this.toprint)
        //console.log(e.tabla)
        var val = this.toprint.getValor(e)
        if(val==null){
            val="nulo"
        }
        console.log(val)
        if(val instanceof Literal){
            val=(val as Literal).getValor(e)
        }
        console.log("Entre")
        var cadena=`${val.toString()} \n`
        VarGlobal.getInstance().concatenar(cadena)
        return null;
    }
    linea(): Number {
        throw new Error("Method not implemented.");
    }
    columna(): Number {
        throw new Error("Method not implemented.");
    }

}