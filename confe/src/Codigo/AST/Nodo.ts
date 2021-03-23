import { getLineAndCharacterOfPosition } from "typescript"

export interface Nodo {
    linea(): Number;
    columna(): Number;
}