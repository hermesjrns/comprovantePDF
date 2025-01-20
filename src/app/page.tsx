'use client'
import { Nav } from "./components/header";
import { Footer } from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center h-dvh grow">
      <Nav></Nav>
      <main className="flex flex-col justify-center items-center grow w-full md:m-auto lg:max-w-5xl h-full">
        <div className="flex flex-col justify-evenly min-h-fit h-[80%] p-4">
          <div className="block text-4xl p-2 text-center self-start sm:text-6xl">
            <h1>CPDF</h1>
            <p className="text-sm sm:text-lg">Crie comprovantes, orçamentos, cupons em PDF agora mesmo!</p>
          </div>
          <div className="block w-full text-lg text-center p-4 sm:text-2xl">
            <h2>Vários recursos para você!</h2>
            <ul className="text-sm w-full font-light text-left list-outside py-2 sm:text-lg">
              <li className="list-disc marker:text-amber-600">Calculo automático de valores!</li>
              <li className="list-disc marker:text-amber-600">Items com:
                <ul className="list-inside text-xs sm:text-lg">
                  <li className="list-disc marker:text-amber-400">nome do produto</li>
                  <li className="list-disc marker:text-amber-400">quantidade</li>
                  <li className="list-disc marker:text-amber-400">valor</li>
                  <li className="list-disc marker:text-amber-400">total de items.</li>
                </ul>
              </li>
              <li className="list-disc marker:text-amber-600 text-xs sm:text-lg">Cabeçalho completo com:
                <ul className="list-inside">
                  <li className="list-disc marker:text-amber-400">Dados da sua empresa</li>
                  <li className="list-disc marker:text-amber-400">Dados do seu cliente</li>
                  <li className="list-disc marker:text-amber-400">Logo da sua empresa</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-center text-xl w-fit m-auto gap-2 sm:text-2xl ">
            <h1>Acesse a ferramenta:</h1>
            <Link href={'/criar'} className="">
              <button type="button"
                className="flex flex-col w-full rounded-md bg-black border-white shadow-black shadow-sm border-2 p-2 self-center border-opacity-50 text-white font-bold text-center
                  hover:scale-105 hover:bg-green-600  transition-all">Criar Agora</button>

            </Link>
          </div>
        </div>

      </main>
     <Footer></Footer>
    </div>
  );
}
