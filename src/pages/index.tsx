import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {FaSmile, FaEye, FaLightbulb, FaRocket, FaCopyright, FaUsers, FaArrowUp} from 'react-icons/fa'

import NavBar from '../components/NavBar'
import ApoiadoresSlider from '../components/ApoiadoresSlider'

import { StyledIndex, ButtonAreaDoCliente, ButtonVoltarInicio } from '../styles'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [])

  const [formNome, setFormNome] = useState('')
  const [formSobrenome, setFormSobrenome] = useState('')
  const [formTelefone, setFormTelefone] = useState('')
  const [formEmail, setFormEmail] = useState('')

  const [formResposta, setFormResposta] = useState('')

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    if(formNome === '' || formSobrenome === '' || formTelefone === '' || formEmail === '') {
      setFormResposta('Preencha todos os campos')
      return;
    }

    axios.post("/api/contact", {nome: formNome, sobrenome: formSobrenome, telefone: formTelefone, email: formEmail}).then(res => {
      if(res.data.enviado){
        (document.getElementById("botaoFormulario") as HTMLButtonElement).disabled = true;
        (document.getElementById("botaoFormulario") as HTMLButtonElement).style.opacity = "0.5";
        setFormResposta('Enviado com sucesso. Em breve entraremos em contato!')
      }else{
        setFormResposta('Erro ao enviar. Tente novamente mais tarde')
      }
    })
  }

  return (
    <StyledIndex isMobile={isMobile}>
      <Head>
        <title>Grupo Rio</title>
        <meta name="description" content="O grupo rio é uma promotora de crédito com 21 anos de experiência no mercado de crédito consignado. Somos especialista em atender corretores de crédito consignado." />
      </Head>

      <main>
        <NavBar/>

        <section id='inicio'>
          <div></div>
          <ButtonAreaDoCliente><Link href="/area-do-parceiro">Área do Parceiro</Link></ButtonAreaDoCliente>
          <ApoiadoresSlider isMobile={isMobile}/>
        </section>

        <ButtonVoltarInicio><Link passHref href="/#inicio"><FaArrowUp/></Link></ButtonVoltarInicio>

        <section>
        <h2>Nossos Diferenciais</h2>

        <ul>
          <li>
            <FaSmile/>
            <h3>Motivação</h3>
            <p>Somos impulsionados a realizar um trabalho eficiente e de resultados!</p>
          </li>

          <li>
            <FaEye/>
            <h3>Visão</h3>
            <p>Acreditamos em investimentos de futuro, trabalhamos para abrir mentes!</p>
          </li>

          <li>
            <FaLightbulb/>
            <h3>Estratégia</h3>
            <p>Nossa maneira de fazer é atrativa e diferenciada, idealizamos o nosso próprio caminho de forma única!</p>
          </li>

          <li>
            <FaRocket/>
            <h3>Reconhecimento</h3>
            <p>Detentores de inúmeros prêmios de qualidade e produção, conquistamos inequívoco destaque a nível nacional no segmento.</p>
          </li>

          <li>
            <FaCopyright/>
            <h3>Sensatez e Marca</h3>
            <p>Nossa história de sucesso é fundamentada nos princípios da idoneidade e valorização de nossos parceiros.</p>
          </li>

          <li>
            <FaUsers/>
            <h3>Liderança e Time</h3>
            <p>Investimos na informação de um time competente e orgulhoso em pertencer a essa organização!</p>
          </li>
        </ul>
        </section>
      
        <section id="quem-somos">
          <article>
          </article>

          <div>
            <div id="maria-augusta">
              <h3>Maria Augusta</h3>
              <span>CEO | Grupo Rio</span>

              <Image src="/maria-augusta.webp" alt="Maria Augusta" width="200px" height="200px" layout="fixed"/>
              <p>“Nunca foi sorte, sempre foi Deus.”</p>
            </div>

            <div id="thiago-costa">
              <h3>Thiago Costa</h3>
              <Image src="/thiago-costa.jpg" alt="Thiago Costa" width="200px" height="200px" layout="fixed"/>
              <p>“Eu gosto do impossível porque lá a concorrência é menor.”</p>
            </div>
          </div>
        </section>

        <section id="contato">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Nome">Nome</label>
              <input name="Nome" type="text" onChange={(event) => setFormNome(event.target.value)}/>

              <label htmlFor="Sobrenome">Sobrenome</label>
              <input name="Sobrenome" type="text" onChange={(event) => setFormSobrenome(event.target.value)}/>

              <label htmlFor="Telefone">Telefone</label>
              <input name="Telefone" type="text" onChange={(event) => setFormTelefone(event.target.value)}/>

              <label htmlFor="Email">Email</label>
              <input name="Email" type="email" onChange={(event) => setFormEmail(event.target.value)}/>

              <span>{formResposta}</span>
              <button type='submit' id="botaoFormulario">Enviar</button>
            </div>

            <h2>Seja nosso Parceiro</h2>
          </form>
        </section>
      
        <section>
          <div>
            <h2>Depoimentos de nossos corretores</h2>
          </div>

          <div>
              <div>
                <div className="Image">
                  <Image src="/joão-santos.jpg" alt="João Santos" width="86px" height="86px" layout="fixed"/>
                </div>

                <div>
                  <p>
                    Muito me orgulha fazer parte do quadro de parceiros do Grupo Rio, uma organização que participo como colaborador desde sua fundação. E, por isso, posso afirmar com absoluta segurança que seu estrondoso crescimento, que não para, é resultado do alto grau de comprometimento com o seu negócio, tratando seus parceiros com muita ética, utilizando ferramentas de alta tecnologia e produtividade, mantendo o seu quadro pessoal de funcionários sempre preparados e comprometidos com a Empresa. Por tudo isso é que hoje o Grupo Rio é considerado uma das maiores promotoras do País.
                  </p>
                  <h4>JOÃO SANTOS, COLABORADOR</h4>
                </div>
              </div>

              <div>
                <div className="Image">
                  <Image src="/silva-santos.jpg" alt="Silva Santos" width="86px" height="86px" layout="fixed"/>
                </div>

                <div>
                  <p>
                  Eu, minha família e empresa, viemos através deste texto, agradecer a confiança, respeito, dedicação e a amizade por esses longos anos em que trabalhamos com esta parceria. Costumo dizer que o nosso bom relacionamento é o segredo do nosso sucesso e não me canso de agradecer, todos os dias em minhas orações, por ter a oportunidade de trabalhar com esse grupo. Tudo que conquistei materialmente, primeiramente, agradeço a Deus, e depois a vocês. Estamos juntos, sempre!
                  </p>
                  <h4>SILVIA SANTOS (GÊNESIS CRED), PARCEIRA</h4>
                </div>
              </div>
            </div>
        </section>
        <Footer/>
      </main>
    </StyledIndex>
  )
}

export default Home
