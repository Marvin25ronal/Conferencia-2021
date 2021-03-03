"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoExp = /** @class */ (function () {
    function TipoExp(t) {
        this.tipo = t;
    }
    TipoExp.prototype.isInt = function () {
        return this.tipo == Tipo.INTEGER;
    };
    TipoExp.prototype.isDouble = function () {
        return this.tipo == Tipo.DOUBLE;
    };
    TipoExp.prototype.isString = function () {
        return this.tipo == Tipo.STRING;
    };
    TipoExp.prototype.isNumeric = function () {
        return this.isInt() || this.isDouble();
    };
    return TipoExp;
}());
exports.TipoExp = TipoExp;
var Tipo;
(function (Tipo) {
    Tipo["INTEGER"] = "INTEGER";
    Tipo["DOUBLE"] = "DOUBLE";
    Tipo["BOOLEAN"] = "BOOLEAN";
    Tipo["STRING"] = "STRING";
})(Tipo = exports.Tipo || (exports.Tipo = {}));
//# sourceMappingURL=TipoExp.js.map