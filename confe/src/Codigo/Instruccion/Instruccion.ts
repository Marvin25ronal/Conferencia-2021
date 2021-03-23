import { Nodo } from "../AST/Nodo";
import { Entorno } from "../Entorno/Entorno";

export interface Instruccion extends Nodo {
    ejecutar(e: Entorno): any;
}