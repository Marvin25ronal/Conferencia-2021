"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identificador = void 0;
var Identificador = /** @class */ (function () {
    function Identificador(id, linea, columna) {
        this.id = id;
        this.Nlinea = linea;
        this.Ncolumna = columna;
    }
    Identificador.prototype.getId = function () {
        return this.id;
    };
    Identificador.prototype.setId = function (id) {
        this.id = id;
    };
    Identificador.prototype.getValor = function (e) {
        if (e.ExisteVariable(this.id)) {
            var encontrado = e.get(this.id);
            encontrado = encontrado;
            return encontrado.valor;
        }
        return null;
    };
    Identificador.prototype.getTipo = function (e) {
        if (e.ExisteVariable(this.id)) {
            var variable = e.get(this.id);
            return variable.getTipo();
        }
        return null;
    };
    Identificador.prototype.linea = function () {
        throw new Error("Method not implemented.");
    };
    Identificador.prototype.columna = function () {
        throw new Error("Method not implemented.");
    };
    return Identificador;
}());
exports.Identificador = Identificador;
//# sourceMappingURL=Identificador.js.map