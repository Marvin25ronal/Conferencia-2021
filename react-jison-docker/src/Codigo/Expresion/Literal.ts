import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "./Expresion";
import { TipoExp } from "./TipoExp";

export class Literal implements Expresion {
    valor: Object
    tipo: TipoExp
    numberlinea: Number
    numbercolumna: Number
    constructor(valor: Object, tipo: TipoExp, linea: Number, columna: Number) {
        this.valor = valor
        this.tipo = tipo
        this.numberlinea = linea
        this.numbercolumna = columna
    }
    getValor(e: Entorno): any {
        return this.valor
    }
    getTipo(e: Entorno): TipoExp {
        return this.tipo
    }
    linea(): Number {
        return this.numberlinea
    }
    columna(): Number {
        return this.numbercolumna
    }
}