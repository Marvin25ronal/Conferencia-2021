"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Simbolo = /** @class */ (function () {
    function Simbolo(tipo, id, linea, columna) {
        this._tipo = tipo;
        this._columna = columna;
        this._linea = linea;
        this._id = id;
    }
    Object.defineProperty(Simbolo.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simbolo.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simbolo.prototype, "linea", {
        get: function () {
            return this._linea;
        },
        set: function (value) {
            this._linea = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Simbolo.prototype, "columna", {
        get: function () {
            return this._columna;
        },
        set: function (value) {
            this._columna = value;
        },
        enumerable: true,
        configurable: true
    });
    return Simbolo;
}());
exports.Simbolo = Simbolo;
//# sourceMappingURL=Simbolo.js.map