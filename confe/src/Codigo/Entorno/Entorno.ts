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
    constructor(padre:any) {
        this._padre = padre
        this._tabla = new Map<string, Simbolo>();
    }
}