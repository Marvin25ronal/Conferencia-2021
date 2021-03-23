import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { TipoExp } from "../Expresion/TipoExp";

export abstract class Operacion implements Expresion {
    op1: Expresion
    op2: Expresion
    op: Operador
    constructor(op1: Expresion, op2: Expresion, op: Operador) {
        this.op1 = op1;
        this.op2 = op2;
        this.op = op;
    }
    getValor(e: Entorno) {
        throw new Error("Method not implemented.");
    }
    getTipo(e: Entorno): TipoExp|null {
        throw new Error("Method not implemented.");
    }
    linea(): Number {
        throw new Error("Method not implemented.");
    }
    columna(): Number {
        throw new Error("Method not implemented.");
    }
    //abstract max(a: TipoExp, b: TipoExp): TipoExp
    public abstract max(a:TipoExp|null, b:TipoExp|null):TipoExp|null

}

export enum Operador {
    SUMA="+",
    RESTA="-", 
    DIVISION="/",
    MULTIPLICACION="*", 
    OR="||", 
    AND="&&", 
    NOT="!", 
    MAYOR=">", 
    MENOR="<"
}