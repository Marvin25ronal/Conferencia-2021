import { AST } from "../AST/AST"
import { VarGlobal } from "../Globales/VarGlobal";
import {Errores}from "../Errores/Errores"
export class Analizador{
    Interpretar(c:string){
        try{
            let Parse=require('./gramatica')
            const{arbol,errores}=Parse.parse(c)
            if(errores.length>0){
                console.log(errores)
                VarGlobal.getInstance().concatenar("ERRORES-----\n")
                for(let i=0;i<errores.length;i++){
                    VarGlobal.getInstance().concatenar(errores[i].toString()+"\n")
                }
            }else{
                if (arbol){
                    arbol.Ejecutar()
                }
            }
            return VarGlobal.getInstance().cadena
        }catch (error){
            console.log(error)
            return error
        }
    }
}