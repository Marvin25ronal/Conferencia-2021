export class TipoExp {
    tipo: Tipo;
    constructor(t: Tipo) {
        this.tipo = t
    }
    isInt() {
        return this.tipo == Tipo.INTEGER
    }
    isDouble() {
        return this.tipo == Tipo.DOUBLE
    }
    isString() {
        return this.tipo == Tipo.STRING
    }
    isNumeric() {
        return this.isInt() || this.isDouble()
    }
    isBoolean(){
        return this.tipo==Tipo.BOOLEAN
    }
}

export enum Tipo {
    INTEGER = "INTEGER",
    DOUBLE = "DOUBLE",
    BOOLEAN = "BOOLEAN",
    STRING = "STRING"
}