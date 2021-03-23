import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Literal } from "../Expresion/Literal";
import { TipoExp, Tipo } from "../Expresion/TipoExp";
import { Aritmeticas } from "./Aritmeticas";
import { Operador } from "./Operacion";

export class Suma extends Aritmeticas {
    constructor(op1: Expresion, op2: Expresion, op: Operador, linea: Number, columna: Number) {
        super(op1, op2, op, linea, columna);
    }
    public ejecturar(e: Entorno): any {
        let valor1: any = this.op1.getValor(e)
        let valor2: any = this.op2.getValor(e)
        let tipo1: TipoExp = this.op1.getTipo(e)
        let tipo2: TipoExp = this.op2.getTipo(e)
        let tipores = this.max(tipo1, tipo2)
        let tipofinal: TipoExp;
        if (tipores != null) {
            tipofinal = tipores as TipoExp
            switch (tipofinal.tipo) {
                case "STRING":
                    return new Literal(valor1.toString() + valor2.toString(), new TipoExp(Tipo.STRING), super.linea(), super.columna())
            }
        }
        return null;
    }
}