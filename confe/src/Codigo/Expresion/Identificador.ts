import { Entorno } from "../Entorno/Entorno";
import { Simbolo } from "../Entorno/Simbolo";
import { Expresion } from "./Expresion";
import { Literal } from "./Literal";
import { TipoExp } from "./TipoExp";

export class Identificador implements Expresion {
    private id: string;

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    Nlinea: Number
    Ncolumna: Number
    constructor(id: string, linea: Number, columna: Number) {
        this.id = id
        this.Nlinea = linea
        this.Ncolumna = columna
    }
    getValor(e: Entorno): Literal | null {
        if (e.ExisteVariable(this.id)) {
            let encontrado:Simbolo|null=e.get(this.id)

                encontrado=encontrado as Simbolo;
                return encontrado.valor
        }
        return null
    }
    getTipo(e: Entorno): TipoExp | null {
        if (e.ExisteVariable(this.id)) {
            let variable=e.get(this.id)
            return (variable as Simbolo).getTipo()
            
        }
        return null
    }
    linea(): Number {
        throw new Error("Method not implemented.");
    }
    columna(): Number {
        throw new Error("Method not implemented.");
    }

}