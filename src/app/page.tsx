'use client'
import { ContainerProduct } from "@/app/components/containerProduct";
import { OptionCabecalho } from "./components/optionCabecalho";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center h-screen">
      <main className="flex flex-col items-center grow w-full md:m-auto lg:max-w-5xl">
        <OptionCabecalho></OptionCabecalho>
        <ContainerProduct/>
        
      </main>
      <footer className="flex flex-nowrap items-center justify-center">
        <a>Made by HSTECH</a>
      </footer>
    </div>
  );
}
