'use client'
import Image from "next/image";
import { useEffect, useContext } from "react";
import { MainContext } from "@/providers/maincontext";



export function OptionCabecalho() {
    // const [imageLogo, setImageLogo] = useState<string>();
    // const [cabecalho, setCabecalho] = useState<CabecalhoProps | null>();
    // const [query, setQuery] = useState(0);
    // const [isOpenForm, setIsOpenForm] = useState<boolean>();
    const {imageLogo, onReqSetImageLogo, cabecalho, onReqSetCabecalho, query, onReqHandleLogo, onReqRemoveLogo, onReqHandleCabecalho, isOpenForm, onReqSetIsOpenForm } = useContext(MainContext);


    useEffect(() => {
        const header = localStorage.getItem('header');
        const logo = localStorage.getItem('logo');
        if (logo) {

            onReqSetImageLogo(logo);
        }

        onReqSetCabecalho(header && JSON.parse(header));
    }
        , [query])


    // function handleLogo(e: ChangeEvent<HTMLInputElement>) {
    //     if (e.target.files) {
    //         const reader = new FileReader();
    //         const image = e.target.files[0];
    //         reader.onloadend = () => {
    //             const base64Str = reader.result as string;
    //             //if (base64Str) {
    //             localStorage.setItem('logo', base64Str)
    //             onReqSetImageLogo(base64Str)
    //             //}
    //         }
    //         reader.onerror = () => {
    //             window.alert('erro aí viado')
    //         }

    //         reader.readAsDataURL(image);
    //         setQuery(Date.now())
    //     }
    // }

    // function handleCabecalho(formData: FormData) {
    //     const data = Object.fromEntries(formData.entries());

    //     localStorage.setItem('header', JSON.stringify(data))

    //     setIsOpenForm(!isOpenForm)

    //     setQuery(Date.now())
    // }

    // function removeLogo(){
    //     localStorage.removeItem('logo');
    //     setImageLogo('');
    //     setQuery(Date.now());
    // }

    return (
        <div className="flex flex-col min-w-72 w-full gap-1 p-0.5 sm:w-full sm:p-4">
            {(cabecalho && !isOpenForm) &&
                <div className="flex flex-col w-full bg-gray-200 rounded ">
                    <div className="">Nome fantasia: {cabecalho.nome_fantasia}</div>
                    <div className="">Razão social: {cabecalho.razao_social}</div>
                    <div className="">CNPJ: {cabecalho.cnpj}</div>
                    <div className="">Contato: {cabecalho.contato_empresa}</div>
                    {imageLogo &&
                        <div>
                            Logo:
                            <div className="h-12 w-12 relative">
                                <Image alt='logo preview' fill src={imageLogo} className="absolute object-cover"></Image>
                            </div>
                        </div>
                    }
                    <button type="button" onClick={() => onReqSetIsOpenForm()}
                        className="flex flex-col self-center py-0 px-1 rounded bg-green-600 border-2 border-black border-opacity-50 text-sm">Editar cabeçalho</button>
                </div>
            }

            {/* Formulário do cabeçalho! */}
            {
                isOpenForm &&
                <form action={onReqHandleCabecalho}>
                    <h2>Cabeçalho:</h2>
                    <div className="flex flex-col items-start text-xs">
                        <label>Nome Fantasia:</label>
                        <input type="text" name="nome_fantasia" defaultValue={cabecalho?.nome_fantasia}
                            placeholder="Digite o nome fantasia da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs">
                        <label>Razão Social:</label>
                        <input type="text" name="razao_social" defaultValue={cabecalho?.razao_social}
                            placeholder="Digite a razao social da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs">
                        <label>CNPJ:</label>
                        <input type="text" name="cnpj" defaultValue={cabecalho?.cnpj}
                            placeholder="Digite o CNPJ da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs">
                        <label>Contato:</label>
                        <input type="text" name="contato_empresa" defaultValue={cabecalho?.contato_empresa}
                            placeholder="Digite o contato da empresa" className="border-2 border-black rounded w-full p-0.5 sm:p-1 text-center" />
                    </div>
                    <div className="flex flex-col items-start text-xs">
                        <label>Logo da empresa:</label>
                        {
                            imageLogo
                                ?
                                <div>
                                    <span>Clique na logo para removê-la</span>
                                    <div className="rounded w-12 h-12 p-0.5 sm:p-1 text-center relative" onClick={()=>onReqRemoveLogo()}>
                                        <Image src={imageLogo} alt='logo' fill className="object-contain" />

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
                        className="flex flex-col self-center py-0 px-1 rounded bg-green-600 border-2 border-black border-opacity-50 text-sm">Definir cabeçalho</button>
                </form>
            }
        </div>
    )
}