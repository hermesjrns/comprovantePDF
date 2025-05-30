"use client"
import React, { ChangeEvent, createContext, ReactNode, useState } from 'react';
import { Cliente, Produto } from '@/app/components/containerProduct';
import { cabecalhoSchema } from '@/config/ZodSchema';


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
    onReqSetIsOpenForm: (value: boolean)=>void;
    isAllowedCookies?: boolean;
    onReqSetIsAllowedCookies: (value: boolean)=>void;
    imageLogoWidth?: number;
    error?: string;
    onReqSetError: (msg: string)=>void;
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
    const [imageLogoWidth, setImageLogoWidth] = useState<number>();
    const [cabecalho, setCabecalho] = useState<CabecalhoProps | null>(null);
    const [query, setQuery] = useState(0);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(cabecalho ? false : true);
    const [isAllowedCookies, setIsAllowedCookies] = useState<boolean>();
    const [error, setError] = useState('');
    
    function onReqSetError(msg: string){
        setError(msg);
    }
    
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
        const result = cabecalhoSchema.safeParse(data);
        if(!result.success){
            const erros = result.error.errors.map((err)=> err.message)
            console.log(erros)
            setError(erros.toString())
            return;
        }
        
        localStorage.setItem('header', JSON.stringify(result.data))

        setIsOpenForm(!isOpenForm)
        
        setError('Cabeçalho salvo!')

        
        setTimeout(() => {
            setError('')
        }, 1000);
        
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

            if((image.type !== 'image/jpeg') && (image.type !== 'image/png')){
                setError('Imagem deve ser no formato PNG ou JPEG! Favor envie no formato solicitado!')
                return;
            }

            const img = new Image();
            
            
            img.onload = ()=>{
                setImageLogoWidth(img.width)

            }

            reader.onloadend = () => {
                const base64Str = reader.result as string;
                localStorage.setItem('logo', base64Str);
                onReqSetImageLogo(base64Str);
            }
            
            reader.onerror = () => {
                window.alert('erro ao definir logo')
            }
            
            img.src = URL.createObjectURL(image)
            reader.readAsDataURL(image);
            setQuery(Date.now())
            setError('')
        }
    }
    function onReqSetQuery(){
        setQuery(Date.now());
    }

    function onReqSetIsOpenForm(value: boolean){
        setIsOpenForm(value);
    }
    
    function onReqSetIsAllowedCookies(value: boolean){
        if(value === true) {
            localStorage.setItem("isAllowedCookies", 'true')
        }
        setIsAllowedCookies(value)
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
            onReqSetIsOpenForm,
            isAllowedCookies,
            onReqSetIsAllowedCookies,
            imageLogoWidth,
            error,
            onReqSetError
        }}>
        {children}
        </MainContext.Provider>
    )
}