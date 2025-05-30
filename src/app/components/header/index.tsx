import Link from "next/link"
export function Nav(){
        return (
        <header className="flex flex-row top-0 left-0 w-full justify-center bg-gray-200 p-1 text-lg print:hidden">
            {/* <Link href="/" className="fixed left-0 hidden sm:flex pl-2">{process.env.NEXT_PUBLIC_NAME_SITE}</Link> */}
            <ul className="flex flex-row items-center min-w-screen-sm max-w-screen-sm w-screen justify-evenly">
                <li className="rounded px-1 hover:underline hover:scale-105 hover:bg-slate-300 transition-all"><Link href="/">{process.env.NEXT_PUBLIC_NAME_SITE}</Link></li>
                <li className="rounded px-1 hover:underline hover:scale-105 hover:bg-slate-300 transition-all"><Link href={'/criar'}>Criar Nota</Link></li>
                <li className="rounded px-1 hover:underline hover:scale-105 hover:bg-slate-300 transition-all"><Link href={'/contato'}>Contato</Link></li>
            </ul>
        </header>
    )
}