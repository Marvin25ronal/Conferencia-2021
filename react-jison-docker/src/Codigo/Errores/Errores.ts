export class Errores {
    private tipo:TipoError
    private mensaje:String
    private linea:Number
    private columna:Number

    public getTipo(): TipoError {
        return this.tipo;
    }

    public setTipo(tipo: TipoError): void {
        this.tipo = tipo;
    }

    public getMensaje(): String {
        return this.mensaje;
    }

    public setMensaje(mensaje: String): void {
        this.mensaje = mensaje;
    }

    public getLinea(): Number {
        return this.linea;
    }

    public setLinea(linea: Number): void {
        this.linea = linea;
    }

    public getColumna(): Number {
        return this.columna;
    }

    public setColumna(columna: Number): void {
        this.columna = columna;
    }

    constructor(tipo:TipoError,mensaje:String,linea:Number,columna:Number) {
        this.tipo=tipo
        this.mensaje=mensaje
        this.linea=linea
        this.columna=columna
    }
    private getnombre():String{
        switch (this.tipo) {
            case TipoError.LEXICO:
                return "LEXICO"
            case TipoError.SEMANTICO:
                return "SEMANTICO"
            default:
                return "SINTACTICO"
        }
    }
    public toString():String{
        return `Error de tipo ${this.tipo} en linea ${this.linea} columna ${this.columna} mensaje: ${this.mensaje}`
    }
}
export enum TipoError{
    LEXICO="LEXICO",
    SINTACTICO="SINTACTICO",
    SEMANTICO="SEMANTICO"
}