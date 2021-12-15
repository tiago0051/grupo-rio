import type { NextPage } from 'next'
import Link from 'next/link'
import {FiMenu, FiX} from 'react-icons/fi'

import { NavBar } from './style'

const Index: NextPage = () =>{
    return(
        <NavBar>
            <ul id="desktop">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/#parcerias">Parcerias</Link></li>
                <li><Link href="/#contato">Contato</Link></li>
                <li><Link href="/#quem-somos">Quem somos</Link></li>
                <li><Link href="/campanhas">Campanhas</Link></li>
            </ul>
            <div id="mobile">
                <FiMenu onClick={() => document.getElementById("list")!.style.display = "flex"}/>
                <ul id="list">
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><FiX id="fechar"/></li>
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><Link href="/">Início</Link></li>
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><Link href="/#parcerias">Parcerias</Link></li>
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><Link href="/#contato">Contato</Link></li>
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><Link href="/#quem-somos">Quem somos</Link></li>
                    <li onClick={() => document.getElementById("list")!.style.display = "none"}><Link href="/campanhas">Campanhas</Link></li>
                </ul>
            </div>
        </NavBar>
    )
}

export default Index