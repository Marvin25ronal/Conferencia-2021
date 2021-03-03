"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Operador[Operador["SUMA"] = 0] = "SUMA";
    Operador[Operador["RESTA"] = 1] = "RESTA";
    Operador[Operador["DIVISION"] = 2] = "DIVISION";
    Operador[Operador["MULTIPLICACION"] = 3] = "MULTIPLICACION";
    Operador[Operador["OR"] = 4] = "OR";
    Operador[Operador["AND"] = 5] = "AND";
    Operador[Operador["NOT"] = 6] = "NOT";
    Operador[Operador["MAYOR"] = 7] = "MAYOR";
    Operador[Operador["MENOR"] = 8] = "MENOR";
})(Operador = exports.Operador || (exports.Operador = {}));
//# sourceMappingURL=Operacion.js.map