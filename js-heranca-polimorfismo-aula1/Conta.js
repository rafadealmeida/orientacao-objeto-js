export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == "Conta") {
            throw new Error("Você não deveria instanciar uma conta desse tipo diretamente.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
       
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("O metodo Sacar da conta é abstrato.")
    }

     _sacar(valor,taxa){
        const valorSacado = valor*taxa;
        if(this._saldo>= valorSacado){
            this._saldo -= valorSacado;
            console.log(`${this._cliente.nome}, seu saldo é de ${this._saldo}`);
            return valorSacado; 
        }else{
            console.log("Saldo inválido para a operação.");
            return 0; 
        }
        //devido o atributo ser privado, só podemos acessa-la dentro da classe, dentro do metodo 
    }
    depositar(deposito){
        if(deposito<= 0){
            console.log("Depósito inválido para a operação.");
        }
        else{
            this._saldo += deposito;

        }
        console.log(`${this._cliente.nome}, seu saldo é de ${this._saldo}`);
    }
    transferir(valor, conta){
        const valorSacado =this.sacar(valor);
        conta.depositar(valorSacado);
    }
}