/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import {CampanhaStyled} from '../../styles/campanhas'

export default function Campanha(props){
    return (
        <CampanhaStyled nome={props.nome}>
            <Head>
                <title>Grupo Rio   {props.nome}</title>
            </Head>

            <NavBar/>

            <section>
                <h1>{props.nome.toUpperCase()}</h1>
            </section>

            <section>
                {
                    props.campanha.map(campanha => (
                        campanha?.numero ? <div key={campanha?.numero}><img src={"/campanhas/galeria/" + props?.nome + "/" + campanha?.numero + ".jpg"} alt={props?.nome}/></div> : null
                    ))
                }
            </section>

            <Footer/>
        </CampanhaStyled>
    )
}

export async function getServerSideProps(context){
    const {nome} = context.query;

    var count = 0

    switch(nome){
        case 'A liga dos super vendedores':
            count = 13
            break;
        case 'BMG folia':
            count = 25
            break;
        case 'Copa do mundo':
            count = 32
            break;
        case 'Carnamar BMG':
            count = 32
            break;
        case 'Mundo magico':
            count = 25
            break;
        case 'Copa do mundo 2010':
            count = 11
            break;
    }

    if(count == 0){
        return {
            redirect: {
              permanent: false,
              destination: "/campanhas",
            },
            props:{},
          };
    }

    var campanha = []

    for(let i = 1; i <= count; i++){
        campanha[i] = {numero: i}
    }

    return{
        props:{
            campanha,
            count,
            nome
        }
    }
}