'use client'

import { useContext, useEffect } from "react";
import { MainContext } from "@/providers/maincontext";
import Link from "next/link";

export function Modal() {
    const { isAllowedCookies, onReqSetIsAllowedCookies } = useContext(MainContext);
    useEffect(()=>{
        const localCookies = localStorage.getItem("isAllowedCookies");
        onReqSetIsAllowedCookies(localCookies ? true : false)
    })
    return (
        <>
            {
                isAllowedCookies ? <></> :
                    <div className="fixed mx-1 bottom-2 bg-slate-100 min-w-56 min-h-20 rounded-md m-auto
                        border-[1px] border-amber-600 shadow-sm shadow-black text-xs 
                        sm:text-lg sm:w-9/12 sm:text-left sm:p-4 sm:ml-20
                        md:text-lg md:w-7/12 md:ml-36
                        lg:w-6/12">
                        <div className="text-lg text-center p-1 sm:text-2xl md:text-3xl">
                            <h1>Este site usa Cookies!</h1>
                        </div>
                        <div className="px-1 text-left">
                            <p>Não armazenamos nenhum dado pessoal em nossos servidores!</p>
                            <p>É necessário o uso de cookies para melhorar sua experiência!</p>
                        </div>
                        <div className="px-1 text-left">
                            <p>Para saber mais informações acesse nossas <Link href='/politicasprivacidade' className="underline">Políticas de Privacidade</Link> e
                                nossos <Link href='/termosdeuso' className="underline">Termos de Uso</Link>.</p>
                        </div>

                        <button type="button" onClick={() => onReqSetIsAllowedCookies(true)}
                            className="flex flex-col rounded m-auto bg-black border-white border-2 px-1 py-0 self-center border-opacity-50 text-white font-bold mb-1">Aceitar!</button>
                    </div>
            }
        </>
    )
}