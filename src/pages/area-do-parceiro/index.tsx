import Image from 'next/image'
import Head from 'next/head'
import { StyledAreaDoParceiro } from "../../styles/area-do-parceiro"
import { FiUser, FiKey, FiLogIn } from 'react-icons/fi'

export default function AreaDoParceiro() {
    return(
        <StyledAreaDoParceiro>
            <Head>
                <title>Grupo Rio - Área do Parceiro</title>
            </Head>
            <div>
                <Image src="/logo-branca.svg" alt="Logo Grupo Rio" height="400px" width="400px"/>
            </div>
            <div>
                <form action="https://app1.gerencialcredito.com.br/gruporio/default.asp" method="POST" name="frmlogin">
                    <h2>Área do Parceiro</h2>
                    <div id="line"/>

                    <div>
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" name="usuario"/>
                        <FiUser/>
                    </div>

                    <div>
                    <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha"/>
                        <FiKey/>
                    </div>
                    
                    <button type="submit" name="enviar" id="enviar" value="Entrar">Entrar<FiLogIn/></button>
                </form>
            </div>
        </StyledAreaDoParceiro>
    )
}