import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import {Horista} from "./model/Horista"

const a1 = new Assalariado("jubileu", "000000", 1500);
a1.setNome(`Wesley Sneijder`);
a1.setCpf(`7070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento}`);

const c1 = new Comissionado (`Slipknot`, `661661661`, 4000, 0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`79143221721`);
c1.setTotalVendas(3200);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf}`);
console.log(`Comissão: ${c1.getTaxaComissao()}, Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento}`);

const h1 = new Horista (`Robertp`, `772772772`, 5, 6);
h1.setNome(`Monica`);
h1.setCpf(`994994994`);
h1.setValorHora(6);
h1.setHorasTrabalhadas(8);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf}`);
console.log(`Valor da Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento}`);
