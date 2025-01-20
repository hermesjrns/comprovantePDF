'use client'
import { Nav } from "../components/header";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "../components/footer";

export default function Contato() {

    const [isCopying, setIsCopying] = useState(false);

    const copyEmail = () => {
        setIsCopying(true)
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTACT_EMAIL as string)
        setTimeout(()=>{
            setIsCopying(false)
        }, 400)
    }

    return (
        <div className="h-screen">
            <Nav></Nav>
            <main className="flex flex-col h-[calc(100dvh-68px)] grow items-center justify-center realtive">
                <div className="flex flex-col items-center absolute top-[15%] ">
                    <h1 className="text-2xl sm:text:4xl md:text-6xl text-center px-2 py-4">Redes</h1>
                    <div className="flex flex-row self-center w-full h-full justify-evenly py-4 gap-4 md:gap-8">
                        <Link href={process.env.NEXT_PUBLIC_CONTACT_GITHUB as string} title="Github" className="flex size-9 sm:size-20 md:size-40 hover:bg-slate-200 transition-all rounded-full hover:scale-105">
                            <FaGithub className="size-9 sm:size-20 md:size-40" ></FaGithub>
                        </Link>
                        <button onClick={copyEmail} title={`Copiar e-mail: ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                            className="relative w-9 h-9 sm:w-20 sm:h-20 md:size-40 hover:bg-slate-200 transition-all duration-300 rounded-full hover:scale-105">
                            
                            <div className="absolute inset-0 transition-all duration-300 ease-in-out">
                                
                                <ImMail4 className={`size-9 sm:size-20 md:size-40 ease-in-out after:ease-in-out transition-all ${isCopying ? 'opacity-0' : 'opacity-100'}`}/>
                                        {
                                        isCopying &&
                                            <>
                                                <FaRegCopy className={` size-4 sm:size-10 md:size-24 absolute left-0 right-0 top-0 bottom-1 m-auto after:ease-in-out transition-all ${isCopying ? 'opacity-100' : 'opacity-0'}`}/>
                                                    <p className="text-[8px] sm:text-xs md:text-sm absolute left-0 right-0 m-auto bottom-0.5 sm:bottom-2 md:bottom-3 ">Copiado!</p>
                                                </>
                                        }
                            </div>
                        </button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}