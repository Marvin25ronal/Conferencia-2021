"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analizador = void 0;
var VarGlobal_1 = require("../Globales/VarGlobal");
var Analizador = /** @class */ (function () {
    function Analizador() {
    }
    Analizador.prototype.Interpretar = function (c) {
        try {
            var Parse = require('./gramatica');
            var _a = Parse.parse(c), arbol = _a.arbol, errores = _a.errores;
            if (errores.length > 0) {
                console.log(errores);
                VarGlobal_1.VarGlobal.getInstance().concatenar("ERRORES-----\n");
                for (var i = 0; i < errores.length; i++) {
                    VarGlobal_1.VarGlobal.getInstance().concatenar(errores[i].toString() + "\n");
                }
            }
            else {
                if (arbol) {
                    arbol.Ejecutar();
                }
            }
            return VarGlobal_1.VarGlobal.getInstance().cadena;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    };
    return Analizador;
}());
exports.Analizador = Analizador;
//# sourceMappingURL=Analizador.js.map