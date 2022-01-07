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
import { AnimatePresence, motion } from 'framer-motion'

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

    setInterval(() => {
      setPositionSlideDepoimentos(posição => posição < 2 ? posição + 1 : 0)
  }, 10000)
  }, [])

  const [formNome, setFormNome] = useState('')
  const [formSobrenome, setFormSobrenome] = useState('')
  const [formTelefone, setFormTelefone] = useState('')
  const [formEmail, setFormEmail] = useState('')

  const [formResposta, setFormResposta] = useState('')

  const [positionSlideDepoimentos, setPositionSlideDepoimentos] = useState(0)

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

  function DepoimentoRosangela(){
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.8}}} exit={{opacity: 0}} transition={{duration: 1, ease: "backInOut"}} key={"Claudia"}>
        <div className="Image">
          <Image src="/Rosangela-Botelho.webp" alt="Rosangela Botelho" width="86px" height="86px" layout="fixed"/>
        </div>

        <div>
          <p>
          Eu quero agradecer ao Grupo Rio e toda  sua maravilhosa equipe de supervisores,atendentes,gerentes todo o carinho e profissionalismo por nos corretores, muito grata a vocês eu sou pela confiança e credibilidade ao meu trabalho...<br/>
          Desejo um 2022 recheado de coisas maravilhosas!!!<br/>
          Deus os abençoe!!!<br/>
          Um beijo no coração de cada um de vocês🌹❤️😘👏🙏🙏🙏
          </p>
          <h4>Rosangela Botelho Damian</h4>
        </div>
      </motion.div>
    )
  }

  function DepoimentoClaudia() {
    return(
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.8}}} exit={{opacity: 0}} transition={{duration: 1, ease: "backInOut"}} key={"Rosangela"}>
        <div className="Image">
          <Image src="/Claudia-Moura.webp" alt="Claudia Moura" width="86px" height="86px" layout="fixed"/>
        </div>

        <div>
          <p>
          Venho agradecer pela parceria de vocês, e comprometimento em manter sempre o que foi combinado com a seus parceiros. E até mesmo algumas vezes saindo do que é da alçada de vocês ,pra fazer o possível e o impossível para melhor nos atender.<br/>
          Somos uma família Grupo Rio, quero agradecer pela parceria de todos esses longos anos e confiança no trabalho dessa empresa que faz crescer cada dia mais.<br/>
          Agradecer também o carinho e respeito que sempre fui tratada por toda equipe.<br/>
          Estamos juntos, sempre.
          </p>
          <h4>Claudia Moura</h4>
        </div>
      </motion.div>
    )
  }

  function DepoimentoFernando(){
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.8}}} exit={{opacity: 0}} transition={{duration: 1, ease: "backInOut"}} key={"Fernando"}>
        <div className="Image">
          <Image src="/fernando.webp" alt="Fernando e Fernanda Porto" width="86px" height="86px" layout="fixed"/>
        </div>

        <div>
          <p>
          Venho agradecer ao Grupo Rio e toda sua equipe por mais um ano de parceria e desejo a todos um 2022 cheio de conquistas e realizações para todo nós um forte abraço da família Porto.
          </p>
          <h4>Fernando e Fernanda Porto</h4>
        </div>
      </motion.div>
    )
  }

  function DepoimentoGuilherme(){
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.8}}} exit={{opacity: 0}} transition={{duration: 1, ease: "backInOut"}} key={"Guilherme"}>
        <div className="Image">
          <Image src="/guilherme.webp" alt="Guilherme Marinho" width="86px" height="86px" layout="fixed"/>
        </div>

        <div>
          <p>
          Grupo Rio é a melhor definição de empresa parceria. Enquanto muitos querem sozinhos chegar ao topo eles trabalham para que possamos chegar ao topo juntos como verdadeiro parceiro.
          </p>
          <h4>Guilherme Marinho</h4>
        </div>
      </motion.div>
    )
  }

  function DepoimentoFelipe(){
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.8}}} exit={{opacity: 0}} transition={{duration: 1, ease: "backInOut"}} key={"Felipe"}>
        <div className="Image">
          <Image src="/felipe.webp" alt="Filipe Oliveira" width="86px" height="86px" layout="fixed"/>
        </div>

        <div>
          <p>
          Uma Empresa Sólida que trabalha de forma recíproca com o Parceiro, a qual temos a alegria de fazer parte há 12 Anos compartilhando e acompanhando todo o sucesso em todos os períodos desse desafiador mercado.
          </p>
          <h4>Filipe Oliveira</h4>
        </div>
      </motion.div>
    )
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
            <h2>Depoimentos de nossos parceiros</h2>
          </div>

          <div>
            <AnimatePresence>
              {
                positionSlideDepoimentos == 0 && (
                  <>
                    {DepoimentoRosangela()}
                    {DepoimentoClaudia()}
                  </>
                )
              }
              {
                positionSlideDepoimentos == 1 && (
                  <>
                    {DepoimentoGuilherme()}
                    {DepoimentoFernando()}
                  </>
                )
              }
              {
                positionSlideDepoimentos == 2 && (
                  <>
                    {DepoimentoFelipe()}
                  </>
                )
              }
            </AnimatePresence>
          </div>
        </section>
        <Footer/>
      </main>
    </StyledIndex>
  )
}

export default Home
