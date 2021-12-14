import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

import { FiliaisStyled } from './style'

export default function Filiais(){
    return(
        <FiliaisStyled>
            <Head>
                <title>Grupo Rio - Filiais</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <Navbar/>

            <section>
                <h1>FILIAIS</h1>
            </section>

            <section>
                <h3>ESTRUTURA PARA ATENDER AS MAIS ALTAS EXIGÊNCIAS</h3>
                <p>Nas filiais GRUPO RIO você vai encontrar um time competente e orgulhoso em pertencer a essa organização, comprometido em fazer sempre o melhor para você.</p>
            </section>

            <section>
                <div>
                    <Image src="/filiais/Bairros-de-Volta-Redonda.webp" alt="Bairros de Volta Redonda" width={250} height={250}/>
                    <h2>VOLTA REDONDA</h2>
                </div>

                <div>
                    <Image src="/filiais/Bairros-de-Campo-dos-Goytacazes.webp" alt="CAMPO DOS GOYTACAZES" width={250} height={250}/>
                    <h2>CAMPO DOS GOYTACAZES</h2>
                </div>

                <div>
                    <Image src="/filiais/quitandinha-petropolis-rj.webp" alt="PETRÓPOLIS" width={250} height={250}/>
                    <h2>PETRÓPOLIS</h2>
                </div>
            </section>

            <Footer/>
        </FiliaisStyled>
    )
}