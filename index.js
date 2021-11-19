import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;

const cliente2 = new Cliente();
cliente2.nome = "Aline";
cliente2.cpf = 88822233309;

const ContaCorrenteAline = new ContaCorrente();
ContaCorrenteAline.agencia = 1002;
ContaCorrenteAline.cliente = cliente2;




console.log(ContaCorrenteAline.cliente);








