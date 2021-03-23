"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simbolo = void 0;
var Simbolo = /** @class */ (function () {
    function Simbolo(valor, tipo, id, linea, columna) {
        this.tipo = tipo;
        this.id = id;
        this.linea = linea;
        this.columna = columna;
        this.valor = valor;
    }
    Simbolo.prototype.getTipo = function () {
        return this.tipo;
    };
    Simbolo.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Simbolo.prototype.getId = function () {
        return this.id;
    };
    return Simbolo;
}());
exports.Simbolo = Simbolo;
//# sourceMappingURL=Simbolo.js.map