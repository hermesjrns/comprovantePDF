'use client'
import { Nav } from "@/app/components/header";
import { Footer } from "../components/footer";

export default function PoliticasEPrivacidadePage() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-dvh grow">
            <Nav></Nav>
            <main className="flex flex-col justify-center items-center grow w-full md:m-auto lg:max-w-5xl h-full py-4 pb-8">
                <div className="flex flex-col justify-evenly p-4 flex-1">
                    <div className="block h-fit text-xs text-left p-2 sm:text-sm md:text-md">
                        <h1 className="text-3xl p-2 text-center sm:text-4xl">Políticas de Privacidade</h1>
                        <p>
                            A sua privacidade é importante para nós.
                            É política do {process.env.NEXT_PUBLIC_NAME_SITE} respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site {process.env.NEXT_PUBLIC_NAME_SITE},
                            e outros sites que possuímos e operamos.
                        </p>
                        <br />
                        <p>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                            Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                            Também informamos por que estamos coletando e como será usado.
                        </p>
                        <br />
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>
                        <br />
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>
                        <br />
                        <p>
                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade
                        </p>
                        <br />
                        <p>
                            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                        </p>
                        <br />
                        <p>
                            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                        </p>
                        <br />
                        <ul className="p-4 list-outside list-disc">
                            <li className="py-1">
                                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
                            </li>
                            <li className="py-1">
                                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
                            </li>
                            <li className="py-1">
                                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                            </li>
                            <li className="py-1">
                                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
                            </li>
                        </ul>

                    </div>
                    <div className="block h-fit text-xs text-left p-2 py-4 sm:text-sm md:text-md">
                        <h2 className="text-3xl text-center py-4 sm:text-4xl">Compromisso do Usuário</h2>
                        <p>
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o {process.env.NEXT_PUBLIC_NAME_SITE} oferece no site e com caráter enunciativo, mas não limitativo:
                        </p>
                        <br />
                        <ol className="p-4 list-outside list-decimal">
                            <li className="py-1">
                                Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                            </li>
                            <li className="py-1">
                                Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, bbebbet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                            </li>
                            <li className="py-1">
                                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                            </li>
                            <li className="py-1">
                                Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do {process.env.NEXT_PUBLIC_NAME_SITE}, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                            </li>
                        </ol>
                        <h2 className="text-3xl text-center py-4 sm:text-4xl">
                            Mais informações
                        </h2>
                        <p>
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                        </p>
                        <br />
                        <div className="flex flex-col w-full">
                        <span className="text-center font-medium">Esta política é efetiva a partir de 20 de Janeiro de 2025 ás 18:00 horário de Brasília.</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
