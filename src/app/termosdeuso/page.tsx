'use client'
import { Nav } from "@/app/components/header";
import { Footer } from "../components/footer";
import { useRouter } from "next/navigation";

export default function TermosDeUsoPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-items-center min-h-dvh grow">
            <Nav></Nav>
            <main className="flex flex-col justify-center items-center grow w-full md:m-auto lg:max-w-5xl h-full py-4 pb-8">
                <div className="flex flex-col justify-evenly p-4 flex-1">
                    <div className="block h-fit text-xs text-left p-2 sm:text-sm md:text-md">
                        <h2 className="text-2xl sm:text-4xl">1. Termos</h2>
                        <p className="p-2">Ao acessar ao site <a href={process.env.NEXT_PUBLIC_URL_SITE}>{process.env.NEXT_PUBLIC_NAME_SITE}</a>, concorda em cumprir estes
                            termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de
                            todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar
                            este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais
                            aplicáveis.</p>
                        <h2 className="text-2xl sm:text-4xl">2. Uso de Licença</h2>
                        <p className="p-2">É concedida permissão para baixar temporariamente uma cópia dos materiais
                            (informações ou software) no site {process.env.NEXT_PUBLIC_NAME_SITE}. Esta é
                            a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
                        <ol className="p-4 list-inside list-disc">
                            <li>modificar ou copiar os materiais;</li>
                            <li>tentar descompilar ou fazer engenharia reversa de qualquer software
                                contido no site {process.env.NEXT_PUBLIC_NAME_SITE};</li>
                            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos
                                materiais.</li>
                        </ol>
                        <p className="p-2">Esta licença será automaticamente rescindida se você violar alguma dessas
                            restrições e poderá ser rescindida por {process.env.NEXT_PUBLIC_NAME_SITE} a qualquer momento. Ao encerrar a visualização desses materiais
                            ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato
                            eletrónico ou impresso.</p>
                        <h2 className="text-2xl sm:text-4xl">3. Isenção de responsabilidade</h2>
                        <ol className="p-4 list-inside list-disc">
                            <li>Os materiais no site da {process.env.NEXT_PUBLIC_NAME_SITE} são fornecidos 'como estão'. {process.env.NEXT_PUBLIC_NAME_SITE} não
                                oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias,
                                incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim
                                específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                            <li>Além disso, o {process.env.NEXT_PUBLIC_NAME_SITE} não garante ou faz qualquer representação relativa à
                                precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma
                                relacionado a esses materiais ou em sites vinculados a este site.</li>
                        </ol>
                        <h2 className="text-2xl sm:text-4xl">4. Limitações</h2>
                        <p className="p-2">Em nenhum caso o {process.env.NEXT_PUBLIC_NAME_SITE} ou seus fornecedores serão responsáveis por
                            quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos
                            negócios) decorrentes do uso ou da incapacidade de usar os materiais em {process.env.NEXT_PUBLIC_NAME_SITE}, mesmo que {process.env.NEXT_PUBLIC_NAME_SITE} ou um
                            representante autorizado da {process.env.NEXT_PUBLIC_NAME_SITE} tenha sido notificado oralmente ou por escrito da possibilidade de tais
                            danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de
                            responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>
                        <h2 className="text-2xl sm:text-4xl">5. Precisão dos materiais</h2>
                        <p className="p-2">Os materiais exibidos no site da {process.env.NEXT_PUBLIC_NAME_SITE} podem incluir erros técnicos,
                            tipográficos ou fotográficos. {process.env.NEXT_PUBLIC_NAME_SITE} não garante que qualquer material em seu site seja preciso, completo ou
                            atual. {process.env.NEXT_PUBLIC_NAME_SITE} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No
                            entanto, {process.env.NEXT_PUBLIC_NAME_SITE} não se compromete a atualizar os materiais.</p>
                        <h2 className="text-2xl sm:text-4xl">6. Links</h2>
                        <p className="p-2">O {process.env.NEXT_PUBLIC_NAME_SITE} não analisou todos os sites vinculados ao seu site e não é
                            responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso 
                            por {process.env.NEXT_PUBLIC_NAME_SITE} do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>
                            <p className="p-2"><br /></p>
                        <h3 className="text-xl sm:text-2xl">Modificações</h3>
                        <p className="p-2">O {process.env.NEXT_PUBLIC_NAME_SITE} pode revisar estes termos de serviço do site a qualquer momento, sem
                            aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de
                            serviço.</p>
                        <h3 className="text-xl sm:text-2xl">Lei aplicável</h3>
                        <p className="p-2">Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou
                            localidade.</p>
                    </div>
                </div>
                <button type="button" onClick={router.back}
                    className="block rounded-md bg-black border-white shadow-black shadow-sm border-2 p-1 self-center border-opacity-50 text-white font-bold text-center
                    hover:scale-105  transition-all">Voltar</button>
            </main>
            <Footer></Footer>
        </div>
    );
}
