import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor( cliente,agencia) {
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1;
    } 
    sacar(valor){
        let taxa = 1.1;
        const valorSacado = valor*taxa;
        if(this._saldo>= valorSacado){
            this._saldo -= valorSacado;
            console.log(`${this._cliente.nome}, seu saldo é de ${this._saldo}`);
            return valorSacado; 
        }else{
            console.log("Saldo inválido para a operação.");
        }
    }
}