'use client'

import { useRouter } from "next/navigation";


type ModalPrintProps = {
    enableVoltar: boolean;
    enablePrint: boolean;
    position: string;
}

export function ModalPrint({enablePrint, enableVoltar, position}:ModalPrintProps) {
    const router = useRouter();
    
    return (
        <div className={`bg-gray-300 rounded-md z-50
                        border-[1px] border-black shadow-sm shadow-black text-xs 
                        w-min p-1
                        ${position}
                        opacity-70
                        print:hidden
                        `}>
            <div className="flex flex-col gap-2 items-center">
                {enablePrint &&
                    <button type="button" onClick={window.print}
                        className="flex flex-col rounded w-full bg-black border-white border-2 p-0.5 self-center border-opacity-50 text-white font-bold items-center">Imprimir</button>
                }
                {enableVoltar &&
                    <button type="button" onClick={router.back}
                        className="flex flex-col rounded w-full bg-black border-white border-2 p-0.5 self-center border-opacity-50 text-white font-bold items-center">Voltar</button>
                }
            </div>
        </div>
    )
}