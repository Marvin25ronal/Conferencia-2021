import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
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
        var val = this.toprint.getValor(e)
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