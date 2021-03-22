"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operador = exports.Operacion = void 0;
var Operacion = /** @class */ (function () {
    function Operacion(op1, op2, op) {
        this.op1 = op1;
        this.op2 = op2;
        this.op = op;
    }
    Operacion.prototype.getValor = function (e) {
        throw new Error("Method not implemented.");
    };
    Operacion.prototype.getTipo = function (e) {
        throw new Error("Method not implemented.");
    };
    Operacion.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    Operacion.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return Operacion;
}());
exports.Operacion = Operacion;
var Operador;
(function (Operador) {
    Operador["SUMA"] = "+";
    Operador["RESTA"] = "-";
    Operador["DIVISION"] = "/";
    Operador["MULTIPLICACION"] = "*";
    Operador["OR"] = "||";
    Operador["AND"] = "&&";
    Operador["NOT"] = "!";
    Operador["MAYOR"] = ">";
    Operador["MENOR"] = "<";
})(Operador = exports.Operador || (exports.Operador = {}));
//# sourceMappingURL=Operacion.js.map