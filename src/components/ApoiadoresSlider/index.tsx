import { NextPage } from "next"
import Image from "next/image"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

import { StyledSlider } from "./style"

const Slider: NextPage = () =>{

    function onClickLeft(){
        document.getElementById("items")!.scrollLeft -= document.getElementById("item")!.offsetWidth
    }

    function onClickRight(){
        document.getElementById("items")!.scrollLeft += document.getElementById("item")!.offsetWidth
    }

    return(
        <StyledSlider>
            <div>
                <button onClick={onClickLeft}><FiChevronLeft/> </button>
                <div id="items">
                    <Image id="item" src="/first-session/itau.png" alt="Itaú" width="300px" height="300px"/>
                    <Image src="/first-session/bradesco.png" alt="Bradesco" width="300px" height="300px"/>
                    <Image src="/first-session/facta.png" alt="Facta Financeira" width="300px" height="300px"/>
                    <Image src="/first-session/ole.png" alt="Ole Consignado" width="300px" height="300px"/>
                    <Image src="/first-session/safra.png" alt="Safra" width="300px" height="300px"/>
                    <Image src="/first-session/daycoval.png" alt="Banco Daycoval" width="300px" height="300px"/>
                    <Image src="/first-session/pan.png" alt="Pan" width="300px" height="300px"/>
                    <Image src="/first-session/bmg.png" alt="BMG" width="300px" height="300px"/>
                </div>
                <button onClick={onClickRight}><FiChevronRight/></button>
            </div>
        </StyledSlider>
    )
}

export default Slider