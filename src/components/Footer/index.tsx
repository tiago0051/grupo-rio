import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaRegEnvelope } from 'react-icons/fa';

import { FooterStyle } from './style';

export default function Footer(){
    return(
        <FooterStyle>
            <div className="linha">
                <div className="coluna">
                    <Image src="/logo.png" alt="Logo Grupo Rio" width="300px" height="86px" />
                    <div id="redes-sociais">
                        <a href="https://www.facebook.com/Grupo-Rio-Promotora-106628005150431" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                        <a href="https://www.instagram.com/gruporiopromotora/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaRegEnvelope/></a>
                    </div>
                </div>

                <div className="coluna">
                    <h3>Localização</h3>
                    <p>Largo São Francisco de Paula, 42 – 4º andar – Centro<br/>Rio de Janeiro – RJ</p>
                </div>
            </div>

            <div className="linha">
                <div className="coluna">© 2021 Grupo Rio</div>
                <div className="coluna">Desenvolvido por <a href="https://api.whatsapp.com/send/?phone=5555219706468&text&app_absent=0">Conecte-se</a></div>
            </div>
        </FooterStyle>
    )
}