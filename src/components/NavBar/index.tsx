import type { NextPage } from 'next'

import { NavBar } from './style'

const Index: NextPage = () =>{
    return(
        <NavBar>
            <ul>
                <li><a>Início</a></li>
                <li><a>Parcerias</a></li>
                <li><a>Contato</a></li>
                <li><a>Quem somos</a></li>
                <li><a>Política de Privacidade</a></li>
            </ul>
        </NavBar>
    )
}

export default Index