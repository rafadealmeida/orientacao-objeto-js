import{ ContaCorrente } from "./ContaCorrente.js";

export class ContaPoupanca{
    _cliente;
    _saldoInicial;
    _agencia;

    constructor(saldoInicial,cliente,agencia){
        this._saldoInicial = saldoInicial;
        this._cliente =cliente;
        this._agencia = agencia;
    }

    get_cliente(){
        return this._cliente;
    }
    get_saldoInicial(){
        return this._saldoInicial;
    }
    get_agencia(){
        return this._agencia;
    }
}