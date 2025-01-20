import Link from "next/link"
export function Footer() {
    return (
        <footer className="flex flex-row justify-around w-full text-sm">
            <ul className="flex flex-row items-center min-w-screen-sm max-w-screen-sm w-screen justify-evenly">
                <li>
                    <Link href={'/politicasprivacidade'}>Politica de privacidade</Link>
                </li>
                <li>
                    <Link href={'/termosdeuso'}>Termos de Uso</Link>
                </li>
                <li className="hidden sm:block">
                    <span>Made by {process.env.NEXT_PUBLIC_NAME_SITE}</span>
                </li>
            </ul>
        </footer>
    )
}