import { AST } from "../AST/AST"
import { VarGlobal } from "../Globales/VarGlobal";

export class Analizador{
    Interpretar(c:string){
        try{
            let Parse=require('./gramatica')
            let res:AST=Parse.parse(c)
            res.Ejecutar()
            console.log(VarGlobal.getInstance().cadena)
            return VarGlobal.getInstance().cadena
        }catch (error){
            console.log(error)
            return error
        }
    }
}