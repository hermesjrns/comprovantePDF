'use client'

import { useContext, useRef } from "react";
import { MainContext } from "@/providers/maincontext";
import Image from "next/image";
import Logo from '@/../public/logo.png';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

export default function Visualizar() {
    const { produtos, cliente, valorTotal, imageLogo, cabecalho, imageLogoWidth } = useContext(MainContext);
    const router = useRouter();
    const divRef = useRef(null);
    

    async function getImg() {
        const div = divRef.current
        const doc = new jsPDF('p', 'mm', 'a4');
        if (div != null) {
            const canvas = await html2canvas(div, { scale: 1.5 });
            const imgData = canvas.toDataURL('image/png');
            const imgProps = doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            let heightLeft = pdfHeight;
            let position = 0;

            //for debug image faster
            //window.open(imgData)

            doc.addImage(imgData, 'PNG', 0, position, 210, 297);
            heightLeft -= doc.internal.pageSize.getHeight();

            while (heightLeft >= 0) {
                position = heightLeft - pdfHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
                heightLeft -= doc.internal.pageSize.getHeight();
              }
            doc.addMetadata(`Created with:${process.env.NEXT_PUBLIC_URL_SITE} and made with jsPDF!`)
            doc.save('document.pdf');

        }
    }

    return (
        <main className="w-min h-min mx-auto" >
            <div className="m-auto flex-row flex justify-evenly gap-1 p-1 print:hidden">
                <button type="button" onClick={() => getImg()}
                    className="w-full rounded bg-black border-white border-2 p-0.5 self-center border-opacity-50 text-white font-bold items-center">Baixar PDF</button>
                <button type="button" onClick={() => window.print()}
                    className="w-full rounded bg-black border-white border-2 p-0.5 self-center border-opacity-50 text-white font-bold items-center">Imprimir</button>
                <button type="button" onClick={() => router.back()}
                    className="w-full rounded bg-black border-white border-2 p-0.5 self-center border-opacity-50 text-white font-bold items-center">Voltar</button>
            </div>
            <div ref={divRef} className={`a4-page`} style={{ letterSpacing: "0.01px" }}>
                {/* {isVisible && <ModalPrint enablePrint={true} enableVoltar={true} position='fixed left-[calc(50%-104mm)]'></ModalPrint>} */}
                <div className="border-black min-w-full min-h-full border-[1px] p-0 flex flex-col a4-content">
                    <header className=" flex flex-col border-b-[1px] border-black border- w-full m-0 p-0">
                        {/* Cabeçalho é aqui! */}
                        <div className={`m-0 inline-flex px-1`}>
                            {/* Cabeçalho Empresa */}
                            {
                                imageLogo ?
                                    <div className={`h-auto min-h-16 w-auto min-w-16 relative m-auto container`}>
                                        <Image src={imageLogo}
                                            alt='Logo' fill className="absolute object-contain "/>

                                    </div>
                                    :
                                    <div className="h-16 w-fit min-w-16 relative m-0 my-auto">
                                        <Image src={Logo} fill
                                            alt='Logo' className="absolute object-contain" />
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
                                            <div className="col-span-2 border-black border-r-[1px]">{prod.valor.toFixed(2).toString().replace('.', ',')}</div>
                                            <div className="col-span-2 text-right pr-1">{prod.subtotal?.toString().replace('.', ',')}</div>
                                        </div>

                                    ))
                                }
                            </>
                            :
                            <h1>Nenhum produto cadastrado</h1>
                        }
                    </main>
                    <footer className=" flex flex-col border-t-[1px] border-black w-full m-0 p-0">
                        {/* Rodapé é aqui! */}
                        <div className="w-full inline-flex px-1 border-t-[1px] border-black">
                            <span>Assinatura:</span>
                            <div className="w-full border-b-[1px] border-black pb-1 opacity-0"></div>
                            <span className="flex pl-1 text-nowrap border-l-[1px] border-black">Valor Total: R${valorTotal?.toFixed(2).toString().replace('.', ',')}</span>
                        </div>
                    </footer>
                </div>
                <div className="w-full text-xs text-center " style={{ letterSpacing: "0.01px" }}>
                    <p>Feito em: <a href={process.env.NEXT_PUBLIC_URL_SITE} className="underline">{process.env.NEXT_PUBLIC_URL_SITE}</a></p>
                </div>
            </div >
        </main>
    )
}