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
exports.Suma = void 0;
var Literal_1 = require("../Expresion/Literal");
var TipoExp_1 = require("../Expresion/TipoExp");
var Aritmeticas_1 = require("./Aritmeticas");
var Suma = /** @class */ (function (_super) {
    __extends(Suma, _super);
    function Suma(op1, op2, op, linea, columna) {
        return _super.call(this, op1, op2, op, linea, columna) || this;
    }
    Suma.prototype.ejecturar = function (e) {
        var valor1 = this.op1.getValor(e);
        var valor2 = this.op2.getValor(e);
        var tipo1 = this.op1.getTipo(e);
        var tipo2 = this.op2.getTipo(e);
        var tipores = this.max(tipo1, tipo2);
        var tipofinal;
        if (tipores != null) {
            tipofinal = tipores;
            switch (tipofinal.tipo) {
                case "STRING":
                    return new Literal_1.Literal(valor1.toString() + valor2.toString(), new TipoExp_1.TipoExp(TipoExp_1.Tipo.STRING), _super.prototype.linea.call(this), _super.prototype.columna.call(this));
            }
        }
        return null;
    };
    return Suma;
}(Aritmeticas_1.Aritmeticas));
exports.Suma = Suma;
//# sourceMappingURL=Suma.js.map