"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Operacion_1 = require("./Operacion");
var Aritmeticas = /** @class */ (function (_super) {
    __extends(Aritmeticas, _super);
    function Aritmeticas(op1, op2, op, linea, columna) {
        var _this = _super.call(this, op1, op2, op) || this;
        _this.Nlinea = linea;
        _this.Ncolumna = columna;
        return _this;
    }
    Aritmeticas.prototype.getValor = function (e) {
        switch (this.op) {
            case Operacion_1.Operador.SUMA:
        }
    };
    return Aritmeticas;
}(Operacion_1.Operacion));
exports.Aritmeticas = Aritmeticas;
//# sourceMappingURL=Aritmeticas.js.map