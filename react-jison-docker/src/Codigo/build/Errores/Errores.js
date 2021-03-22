"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoError = exports.Errores = void 0;
var Errores = /** @class */ (function () {
    function Errores(tipo, mensaje, linea, columna) {
        this.tipo = tipo;
        this.mensaje = mensaje;
        this.linea = linea;
        this.columna = columna;
    }
    Errores.prototype.getTipo = function () {
        return this.tipo;
    };
    Errores.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Errores.prototype.getMensaje = function () {
        return this.mensaje;
    };
    Errores.prototype.setMensaje = function (mensaje) {
        this.mensaje = mensaje;
    };
    Errores.prototype.getLinea = function () {
        return this.linea;
    };
    Errores.prototype.setLinea = function (linea) {
        this.linea = linea;
    };
    Errores.prototype.getColumna = function () {
        return this.columna;
    };
    Errores.prototype.setColumna = function (columna) {
        this.columna = columna;
    };
    Errores.prototype.getnombre = function () {
        switch (this.tipo) {
            case TipoError.LEXICO:
                return "LEXICO";
            case TipoError.SEMANTICO:
                return "SEMANTICO";
            default:
                return "SINTACTICO";
        }
    };
    Errores.prototype.toString = function () {
        return "Error de tipo " + this.tipo + " en linea " + this.linea + " columna " + this.columna + " mensaje: " + this.mensaje;
    };
    return Errores;
}());
exports.Errores = Errores;
var TipoError;
(function (TipoError) {
    TipoError["LEXICO"] = "LEXICO";
    TipoError["SINTACTICO"] = "SINTACTICO";
    TipoError["SEMANTICO"] = "SEMANTICO";
})(TipoError = exports.TipoError || (exports.TipoError = {}));
//# sourceMappingURL=Errores.js.map