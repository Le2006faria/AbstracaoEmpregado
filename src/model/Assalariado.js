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
exports.Assalariado = void 0;
var Empregado_1 = require("./Empregado");
var Assalariado = /** @class */ (function (_super) {
    __extends(Assalariado, _super);
    function Assalariado(_nome, _cpf, _salario) {
        var _this = _super.call(this, _nome, _cpf) || this;
        _this.salario = _salario;
        return _this;
    }
    Assalariado.prototype.setSalario = function (_salario) {
        this.salario = _salario;
    };
    Assalariado.prototype.getSalario = function () {
        return this.salario;
    };
    Assalariado.prototype.vencimento = function () {
        return this.salario;
    };
    return Assalariado;
}(Empregado_1.Empregado));
exports.Assalariado = Assalariado;
