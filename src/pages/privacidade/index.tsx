/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import {FiDownload} from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

import { PrivacidadeStyled } from "../../styles/privacidade"

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function Privacidade(){
    return(
        <PrivacidadeStyled>
            <Head>
                <title>Grupo Rio - Termo de Privacidade</title>
                <meta name="description" content="O GRUPO RIO, reconhece a importância de proteger a privacidade de todos os usuários de seu website." />
            </Head>

            <NavBar/>

            <section>
                <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "backInOut"}}>PRIVACIDADE</motion.h1>
            </section>

            <section>
                <h2>POLÍTICA DE PRIVACIDADE DO WEBSITE DA EMPRESA</h2>

                <p>
                O GRUPO RIO, reconhece a importância de proteger a privacidade de todos os usuários de seu website.<br/>
                Trazemos aqui as informações acerca de como coletamos e utilizamos seus dados pessoais quando você acessa nosso website. Nós nunca venderemos seus dados, nem deixaremos que terceiros tenham acesso aos seus dados sem a devida autorização, conforme esclarecemos nesta política.
                </p>

                <h3>QUEM SOMOS?</h3>

                <p>
                A JUPITER SERVIÇO DE PESQUISAS CADASTRAIS, é uma empresa privada inscrita no 21.969.140/0001-42 – Largo São Francisco de Paula, 42 – 4° andar, Centro – RJ, CEP: 20051-070 – Telefone; (21)3505-7560 – e-mail: contato@rjgrupo.com.br.<br/>
                Ela é a principal controladora dos dados pessoais que trafegam por este website.
                </p>

                <h3>QUAIS DADOS COLETAMOS?</h3>

                <p>
                Quando você utiliza nosso website para acessar nossos serviços, coletamos seus dados de identificação, contato e localização conforme você preencha os campos apropriados em nosso website para utilizar as funcionalidades disponíveis.<br/>
                Também coletamos as comunicações feitas conosco, além de nome de usuário e credenciais de login no caso de ser criada uma conta de usuário em nosso website.
                </p>

                <h3>COMO COLETAMOS SEUS DADOS?</h3>

                <p>
                Coletamos informações de identificação pessoal e de contato dos usuários para as finalidades de gestão de contas de usuários, estabelecer comunicação com os usuários e visitantes do site, retornar contato e realizar a prestação de nossos serviços. Esses dados serão mantidos conosco pelo tempo necessário para atendermos a cada uma dessas finalidades.<br/>
                Sempre que você utilizar o website e os serviços disponibilizados a você via web, usaremos seus dados para identificação e validação de acesso, possibilitando que utilize os serviços de forma segura, de modo a aumentarmos a proteção contra fraudes e danos aos usuários e a terceiros.<br/>
                As diversas funcionalidades e serviços disponibilizados em domínios e websites específicos ou dedicados do GRUPO RIO estarão sujeitas às próprias políticas, que podem ser encontradas em cada site.<br/> Também guardamos registros de todos os acessos ao website e ao app pelo prazo de 6 meses da coleta, conforme exigido pelo Marco Civil da Internet (Lei nº 12.965/2014).
                </p>
                
                <h3>COMO TRATAMOS OS SEUS DADOS PESSOAIS?</h3>

                <p>
                Os dados coletados se restringem ao mínimo necessário para a realização dos propósitos indicados , conforme constar nos formulários e documentos que forem preenchidos.<br/>
                Esses dados serão guardados por nós durante todo o relacionamento com você e, depois de seu término, pelo tempo necessário para a defesa de nossos direitos e o cumprimento das obrigações legais e regulatórias a que estamos sujeitos.
                </p>

                <h3>COMO GUARDAMOS OS SEUS DADOS?</h3>

                <p>
                Seus dados são mantidos em nossos servidores e em servidores de nuvem contratados por nós com empresas localizadas no Brasil, mediante contrato adequado para a operação de seus dados pessoais de forma segura e responsáveis.<br/>
                Tomamos as precauções necessárias para evitar a perda e o vazamento de seus dados e controlamos o acesso às informações que temos sobre você pelo uso de medidas técnicas e de gestão adequadas para a sensibilidade do tipo de informações que controlamos.
                </p>

                <h3>QUEM MAIS TEM ACESSO A SEUS DADOS?</h3>

                <p>
                O GRUPO RIO pode compartilhar seu website com terceiros, na medida necessária para atingir os fins específicos de nosso website, quais sejam:<br/>
                <ul>
                    <li>Empresas de hospedagem do website.</li>
                    <li>Plataformas de gerenciamento do website.</li>
                    <li>Empresas de serviços de operação de dados em nuvem.</li>
                    <li>Aplicações de comunicação via internet.</li>
                </ul>
                As empresas terceiras que fornecem funcionalidades especiais a nosso website por meio de suas aplicações próprias poderão coletar e utilizar dados pessoais conforme suas próprias políticas de privacidade.<br/>
                Recomendamos que verifiquem as políticas de privacidade providenciados no momento da utilização dessas funcionalidades.
                </p>

                <h3>QUAIS SÃO OS SEUS DIREITOS COM RELAÇÃO À COLETA E USO DOS SEUS DADOS?</h3>

                <p>
                Nós garantimos os seguintes direitos aos usuários com relação à coleta e uso de dados por meio de nosso website, em adição a outros direitos previstos na legislação aplicável:<br/>
                <ul>
                    <li>A confirmação de existência de tratamento de seus dados pessoais por nós.</li>
                    <li>O acesso aos dados detidos por essa entidade.</li>
                    <li>A correção de eventuais dados incompletos, inexatos ou desatualizados.</li>
                    <li>O bloqueio, a eliminação ou a anonimização de dados desnecessários, excessivos ou tratados em desconformidade com a legislação, bem como oposição ao tratamento desses dados nas mesmas hipóteses.</li>
                    <li>Portabilidade dos seus dados pessoais a outra empresa, na medida em que seja exigida por regulamentos oficiais sobre o assunto.</li>
                    <li>A eliminação, quando requerida, dos dados pessoais coletados mediante seu consentimento, na forma da legislação aplicável.</li>
                    <li>Informação das entidades públicas e privadas com as quais houve uso compartilhado de seus dados.</li>
                    <li>Informação sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa, nos casos em que seus dados forem coletados e tratados mediante consentimento.</li>
                    <li>A revogação do seu consentimento para coleta e tratamento de dados nestes mesmos casos.</li>
                </ul>
                Seus direitos poderão ser exercidos mediante contato feito através dos nossos canais de atendimento listados abaixo. Caso esteja insatisfeito, a legislação brasileira garante a você a possibilidade de levar sua reclamação à ANPD – Autoridade Nacional de Proteção de Dados Pessoais.
                </p>
                
                <h3>
                COMO NOSSAS PRÁTICAS DE PRIVACIDADE PODERÃO SER ALTERADAS?
                </h3>

                <p>
                Nossas políticas e práticas quanto à privacidade e proteção de dados são objeto de constante revisão e atualização para adequar-se aos mais elevados padrões nacionais e internacionais, podendo ser alteradas a qualquer tempo.<br/>
                Nossas políticas e avisos de privacidade serão atualizados em nosso website/app para refletir tais alterações e suas versões mais recentes serão publicadas nesta página.<br/>
                A última atualização desta política foi realizada em 01/07/2021.
                </p>

                <h3>COMO ENTRAR EM CONTATO CONOSCO?</h3>

                <p>
                Para quaisquer dúvidas acerca de nossa política de privacidade, quanto aos dados que possuímos sobre você ou qualquer outra solicitação ou reclamação quanto à sua privacidade ou seus direitos relacionados a este website , por favor, entre em contato com nosso Encarregado pelo Tratamento de Dados Pessoais, pelos seguintes canais:
                </p>

                <article>
                    CRISTIANO DE ARAUJO SOUZA<br/>
                    CPF: 11523133716<br/>
                    Endereço: Av. Rio Branco, 80 - 13° andar, Centro, Rio de Janeiro - RJ<br/>
                    CEP: 20040-070<br/>
                    Email: cristiano.araujo@rjgrupo.com.br<br/>
                </article>

                <h2>ANEXOS</h2>

                <div id="anexos">
                    <a href="/privacidade/anexos/LGPD_Aviso-de-privacidade-dos-Fornecedores-jupiter.pdf" download>
                        <Image src="/privacidade/anexo.svg" alt="Aviso de privacidade dos fornecedores jupiter" width={100} height={100}/>
                        <p>LGPD_Aviso de privacidade dos Fornecedores jupiter</p>
                        <FiDownload/>
                    </a>

                    <a href="/privacidade/anexos/LGPD_Política-de-atendimento-dos-direitos-dos-titulares-dos-dados-espaço-JUPITER.pdf" download>
                        <Image src="/privacidade/anexo.svg" alt="Aviso de privacidade dos fornecedores jupiter" width={100} height={100}/>
                        <p>LGPD_Política de atendimento dos direitos dos titulares dos dados espaço - JUPITER</p>
                        <FiDownload/>
                    </a>

                    <a href="/privacidade/anexos/LGPD_Aviso-de-Privacidade-para-Colaboradores-e-Terceiros-jupiter.pdf" download>
                        <Image src="/privacidade/anexo.svg" alt="LGPD_Aviso de Privacidade para Colaboradores e Terceiros - jupiter" width={100} height={100}/>
                        <p>LGPD_Aviso de Privacidade para Colaboradores e Terceiros - jupiter</p>
                        <FiDownload/>
                    </a>

                    <a href="/privacidade/anexos/LGPD_Aviso-de-privacidade-dos-CLIENTES-jupiter.pdf" download>
                        <Image src="/privacidade/anexo.svg" alt="LGPD_Aviso de privacidade dos CLIENTES jupiter" width={100} height={100}/>
                        <p>LGPD_Aviso de privacidade dos CLIENTES jupiter</p>
                        <FiDownload/>
                    </a>
                </div>
            </section>

            <Footer/>
        </PrivacidadeStyled>
    )
}