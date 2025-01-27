'use client'
import { ContainerProduct } from "@/app/components/containerProduct";
import { OptionCabecalho } from "@/app/components/optionCabecalho";
import { Nav } from "@/app/components/header";
import { Footer } from "../components/footer";
import { ErrorModal } from "../components/errorModal";
// import { AdBanner } from "../components/AdSense/AdBanner./AdBanner";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center h-[100dvh]">
      <Nav></Nav>
      <main className="flex flex-col items-center grow w-full  md:m-auto 
        sm:max-w-xl
        md:max-w-2xl
        lg:max-w-3xl">
        <OptionCabecalho></OptionCabecalho>
        <ErrorModal></ErrorModal>
        <ContainerProduct/>
        {/* <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="5027419837"></AdBanner> */}
      </main>
      <Footer></Footer>
    </div>
  );
}
