import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";



const cliente1 = new Cliente("Ricardo",11122233309);

const ContaCorrenteRicardo = new ContaCorrente(cliente1,1001);

ContaCorrenteRicardo.depositar(500);

console.log(ContaCorrenteRicardo);


const contaPoupanca = new ContaPoupanca(0,cliente1,1001)

ContaCorrenteRicardo.transferir(100,contaPoupanca)
console.log(contaPoupanca);


const cliente2 = new Cliente("Aline",88822233309);

const ContaCorrenteAline = new ContaCorrente(cliente2,1002);












