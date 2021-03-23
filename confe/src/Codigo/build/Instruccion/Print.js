"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
var Literal_1 = require("../Expresion/Literal");
var VarGlobal_1 = require("../Globales/VarGlobal");
var Print = /** @class */ (function () {
    function Print(toprint, linea, columna) {
        this.toprint = toprint;
        this.Nlinea = linea;
        this.Ncolumna = columna;
    }
    Print.prototype.ejecutar = function (e) {
        console.log(this.toprint);
        var val = this.toprint.getValor(e);
        if (val == null) {
            val = "nulo";
        }
        console.log(val);
        if (val instanceof Literal_1.Literal) {
            val = val.getValor(e);
        }
        console.log("Entre");
        var cadena = val.toString() + " \n";
        VarGlobal_1.VarGlobal.getInstance().concatenar(cadena);
        return null;
    };
    Print.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    Print.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return Print;
}());
exports.Print = Print;
//# sourceMappingURL=Print.js.map