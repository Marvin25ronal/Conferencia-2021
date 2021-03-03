"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VarGlobal_1 = require("../Globales/VarGlobal");
var Analizador = /** @class */ (function () {
    function Analizador() {
    }
    Analizador.prototype.Interpretar = function (c) {
        try {
            var Parse = require('./gramatica');
            var res = Parse.parse(c);
            res.Ejecutar();
            console.log(VarGlobal_1.VarGlobal.getInstance().cadena);
            return VarGlobal_1.VarGlobal.getInstance().cadena;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    };
    return Analizador;
}());
exports.Analizador = Analizador;
//# sourceMappingURL=Analizador.js.map