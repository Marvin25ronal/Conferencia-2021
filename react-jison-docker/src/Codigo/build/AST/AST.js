"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entorno_1 = require("../Entorno/Entorno");
var VarGlobal_1 = require("../Globales/VarGlobal");
var AST = /** @class */ (function () {
    function AST(acciones) {
        this.acciones = acciones;
    }
    AST.prototype.Ejecutar = function () {
        var global = new Entorno_1.Entorno(null);
        VarGlobal_1.VarGlobal.getInstance().cadena = "";
        VarGlobal_1.VarGlobal.getInstance().concatenar("SALIDA--------------\n");
        for (var i = 0; i < this.acciones.length; i++) {
            var n = this.acciones[i];
            if (n) {
                var result = n.ejecutar(global);
            }
            else if (n) {
                var exp = n.getValor(global);
            }
        }
    };
    return AST;
}());
exports.AST = AST;
//# sourceMappingURL=AST.js.map