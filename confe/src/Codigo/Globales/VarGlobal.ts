export class VarGlobal {
    private static instance: VarGlobal
    private _cadena: String;
    public get cadena(): String {
        return this._cadena;
    }
    public set cadena(value: String) {
        this._cadena = value;
    }
    constructor(){
        this._cadena=""
    }
    public concatenar(cad: string) {
        this._cadena = this.cadena.concat(cad);
    }
    public static getInstance(): VarGlobal {
        if (!VarGlobal.instance) {
            VarGlobal.instance = new VarGlobal();
            
        }
        return VarGlobal.instance;
    }

}