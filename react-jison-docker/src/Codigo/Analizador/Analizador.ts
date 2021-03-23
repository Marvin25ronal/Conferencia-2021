import { AST } from "../AST/AST"
import { VarGlobal } from "../Globales/VarGlobal";
import {Errores}from "../Errores/Errores"
export class Analizador{
    Interpretar(c:string){
        try{
            let Parse=require('./gramatica')
            let {arbol,errores}=Parse.parse(c)
            arbol=arbol as AST
        
            return "hola"
        }catch (error){
            console.log(error)
            return error
        }
    }
}