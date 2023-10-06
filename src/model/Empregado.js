"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empregado = void 0;
var Empregado = /** @class */ (function () {
    function Empregado(_nome, _cpf) {
        this.nome = _nome;
        this.cpf = _cpf;
    }
    Empregado.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Empregado.prototype.getNome = function () {
        return this.nome;
    };
    Empregado.prototype.setCpf = function (_cpf) {
        this.cpf = _cpf;
    };
    Empregado.prototype.getCpf = function () {
        return this.cpf;
    };
    return Empregado;
}());
exports.Empregado = Empregado;
