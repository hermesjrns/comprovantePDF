"use client"
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MainContext } from "@/providers/maincontext";
import { productSchema } from "@/config/ZodSchema";
import { z } from 'zod';
import { ContactMask } from "@/config/mask";

export type Produto = z.infer<typeof productSchema>

export interface Cliente {
    cliente: string | null,
    contato: string | null,
    data: Date | null,
    endereco: string | null
}

export interface ErrorInput {
    msg: string;
}

export function ContainerProduct() {
    const { cliente, onReqSetCliente, produtos, onReqSetProdutos, valorTotal, onReqSetValorTotal, onReqSetError } = useContext(MainContext);
    const [qtdValue, setQtdValue] = useState<string>('')
    const [priceValue, setPriceValue] = useState<string>('')
    const [contactValue, setContactMask] = useState<string>('')
    const router = useRouter();

    function addProdutos(formData: FormData) {
        const produto = formData.get("produto")?.valueOf().toString();
        const qtd = Number(formData.get("qtd")?.valueOf());
        const valor_raw = formData.get("valor")?.valueOf().toString().replaceAll(",", ".");
        const valor = Number(valor_raw?.valueOf());
        const cliente = formData.get("cliente")?.valueOf().toString();
        const contato = formData.get("contato")?.valueOf().toString();
        const data = formData.get("data")?.valueOf().toLocaleString();
        const subtotal = (qtd * valor).toFixed(2);
        const endereco = formData.get("endereco")?.valueOf().toString();

        if (!produto || !qtd || !valor) {
            return;
        }

        const novo_produto: Produto = Object.create({
            produto: produto,
            qtd: qtd,
            valor: valor,
            subtotal: subtotal
        })

        const result = productSchema.safeParse(novo_produto)

        if (!result.success) {
            const errors = result.error.errors.filter((err) => err.message)
            onReqSetError(JSON.stringify(errors))
        }

        onReqSetValorTotal(qtd * valor)

        const array_final = produtos ? produtos : [];

        array_final?.push(novo_produto);

        if (!array_final) {
            console.log('erro#2')
            return;
        }

        onReqSetProdutos(array_final);

        const novo_cliente: Cliente = Object.create({
            cliente: cliente,
            contato: contato,
            endereco: endereco,
            data: data,
        })

        onReqSetCliente(novo_cliente)

        return;
    }

    const hoje = new Date().toLocaleString('en-CA').slice(0, 10);


    function visualizarNota() {
        if (!cliente) {

        }
        if (!produtos || produtos.length < 1) {

        }
        router.push("/visualizar")
    }

    function handleQtdValue(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const numericValue = value.replace(/\D/g, '')
        setQtdValue(numericValue)
    }

    function handlePriceValue(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;



        const numericValue = value.replace(/[^0-9\,]|\,\Z/g, '')


        setPriceValue(numericValue)
    }

        const handleContactMask = (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            const numericValue = value.replace(/\D/g, "");
    
            let maskedVarContactValue = ContactMask(numericValue);
            setContactMask(maskedVarContactValue)
        }


    return (

        <form className="flex flex-col min-w-72 w-full gap-1 p-1 sm:w-full sm:p-4" action={addProdutos}>
            <h2 className="text-xl text-center m-2">Crie sua nota:</h2>
            {/* Aqui temos a div de informações do cliente! */}
            <div className="flex flex-col items-start text-xs sm:text-md">
                <label >Cliente:</label>
                <input type="text" name="cliente" placeholder="Cliente" defaultValue={cliente?.cliente ? cliente.cliente : ''} className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="flex flex-col items-start text-xs">
                <label >Contato:</label>
                <input type="tel" name="contato" placeholder="Contato" value={contactValue ? contactValue : ''} onChange={handleContactMask} className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="flex flex-col items-start text-xs">
                <label >Endereço:</label>
                <input type="tel" name="endereco" placeholder="Endereco" defaultValue={cliente?.endereco ? cliente.endereco : ''} className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="flex flex-col items-start text-xs">
                <label >Data: </label>
                <input type="date" name="data" defaultValue={hoje} className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="bg-gray-200 rounded py-1">
                {(produtos && produtos.length > 0)
                    ?
                    <>
                        <div className="flex flex-row justify-between px-0.5 text-xs sm:px-2">
                            <h2 className="text-center text-sm">Produtos inseridos:</h2>
                            <h2 className="text-right text-sm">Total de produtos: {produtos.length}</h2>
                        </div>
                        <div className="grid grid-cols-9 underline px-0.5 text-xs sm:px-2">
                            <span className="text-start col-span-5">Produto</span>
                            <span className="text-center">Qtd</span>
                            <span className="text-center">Valor</span>
                            <span className="text-end col-span-2">Subtotal</span>

                        </div>
                        {produtos.map((prod, index) => (
                            <div key={index} className="grid grid-cols-9 text-xs bg-gray-200  p-0.5 py-0 items-center sm:px-2 border-b-[1px] border-black border-opacity-40
                                sm:text-sm">
                                <div className="text-start col-span-5">{prod.produto}</div>
                                <div className="text-center">{prod.qtd}</div>
                                <div className="text-center"><span className="hidden sm:inline-block">R$</span>{prod.valor.toFixed(2).toString().replace('.', ',')}</div>
                                <div className="text-end col-span-2"><span className="hidden sm:inline-block">R$</span>{prod.subtotal?.toString().replace('.', ',')}</div>
                            </div>
                        ))}
                        <div className="text-xs pt-0.5 pl-0.5 m-0 sm:px-2 sm:text-sm">
                            <span className="">
                                Valor final: R${valorTotal?.toFixed(2)?.toString().replace('.', ',')}
                            </span>
                        </div>

                    </>
                    :
                    <span className="px-2 text-xs sm:text-md sm:px-4">Cadastre produtos, eles irão aparecer aqui...</span>
                }
            </div>
            <div className="flex flex-col items-start text-xs">
                <label>Produto:</label>
                <input type="text" name="produto" placeholder="Digite o nome do produto" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="flex flex-col items-start text-xs">
                <label>Qtd:</label>
                <input type="text" name="qtd" placeholder="Quantidade" value={qtdValue} onChange={handleQtdValue}
                    className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="flex flex-col items-start text-xs">
                <label>Valor:</label>
                <input type="text" name="valor" placeholder="Valor" value={priceValue ? priceValue : ''} onChange={handlePriceValue}
                    className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
            </div>
            <div className="w-36 m-auto flex flex-col gap-2 text-center">
                <button type="submit"
                    className="block w-full rounded bg-green-600  border-black border-2 px-1 py-0 self-center border-opacity-50 text-sm hover:scale-105 transition-all">Adicionar</button>
                <button type="button" onClick={() => visualizarNota()}
                    className="block w-full  self-center py-0 px-1 rounded bg-yellow-500 border-2 border-black border-opacity-50 text-sm hover:scale-105 transition-all">Visualizar</button>
            </div>
        </form>

    )
}