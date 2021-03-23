import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Instruccion } from "../Instruccion/Instruccion";
import { Nodo } from "./Nodo";

export class Bloque implements Instruccion {
    acciones: Nodo[];
    constructor(acciones: Nodo[]) {
        this.acciones = acciones
    }
    ejecutar(e: Entorno): any {
        var nuevo = new Entorno(e)
        for (let i = 0; i < this.acciones.length; i++) {
            let n = this.acciones[i]
            if (n as Instruccion) {
                let result = (n as Instruccion).ejecutar(nuevo)
                return result;
            } else if (n as Expresion) {
                let exp = (n as Expresion).getValor(nuevo)
                if (exp != null) {
                    return exp
                }
            }
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