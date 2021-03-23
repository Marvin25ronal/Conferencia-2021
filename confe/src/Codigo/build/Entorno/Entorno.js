"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entorno = void 0;
var Entorno = /** @class */ (function () {
    function Entorno(padre) {
        this._padre = padre;
        this._tabla = new Map();
    }
    Object.defineProperty(Entorno.prototype, "padre", {
        get: function () {
            return this._padre;
        },
        set: function (value) {
            this._padre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entorno.prototype, "tabla", {
        get: function () {
            return this._tabla;
        },
        set: function (value) {
            this._tabla = value;
        },
        enumerable: false,
        configurable: true
    });
    Entorno.prototype.ExisteVariable = function (id) {
        for (var e = this; e != null; e = e.padre) {
            var encontrado = e.tabla.get(id.toLowerCase());
            if (encontrado != undefined) {
                return true;
            }
        }
        return false;
    };
    Entorno.prototype.ExisteEntorno = function (id) {
        var encontrado = this.tabla.get(id.toLowerCase());
        if (encontrado != undefined) {
            return true;
        }
        return false;
    };
    Entorno.prototype.get = function (id) {
        for (var e = this; e != null; e = e.padre) {
            var encontrado = e.tabla.get(id.toLowerCase());
            if (encontrado != undefined) {
                return encontrado;
            }
        }
        return null;
    };
    return Entorno;
}());
exports.Entorno = Entorno;
//# sourceMappingURL=Entorno.js.map