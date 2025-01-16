"use client"
import React, { ChangeEvent, createContext, ReactNode, useState } from 'react'
import { Cliente, Produto } from '@/app/components/containerProduct'

type MainContextData = {
    cliente?: Cliente;
    onReqSetCliente: (cliente: Cliente)=>void;
    produtos?: Array<Produto>;
    onReqSetProdutos: (produtosArr: Array<Produto>)=>void;
    valorTotal?: number;
    onReqSetValorTotal: (valor: number)=> void;
    imageLogo?: string;
    onReqSetImageLogo: (logo: string)=>void;
    cabecalho: CabecalhoProps | null;
    onReqSetCabecalho: (cabecalho: CabecalhoProps)=>void;
    query: number;
    onReqSetQuery: ()=>void;
    onReqHandleLogo: (e: ChangeEvent<HTMLInputElement>)=>void;
    onReqRemoveLogo: ()=>void;
    onReqHandleCabecalho: (formData: FormData)=>void;
    isOpenForm: boolean;
    onReqSetIsOpenForm: ()=>void;
}

type ContextProps = {
    children: ReactNode;
}

export interface CabecalhoProps {
    nome_fantasia: string;
    razao_social: string;
    cnpj: string;
    contato_empresa: string;
    logo: File;
}

export const MainContext = createContext({} as MainContextData);

export function MainProvider({ children } : ContextProps ) {
    const [cliente, setCliente] = useState<Cliente>();
    const [produtos, setProdutos] = useState<Array<Produto>>();
    const [valorTotal, setValorTotal] = useState<number>(0);
    const [imageLogo, setImageLogo] = useState<string>();
    const [cabecalho, setCabecalho] = useState<CabecalhoProps | null>(null);
    const [query, setQuery] = useState(0);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(cabecalho ? false : true);
    
    function onReqSetCliente(cliente : Cliente){
        setCliente(cliente);
    }

    function onReqSetProdutos(produtosArr: Array<Produto>){
        setProdutos(produtosArr);       
    }
    
    function onReqSetValorTotal(valor: number){
        setValorTotal(valorTotal+valor);
    }

    function onReqRemoveLogo(){
        localStorage.removeItem('logo');
        setImageLogo('');
        setQuery(Date.now());
    }

    function onReqHandleCabecalho(formData: FormData) {
        const data = Object.fromEntries(formData.entries());

        localStorage.setItem('header', JSON.stringify(data))

        setIsOpenForm(!isOpenForm)

        setQuery(Date.now())
    }

    function onReqSetImageLogo(logo: string){
        setImageLogo(logo);
    }
    function onReqSetCabecalho(cabecalho: CabecalhoProps){
        setCabecalho(cabecalho);
    }
    function onReqHandleLogo(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const reader = new FileReader();
            const image = e.target.files[0];
            reader.onloadend = () => {
                const base64Str = reader.result as string;
                localStorage.setItem('logo', base64Str);
                onReqSetImageLogo(base64Str);
            }
            reader.onerror = () => {
                window.alert('erro ao definir logo')
            }

            reader.readAsDataURL(image);
            setQuery(Date.now())
        }
    }
    function onReqSetQuery(){
        setQuery(Date.now());
    }
    function onReqSetIsOpenForm(){
        setIsOpenForm(!isOpenForm);
    }


    return(
        <MainContext.Provider value={{
            cliente,
            onReqSetCliente,
            produtos,
            onReqSetProdutos,
            valorTotal,
            onReqSetValorTotal,
            imageLogo,
            onReqSetImageLogo,
            cabecalho,
            onReqSetCabecalho,
            query,
            onReqSetQuery,
            onReqHandleLogo,
            onReqRemoveLogo,
            onReqHandleCabecalho,
            isOpenForm,
            onReqSetIsOpenForm
        }}>
        {children}
        </MainContext.Provider>
    )
}