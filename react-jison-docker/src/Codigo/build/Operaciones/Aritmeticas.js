"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aritmeticas = void 0;
var TipoExp_1 = require("../Expresion/TipoExp");
var Operacion_1 = require("./Operacion");
var Suma_1 = require("./Suma");
var Aritmeticas = /** @class */ (function (_super) {
    __extends(Aritmeticas, _super);
    function Aritmeticas(op1, op2, op, linea, columna) {
        var _this = _super.call(this, op1, op2, op) || this;
        _this.Nlinea = linea;
        _this.Ncolumna = columna;
        return _this;
    }
    Aritmeticas.prototype.max = function (a, b) {
        return this.tipoDominante(a, b);
    };
    Aritmeticas.prototype.tipoDominante = function (t1, t2) {
        if (t1 == null || t2 == null) {
            return null;
        }
        if (t1.isString() || t2.isString())
            return new TipoExp_1.TipoExp(TipoExp_1.Tipo.STRING);
        else if (t1.isDouble() || t2.isDouble())
            return new TipoExp_1.TipoExp(TipoExp_1.Tipo.DOUBLE);
        else if (t1.isInt() || t2.isInt())
            return new TipoExp_1.TipoExp(TipoExp_1.Tipo.INTEGER);
        return null;
    };
    Aritmeticas.prototype.getValor = function (e) {
        var r = this.val(e);
        if (r) {
            return (r.getValor(e));
        }
        return r;
    };
    Aritmeticas.prototype.val = function (e) {
        if (this.op1 == null || this.op2 == null) {
            return null;
        }
        switch (this.op) {
            case Operacion_1.Operador.SUMA:
                return new Suma_1.Suma(this.op1, this.op2, this.op, this.Nlinea, this.Ncolumna).ejecturar(e);
        }
        return null;
    };
    return Aritmeticas;
}(Operacion_1.Operacion));
exports.Aritmeticas = Aritmeticas;
//# sourceMappingURL=Aritmeticas.js.map