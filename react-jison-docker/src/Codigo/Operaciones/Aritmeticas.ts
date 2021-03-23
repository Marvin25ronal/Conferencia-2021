import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Literal } from "../Expresion/Literal";
import { TipoExp, Tipo } from "../Expresion/TipoExp";
import { Operacion, Operador } from "./Operacion";
import { Suma } from "./Suma";

export class Aritmeticas extends Operacion {
    public max(a: TipoExp, b: TipoExp): TipoExp |null {
        return this.tipoDominante(a,b)
    }

    Nlinea: Number
    Ncolumna: Number
    constructor(op1: Expresion, op2: Expresion, op: Operador, linea: Number, columna: Number) {
        super(op1, op2, op)
        this.Nlinea = linea
        this.Ncolumna = columna
    }
    private tipoDominante(t1:TipoExp,t2:TipoExp):TipoExp | null{
        if(t1==null||t2==null){
            return null
        }
        if(t1.isString()||t2.isString())
            return new TipoExp(Tipo.STRING)
        else if(t1.isDouble()||t2.isDouble())
            return new TipoExp(Tipo.DOUBLE)
        else if (t1.isInt()||t2.isInt())
            return new TipoExp(Tipo.INTEGER)
        return null
    }

    public getValor(e:Entorno):any{
        var r=this.val(e);
        if(r as Literal){
            return ((r as Literal).getValor(e));
        }
        return r
    }
    private val(e:Entorno):any{
        if (this.op1==null||this.op2==null){
            return null
        }
        switch (this.op) {
            case Operador.SUMA:
                return new Suma(this.op1,this.op2,this.op,this.Nlinea,this.Ncolumna).ejecturar(e)
        }
        return null
    }
    
    
}