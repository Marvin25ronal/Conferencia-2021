"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarGlobal = void 0;
var VarGlobal = /** @class */ (function () {
    function VarGlobal() {
        this._cadena = "";
    }
    Object.defineProperty(VarGlobal.prototype, "cadena", {
        get: function () {
            return this._cadena;
        },
        set: function (value) {
            this._cadena = value;
        },
        enumerable: false,
        configurable: true
    });
    VarGlobal.prototype.concatenar = function (cad) {
        this._cadena = this.cadena.concat(cad);
    };
    VarGlobal.getInstance = function () {
        if (!VarGlobal.instance) {
            VarGlobal.instance = new VarGlobal();
        }
        return VarGlobal.instance;
    };
    return VarGlobal;
}());
exports.VarGlobal = VarGlobal;
//# sourceMappingURL=VarGlobal.js.map