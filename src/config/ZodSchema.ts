import { z } from 'zod';

export const cnpjSchema = z.string().refine((value) => {
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  return cnpjRegex.test(value);
}, { message: "CNPJ: Formato inválido!"});

export const cabecalhoSchema = z.object({
  nome_fantasia: z.string().min(1, { message: 'Nome Fantasia: Necessário pelo menos 1 caractere!'}),
  razao_social: z.string().min(1, { message: 'Razão Social: Necessário pelo menos 1 caractere!'}),
  cnpj: cnpjSchema,
  contato_empresa: z.string().min(14, { message: 'Contato da empresa: Mínimo 10 caracteres!'}).max(16, { message: 'Contato da empresa: Máximo de 11 caracteres!'}),
})

export const productSchema = z.object({
  produto: z.string().min(1, { message: 'Produto: Necessita pelo menos 1 caractere!'}),
  qtd: z.number().gte(0, { message: 'Quantidade: Necessário ser valor positivo!'}).int({ message: 'Quantidade: Valor necessário ser inteiro! (Não é permitido vírgula)'}),
  valor: z.number().positive('Valor: Necessário que seja um valor positivo!'),
  subtotal: z.string()
})



//99.999.999/9999-99
// const handleCnpj = (val: string) => {
//     if(val.toString().length === 14){
//         const cnpj = val.toString();
//         const c1 = cnpj.slice(0,2);
//         const c2 = cnpj.slice(2,5);
//         const c3 = cnpj.slice(5,8);
//         const c4 = cnpj.slice(8,12);
//         const c5 = cnpj.slice(12,14);
//         const final = `${c1}.${c2}.${c3}/${c4}-${c5}`
//         console.log(final);
//         return final;
//     }
// }