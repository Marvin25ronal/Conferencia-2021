import { TipoExp } from "../Expresion/TipoExp";

export class Simbolo {
    private _tipo: TipoExp;
    public get tipo(): TipoExp {
        return this._tipo;
    }
    public set tipo(value: TipoExp) {
        this._tipo = value;
    }
    private _id: String;
    public get id(): String {
        return this._id;
    }
    public set id(value: String) {
        this._id = value;
    }
    private _linea: Number;
    public get linea(): Number {
        return this._linea;
    }
    public set linea(value: Number) {
        this._linea = value;
    }
    private _columna: Number;
    public get columna(): Number {
        return this._columna;
    }
    public set columna(value: Number) {
        this._columna = value;
    }
    constructor(tipo:any, id:any, linea:number, columna:number) {
        this._tipo = tipo
        this._columna = columna
        this._linea = linea
        this._id = id
    }

}