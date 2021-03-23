import { Simbolo } from "./Simbolo"

export class Entorno {
    private _padre: Entorno;
    public get padre(): Entorno {
        return this._padre;
    }
    public set padre(value: Entorno) {
        this._padre = value;
    }
    private _tabla: Map<string, Simbolo>;
    public get tabla(): Map<string, Simbolo> {
        return this._tabla;
    }
    public set tabla(value: Map<string, Simbolo>) {
        this._tabla = value;
    }
    constructor(padre: any) {
        this._padre = padre
        this._tabla = new Map<string, Simbolo>();
    }
    public ExisteVariable(id: String): boolean {
        for (let e: Entorno = this; e != null; e = e.padre) {
            let encontrado: Simbolo | undefined = e.tabla.get(id.toLowerCase())
            if (encontrado != undefined) {
                return true
            }
        }
        return false
    }
    public ExisteEntorno(id: String): boolean {
        let encontrado: Simbolo | undefined = this.tabla.get(id.toLowerCase())
        if (encontrado != undefined) {
            return true
        }
        return false
    }

    public get(id:String):Simbolo|null{
        for (let e: Entorno = this; e != null; e = e.padre) {
            let encontrado: Simbolo | undefined = e.tabla.get(id.toLowerCase())
            if (encontrado != undefined) {
                return encontrado
            }
        }
        return null
    }
}