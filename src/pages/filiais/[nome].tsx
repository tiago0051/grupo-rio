import { GetServerSideProps } from "next"
import Head from "next/head"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

import { StyledFilial } from "../../styles/filiais"

interface FilialProps {
    filial: Filial
}

export default function Filial(props : FilialProps) {
    return(
        <StyledFilial img={props.filial.imagem}>
            <Head>
                <title>Grupo Rio - {props.filial.nome}</title>
            </Head>
            <NavBar/>

            <section>
                <h1>{props.filial.nome}</h1>
            </section>

            <section>
                <h2>SÓ É BOM PARA A GENTE, SE FOR BOM PARA VOCÊ</h2>
                <p>Somos pessoas servindo pessoas, com paixão e excelência. Trabalhamos com o cliente e para o cliente, porque ele é a razão maior de tudo o que fazemos.</p>
                <h2>FANÁTICOS POR PERFORMANCE</h2>
                <p>A geração de resultados está no nosso DNA. O desafio constante de buscar a liderança em performance nos trouxe até aqui e continuará guiando a nossa empresa em direção aos nossos objetivos. Pensamos e agimos como você.</p>
            </section>

            <section>
                <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDr3X_ZBcJObnF-QIJ6AGcfugqeB-z-8Gg&q=" + props.filial.endereço + "&zoom=15"}>
                </iframe>
            </section>

            <section>
                <div>
                    <h3>{props.filial.endereço}</h3>
                </div>

                <div>
                    <h3>Telefone</h3>
                    <p>{props.filial.telefone}</p>
                    <h3>E-mail</h3>
                    <p>{props.filial.email}</p>
                </div>
            </section>

            <Footer/>
        </StyledFilial>
    )
}

interface Filial{
    nome?: string,
    endereço?: string,
    telefone?: string,
    email?: string,
    imagem?: string,
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { nome } = ctx.query
    var filial: Filial = {}

    switch(nome) {
        case "Bairros-de-Volta-Redonda":
            filial = {
                nome: "VOLTA REDONDA",
                endereço: "Av Paulo de Frontin, 590 - SL 1309 - Aterrado \n Volta Redonda - RJ",
                telefone: "(24) 33462636",
                email: "filialvoltaredonda@rjgrupo.com.br",
                imagem: "/filiais/Bairros-de-Volta-Redond.webp"
            }
            break
        case "Bairros-de-Campos-dos-Goytacazes":
            filial = {
                nome: "CAMPO DOS GOYTACAZES",
                endereço: "Rua Treze de Maio, 110, Loja 04 \n Centro - Campos dos Goytacazes - RJ",
                telefone: "(22) 2731-8842 / (22) 2723-1507",
                email: "filialcampos@rjgrupo.com.br",
                imagem: "/filiais/Bairros-de-Campo-dos-Goytacaze.webp"
            }
            break
        case "quitandinha-petropolis-rj":
            filial = {
                nome: "PETRÓPOLIS",
                endereço: "R. Mal. Deodoro, 46 - SL 702- Centro \nPetrópolis - RJ",
                telefone: "(24) 2231-7634 / 2231-0594 / 2242-2053",
                email: "filialpetropolis@rjgrupo.com.br",
                imagem: "/filiais/quitandinha-petropolis-r.webp"
            }
            break
    }

    if(filial.nome == undefined) {
        return {
            redirect: {
              permanent: false,
              destination: "/filiais",
            },
            props:{},
          };
    }

    return{
        props: {
            filial
        }
    }
}