import { Entorno } from "../Entorno/Entorno";
import { Simbolo } from "../Entorno/Simbolo";
import { Expresion } from "../Expresion/Expresion";
import { Identificador } from "../Expresion/Identificador";
import { Instruccion } from "./Instruccion";

export class Declaracion implements Instruccion{
    Nlinea:Number
    Ncolumna:Number
    valor:Expresion
    id:Identificador

    constructor(valor:Expresion,id:Identificador,linea:Number,columna:Number){
        this.valor = valor
        this.Ncolumna=columna
        this.Nlinea=linea
        this.id=id
    }

    ejecutar(e: Entorno): any {
        let setvalor=this.valor.getValor(e)
        let tipo=this.valor.getTipo(e)
        if(!e.ExisteEntorno(this.id.getId())){
            let nuevo=new Simbolo(setvalor,tipo,this.id.getId(),this.Nlinea,this.Ncolumna)
            e.tabla.set(this.id.getId(),nuevo)
        }
    }
    linea(): Number {
        throw new Error("Method not implemented.");
    }
    columna(): Number {
        throw new Error("Method not implemented.");
    }

}