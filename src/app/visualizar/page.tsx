'use client'

import { useContext } from "react";
import { MainContext } from "@/providers/maincontext";
import Image from "next/image";
import Logo from '@/../public/logo.png';

export default function Visualizar() {
    const { produtos, cliente, valorTotal, imageLogo, cabecalho } = useContext(MainContext);
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-8 font-sans">
                <div className="a4-page">
                    <div className="border-black min-w-full min-h-full border-[1px] p-0 flex flex-col a4-content">
                        <header className=" flex flex-col border-b-[1px] border-black border- w-full m-0 p-0">
                            {/* Cabeçalho é aqui! */}
                            <div className="m-0 w-full inline-flex px-1">
                                {/* Cabeçalho Empresa */}
                                {
                                    imageLogo ?
                                    <div className="h-16 w-16 relative m-0 my-auto">
                                        <Image src={imageLogo}
                                            alt='Logo' fill className="absolute object-cover" />
                                    </div>
                                    :
                                    <div className="h-16 w-16 relative m-0 my-auto">
                                        <Image src={Logo}
                                            alt='Logo' className="absolute object-cover" />
                                    </div>
                                }
                                <div className="block text-center w-full border-l-[1px] border-black">
                                    <h1>{cabecalho?.nome_fantasia}</h1>
                                    <div className="text-xs flex flex-col pt-0 px-1 items-start">
                                        <div className="flex flex-col items-start">
                                            <h2 className="">
                                                Razão Social: {cabecalho?.razao_social}
                                            </h2>
                                            <h2 className="">
                                                CNPJ: {cabecalho?.cnpj}
                                            </h2>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <h2 className="">
                                                Contato: {cabecalho?.contato_empresa}
                                            </h2>
                                            {/* <h2 className="">
                                                Data: {cliente?.data?.toLocaleString() || '__/__/__'}
                                            </h2> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-0 w-full inline-flex px-1 border-t-[1px] border-black">
                                {/* Cabeçalho Cliente */}

                                <div className="block text-center w-full ">
                                    <div className="text-xs flex flex-col pt-0 px-1 items-start">
                                        <div className="flex flex-row justify-between w-full">
                                            <h2 className="">
                                                Cliente: {cliente?.cliente}
                                            </h2>
                                            <h2 className="">
                                                Contato: {cliente?.contato}
                                            </h2>
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            {cliente?.endereco && <h2 className="">
                                                Endereço: {cliente.endereco}
                                            </h2>}
                                            <h2 className="">
                                                Data: {cliente?.data?.toLocaleString('pt-BR')}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main className="flex flex-col min-w-full w-full grow">
                            {/* Tabela de produtos */}
                            <div className="grid grid-cols-12 text-xs text-center border-b-[1px] border-black">
                                {/* Cabeçalho tabela */}
                                <div className="col-span-1 border-black border-r-[1px]">Quant</div>
                                <div className="col-span-7 border-black border-r-[1px]">Descrição</div>
                                <div className="col-span-2 border-black border-r-[1px]">Valor (R$)</div>
                                <div className="col-span-2">Subtotal (R$)</div>
                            </div>
                            {produtos && (produtos?.length > 0) ?
                                <>
                                    {
                                        produtos.map((prod, index) => (
                                            <div key={index} className="grid grid-cols-12 text-xs text-center border-b-[1px] border-black">
                                                {/* Cada item é uma div dessa */}
                                                <div className="col-span-1 border-black border-r-[1px]">{prod.qtd}</div>
                                                <div className="col-span-7 border-black border-r-[1px] pl-1 text-left">{prod.produto}</div>
                                                <div className="col-span-2 border-black border-r-[1px]">{prod.valor.toString().replace('.', ',')}</div>
                                                <div className="col-span-2 text-right pr-1">{prod.subtotal?.toString().replace('.', ',')}</div>

                                            </div>

                                        ))
                                    }
                                </>

                                :
                                <h1>Nenhum produto cadastrado, voltar</h1>
                            }
                        </main>
                        <footer className=" flex flex-col border-t-[1px] border-black w-full m-0 p-0">
                            {/* Rodapé é aqui! */}
                            <div className="w-full inline-flex px-1 border-t-[1px] border-black">
                                {/* <div className="flex flex-row text-left w-full grow"> */}
                                <span>Assinatura:</span>
                                <div className="w-full border-b-[1px] border-black pb-1 opacity-0"></div>
                                <div className="flex pl-1 text-nowrap border-l-[1px] border-black">Valor Total: R${valorTotal?.toFixed(2).toString().replace('.', ',')}</div>
                                {/* </div> */}
                            </div>
                        </footer>
                    </div>
                </div >
            </div >
        </>
    )
}