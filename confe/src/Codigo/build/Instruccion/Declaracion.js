"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
var Simbolo_1 = require("../Entorno/Simbolo");
var Declaracion = /** @class */ (function () {
    function Declaracion(valor, id, linea, columna) {
        this.valor = valor;
        this.Ncolumna = columna;
        this.Nlinea = linea;
        this.id = id;
    }
    Declaracion.prototype.ejecutar = function (e) {
        var setvalor = this.valor.getValor(e);
        var tipo = this.valor.getTipo(e);
        if (!e.ExisteEntorno(this.id.getId())) {
            var nuevo = new Simbolo_1.Simbolo(setvalor, tipo, this.id.getId(), this.Nlinea, this.Ncolumna);
            e.tabla.set(this.id.getId(), nuevo);
        }
    };
    Declaracion.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    Declaracion.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return Declaracion;
}());
exports.Declaracion = Declaracion;
//# sourceMappingURL=Declaracion.js.map