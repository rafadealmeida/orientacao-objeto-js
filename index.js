import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309);

const ContaCorrenteRicardo = new ContaCorrente(cliente1,1001);


const cliente2 = new Cliente("Aline",88822233309);

const ContaCorrenteAline = new ContaCorrente(cliente2,1002);




console.log(cliente1);

console.log(ContaCorrente.numeroDeContas);








