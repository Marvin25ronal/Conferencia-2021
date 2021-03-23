import { TipoExp } from "../Expresion/TipoExp";

export  class Simbolo {
    public valor:any
    public tipo: TipoExp|null
    id: string
    public linea: Number
    public columna: Number
    constructor(valor:any,tipo:TipoExp|null,id:string,linea:Number,columna:Number){
        this.tipo=tipo
        this.id=id
        this.linea=linea
        this.columna=columna
        this.valor=valor
    }
    public getTipo():TipoExp|null{
        return this.tipo
    }
    public setTipo(tipo:TipoExp){
        this.tipo=tipo
    }
    public getId():string{
        return this.id
    }


}