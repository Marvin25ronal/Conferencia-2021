"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VarGlobal_1 = require("../Globales/VarGlobal");
var Print = /** @class */ (function () {
    function Print(toprint, linea, columna) {
        this.toprint = toprint;
        this.Nlinea = linea;
        this.Ncolumna = columna;
    }
    Print.prototype.ejecutar = function (e) {
        var val = this.toprint.getValor(e);
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