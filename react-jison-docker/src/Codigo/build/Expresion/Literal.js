"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
var Literal = /** @class */ (function () {
    function Literal(valor, tipo, linea, columna) {
        this.valor = valor;
        this.tipo = tipo;
        this.numberlinea = linea;
        this.numbercolumna = columna;
    }
    Literal.prototype.getValor = function (e) {
        return this.valor;
    };
    Literal.prototype.getTipo = function (e) {
        return this.tipo;
    };
    Literal.prototype.linea = function () {
        return this.numberlinea;
    };
    Literal.prototype.columna = function () {
        return this.numbercolumna;
    };
    return Literal;
}());
exports.Literal = Literal;
//# sourceMappingURL=Literal.js.map