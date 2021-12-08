import type { NextPage } from 'next'
import {FiMenu, FiX} from 'react-icons/fi'

import { NavBar } from './style'

const Index: NextPage = () =>{
    return(
        <NavBar>
            <ul id="desktop">
                <li><a>Início</a></li>
                <li><a href="#parcerias">Parcerias</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#quem-somos">Quem somos</a></li>
                <li><a>Campanhas</a></li>
            </ul>
            <div id="mobile">
                <FiMenu onClick={() => document.getElementById("list")!.style.display = "flex"}/>
                <ul id="list">
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><FiX id="fechar"/></li>
                    <li><a>Início</a></li>
                    <li><a>Parcerias</a></li>
                    <li><a>Contato</a></li>
                    <li><a>Quem somos</a></li>
                    <li><a>Política de Privacidade</a></li>
                </ul>
            </div>
        </NavBar>
    )
}

export default Index