import Link from "next/link"
export function Nav(){
    return (
        <header className="flex flex-row w-full justify-center bg-gray-200 p-2 text-lg print:hidden">
            <Link href="/" className="fixed left-0 hidden sm:flex pl-2">HSTECH</Link>
            <li className="flex flex-row items-center min-w-screen-sm max-w-screen-sm w-screen justify-evenly">
                <ul>Criador de notas</ul>
                <ul>Contato</ul>
                <ul><Link href={'/cabeçalho'}>Cabeçalho</Link></ul>
            </li>
        </header>
    )
}