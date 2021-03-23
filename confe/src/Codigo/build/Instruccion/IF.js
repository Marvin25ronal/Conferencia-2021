"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IF = void 0;
var Entorno_1 = require("../Entorno/Entorno");
var IF = /** @class */ (function () {
    function IF(condicion, sentencias, linea, columna) {
        this.condicion = condicion;
        this.sentencias = sentencias;
        this.Nlinea = linea;
        this.Ncolumna = columna;
    }
    IF.prototype.ejecutar = function (e) {
        var cond = this.condicion.getValor(e);
        if (cond == null) {
            return null;
        }
        var t = this.condicion.getTipo(e);
        if (t != null) {
            if (t.isBoolean() && cond) {
                var nuevo = new Entorno_1.Entorno(e);
                for (var i = 0; i < this.sentencias.length; i++) {
                    var n = this.sentencias[i];
                    if (n) {
                        var result = n.ejecutar(nuevo);
                    }
                    else if (n) {
                        var exp = n.getValor(nuevo);
                        if (exp != null) {
                            return exp;
                        }
                    }
                }
            }
        }
        return null;
    };
    IF.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    IF.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return IF;
}());
exports.IF = IF;
//# sourceMappingURL=IF.js.map