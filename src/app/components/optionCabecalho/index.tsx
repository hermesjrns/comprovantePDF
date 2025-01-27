'use client'
import Image from "next/image";
import { useEffect, useContext, useState, ChangeEvent } from "react";
import { MainContext } from "@/providers/maincontext";
import { CnpjMask, ContactMask } from "@/config/mask";



export function OptionCabecalho() {
    const { imageLogo, onReqSetImageLogo, cabecalho, onReqSetCabecalho, query, onReqHandleLogo, onReqRemoveLogo, onReqHandleCabecalho, isOpenForm, onReqSetIsOpenForm, error } = useContext(MainContext);

    const [isCabecalhoExtendido, setIsCabecalhoExtendido] = useState<boolean>(true);
    const [maskedCnpjValue, setMaskedCnpjValue] = useState('');
    const [maskedContactValue, setMaskedContactValue] = useState('');

    useEffect(() => {
        const header = localStorage.getItem('header');
        const logo = localStorage.getItem('logo');
        if (logo) {

            onReqSetImageLogo(logo);
        }

        onReqSetCabecalho(header && JSON.parse(header));
        if (header && logo) {
            setIsCabecalhoExtendido(false);
            onReqSetIsOpenForm(false)
        }
    }, [query])

    const handleCnpjMask = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const numericValue = value.replace(/\D/g, "");
        
        let maskedVarValue = CnpjMask(numericValue);
        if (maskedVarValue.length > 18 ) return;

        setMaskedCnpjValue(maskedVarValue);
    }
    
    const handleContactMask = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const numericValue = value.replace(/\D/g, "");

        let maskedVarContactValue = ContactMask(numericValue);
        if (maskedVarContactValue.length > 16 ) return;

        setMaskedContactValue(maskedVarContactValue);
    }

    return (
        <div className="flex flex-col min-w-72 w-full gap-1 text-xs p-1 sm:w-full sm:p-4 md:p-4 lg:p-4 xl:p-4 ">
            
            {(cabecalho && !isOpenForm) &&
                <div className="flex flex-col w-full bg-gray-200 rounded p-1 border-2 border-black sm:p-2 md:p-2 lg:p-2 xl:p-2 transition-all">
                    {isCabecalhoExtendido ? <>
                        <button className=" ease-in-out text-xs font-medium hover:scale-105 transition-all sm:text-sm" onClick={() => setIsCabecalhoExtendido(false)}>
                            Encolher Cabeçalho 👆
                        </button>
                        <div className="">Nome fantasia: {cabecalho.nome_fantasia}</div>
                        <div className="">Razão social: {cabecalho.razao_social}</div>
                        <div className="">CNPJ: {cabecalho.cnpj}</div>
                        <div className="">Contato: {cabecalho.contato_empresa}</div>
                        {imageLogo &&
                            <div>
                                Logo:
                                <div className="h-12 w-12 relative">
                                    <Image alt='logo preview' fill src={imageLogo} className="absolute object-fill"></Image>
                                </div>
                            </div>
                        }
                        <button type="button" onClick={() => onReqSetIsOpenForm(true)}
                            className="flex flex-col self-center py-0 px-1 rounded bg-green-600 border-2 border-black border-opacity-50 text-xs
                                sm:text-sm">Editar cabeçalho</button>
                    </>
                        :
                        <>
                            <button className="text-xs font-medium hover:scale-105 transition-all sm:text-sm" onClick={() => setIsCabecalhoExtendido(true)}>
                                Extender Cabeçalho 👇
                            </button>
                        </>
                    }
                </div>
            }

            {/* Formulário do cabeçalho! */}
            {
                isOpenForm &&
                <form action={onReqHandleCabecalho} className="flex flex-col w-full bg-gray-200 rounded p-1 border-2 border-black sm:p-2 md:p-2 lg:p-2 xl:p-2">

                    <h2>Cabeçalho:</h2>
                    <div className="flex flex-col items-start text-xs sm:text-sm">
                        <label>Nome Fantasia:</label>
                        <input type="text" name="nome_fantasia" defaultValue={cabecalho?.nome_fantasia}
                            placeholder="Digite o nome fantasia da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs sm:text-sm">
                        <label>Razão Social:</label>
                        <input type="text" name="razao_social" defaultValue={cabecalho?.razao_social}
                            placeholder="Digite a razao social da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs sm:text-sm">
                        <label>CNPJ:</label>
                        <input type="text" name="cnpj" value={ maskedCnpjValue ? maskedCnpjValue : cabecalho?.cnpj } onChange={handleCnpjMask}
                            placeholder="Digite o CNPJ da empresa: xx.xxx.xxx/xxxx-xx" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs sm:text-sm">
                        <label>Contato:</label>
                        <input type="text" name="contato_empresa" value={ maskedContactValue ? maskedContactValue : cabecalho?.contato_empresa } onChange={handleContactMask}
                            placeholder="Digite o contato da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs sm:text-sm">
                        <label>Logo da empresa:</label>
                        {
                            imageLogo
                                ?
                                <div className="flex flex-row gap-4 justify-evenly w-full">
                                    <div className="rounded w-16 h-16 p-0.5 sm:p-1 relative " onClick={() => onReqRemoveLogo()}>
                                        <Image src={imageLogo} alt='logo' fill className="object-fill absolute" />

                                    </div>
                                    <div className="flex-col flex items-start justify-evenly">
                                        <span>Clique na logo para removê-la</span>
                                        <p className="text-[9px] text-red-600 sm:text-xs">Para melhor adequação da logo é necessário que a altura seja igual a altura!</p>
                                    </div>


                                </div>
                                :
                                <div className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center">
                                    <input type="file" name="logo" accept='image/png, image/jpeg' onChange={onReqHandleLogo}
                                        placeholder="Escolha a logo da sua empresa" className="self-center p-0.5 sm:p-1 text-center" />
                                </div>
                        }

                    </div>
                    <button type="submit"
                        className="flex flex-col m-auto self-center py-0 px-1 rounded bg-green-600 border-2 border-black border-opacity-50 text-sm">Definir cabeçalho</button>
                </form>
            }
        </div>
    )
}