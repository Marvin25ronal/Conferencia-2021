import { Nodo } from "../AST/Nodo";
import { Entorno } from "../Entorno/Entorno";
import { TipoExp } from "./TipoExp";

export interface Expresion extends Nodo {
    getValor(e: Entorno): any;
    getTipo(e:Entorno):TipoExp;
}