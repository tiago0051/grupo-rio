import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import {StyledCampanhas, Artigo} from '../../styles/campanhas'
import { motion } from 'framer-motion';

export default function Index(){
    return(
        <StyledCampanhas>
            <Head>
                <title>Grupo Rio - Campanhas</title>
                <meta name="description" content="Aqui você encontra todas as nossas campanhas, como a Campanha de Volta Redonda, a Campanha de Campo dos Goytacazes, a Campanha de Petropolis e muito mais." />
            </Head>

            <section>
                <NavBar/>
                <div>
                    <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: "backInOut"}}>Campanhas</motion.h1>
                </div>
            </section>

            <section>
                <h2>Campanhas Passadas</h2>

                <div>
                    <Link href="/campanhas/A liga dos super vendedores" passHref>
                        <Artigo img="/campanhas/a-liga-dos-super-vendedores/index.jpg">
                            <div>
                                <h3>A Liga dos Super Vendedores</h3>
                                <p>2014</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>

                    <Link href="/campanhas/BMG folia" passHref>
                        <Artigo img="/campanhas/bmg-folia/index.jpg">
                            <div>
                                <h3>BMG Folia</h3>
                                <p>2015</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>

                    <Link href="/campanhas/Copa do mundo" passHref>
                        <Artigo img="/campanhas/copa-do-mundo-bmg/index.jpg">
                            <div>
                                <h3>Copa do Mundo BMG</h3>
                                <p>2014</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>

                    <Link href="/campanhas/Carnamar BMG" passHref>
                        <Artigo img="/campanhas/carnamar/index.jpg">
                            <div>
                                <h3>Carnamar BMG</h3>
                                <p>2014</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>

                    <Link href="/campanhas/Mundo magico" passHref>
                        <Artigo img="/campanhas/mundo-magico/index.jpg">
                            <div>
                                <h3>Mundo Mágico</h3>
                                <p>2013</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>

                    <Link href="/campanhas/Copa do mundo 2010" passHref>
                        <Artigo img="/campanhas/copa-do-mundo-2010/index.jpg">
                            <div>
                                <h3>Copa do Mundo BMG</h3>
                                <p>2010</p>
                            </div>

                            <div/>
                        </Artigo>
                    </Link>
                </div>

            </section>

            <Footer/>
        </StyledCampanhas>
    )
}