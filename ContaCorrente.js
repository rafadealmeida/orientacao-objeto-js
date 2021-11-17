export class ContaCorrente{
    agencia;
    cliente;

    #saldo = 0; // atributo privada.

    sacar(valor){
        if(this.#saldo>= valor){
            this.#saldo -= valor;
            console.log(`${this.cliente.nome}, seu saldo é de ${this.#saldo}`);
            return valor; 
        }else{
            console.log("Saldo inválido para a operação.");
        }
        //devido o atributo ser privado, só podemos acessa-la dentro da classe, dentro do metodo 
    }
    depositar(deposito){
        if(deposito<= 0){
            console.log("Depósito inválido para a operação.");
        }
        else{
            this.#saldo += deposito;

        }
        console.log(`${this.cliente.nome}, seu saldo é de ${this.#saldo}`);
    }
    transferir(valor, conta){
        const valorSacado =this.sacar(valor);
        conta.depositar(valorSacado);
    }
}