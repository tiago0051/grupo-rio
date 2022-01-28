import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

import { FiliaisStyled } from '../../styles/filiais'
import { motion } from 'framer-motion'

export default function Filiais(){
    return(
        <FiliaisStyled>
            <Head>
                <title>Grupo Rio - Filiais</title>
                <meta name="description" content="Aqui você encontra todas as nossas filiais, como a Filial Rio de Janeiro, a Filial São Paulo, a Filial Curitiba e muito mais." />
            </Head>
            <Navbar/>

            <section>
                <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "backInOut"}}>FILIAIS</motion.h1>
            </section>

            <section>
                <h3>ESTRUTURA PARA ATENDER AS MAIS ALTAS EXIGÊNCIAS</h3>
                <p>Nas filiais GRUPO RIO você vai encontrar um time competente e orgulhoso em pertencer a essa organização, comprometido em fazer sempre o melhor para você.</p>
            </section>

            <section>
                <Link href="/filiais/Bairros-de-Volta-Redonda" passHref>
                    <div>
                        <Image src="/filiais/Bairros-de-Volta-Redonda.webp" alt="Bairros de Volta Redonda" width={250} height={250}/>
                        <h2>VOLTA REDONDA</h2>
                    </div>
                </Link>

                <Link href="/filiais/Bairros-de-Campos-dos-Goytacazes" passHref>
                    <div>
                        <Image src="/filiais/Bairros-de-Campo-dos-Goytacazes.webp" alt="CAMPO DOS GOYTACAZES" width={250} height={250}/>
                        <h2>CAMPO DOS GOYTACAZES</h2>
                    </div>
                </Link>

                <Link href="/filiais/quitandinha-petropolis-rj" passHref>
                    <div>
                        <Image src="/filiais/quitandinha-petropolis-rj.webp" alt="PETRÓPOLIS" width={250} height={250}/>
                        <h2>PETRÓPOLIS</h2>
                    </div>
                </Link>
            </section>

            <Footer/>
        </FiliaisStyled>
    )
}