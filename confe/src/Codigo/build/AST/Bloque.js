"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bloque = void 0;
var Entorno_1 = require("../Entorno/Entorno");
var Bloque = /** @class */ (function () {
    function Bloque(acciones) {
        this.acciones = acciones;
    }
    Bloque.prototype.ejecutar = function (e) {
        var nuevo = new Entorno_1.Entorno(e);
        for (var i = 0; i < this.acciones.length; i++) {
            var n = this.acciones[i];
            if (n) {
                var result = n.ejecutar(nuevo);
                return result;
            }
            else if (n) {
                var exp = n.getValor(nuevo);
                if (exp != null) {
                    return exp;
                }
            }
        }
        return null;
    };
    Bloque.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    Bloque.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return Bloque;
}());
exports.Bloque = Bloque;
//# sourceMappingURL=Bloque.js.map