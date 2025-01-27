'use client'
import { useContext } from "react";
import { MainContext } from "@/providers/maincontext";

export function ErrorModal() {
    const { error, onReqSetError } = useContext(MainContext);
    const errors = error?.split(',')

    return (
        <>
            {error &&
                <div className="flex flex-col min-w-72 w-full text-xs px-1 sm:w-full sm:px-4 md:px-4 lg:px-4 xl:px-4 md:text-md">
                    <div className="flex flex-col w-full text-center m-auto p-0.5 bg-red-500 rounded border-2 border-black transition-all font-semibold text-white">
                        {errors && errors.map((err) => (
                            <span className="" key={err}>
                                {err.valueOf()}
                            </span>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}