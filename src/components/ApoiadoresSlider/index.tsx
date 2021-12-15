import React from 'react';
import { NextPage } from "next"
import Image from "next/image"
import { useEffect } from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

import { StyledSlider, CirculoContador } from "./style"

interface Props {
    isMobile: boolean
}

const Slider: NextPage<Props> = ({isMobile}) =>{
    const [slider, setSlider] = React.useState(0)
    const [execute, setExecute] = React.useState(false)

    useEffect(() => {
        document.getElementById("items")!.style.width = "calc("+ ((document.getElementById("item")!.offsetWidth * 3)) + "px" +" + 180px)";

        setInterval(() => {
            setExecute(execute => !execute)
        }, 3000)
    }, [])

    useEffect(() => {
        if(!checkMaxScroll() && execute){
            onClickRight()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[execute])

    function onClickLeft(){
        if(!checkMaxScroll() && document.getElementById("items")){
            document.getElementById("items")!.scrollLeft -= document.getElementById("item")!.offsetWidth + 60;
            setSlider(slide => (slide - 1) >= 0 ? slide - 1 : 0)
        }
    }

    function onClickRight(){
        if(!checkMaxScroll() && document.getElementById("items")){
            document.getElementById("items")!.scrollLeft += document.getElementById("item")!.offsetWidth + 60;
            isMobile ? setSlider(slide => (slide + 1) < 8 ? slide + 1 : 8) : setSlider(slide => (slide + 1) < 6 ? slide + 1 : 6)
        }
    }

    function checkMaxScroll(){
        if(document.getElementById("items")){
            if(document.getElementById("items")!.scrollLeft >= (document.getElementById("items")!.scrollWidth - document.getElementById("items")!.clientWidth - 20)){
                document.getElementById("items")!.scrollLeft = 0
                setSlider(0)
                return true;
            }
        }else{
            return false;
        }
    }

    return(
        <StyledSlider id="parcerias">
            <div>
                <div id="items">
                    <Image id="item" src="/first-session/itau.webp" alt="Itaú" width="200px" height="200px"/>
                    <Image src="/first-session/bmg.webp" alt="BMG" width="200px" height="200px"/>
                    <Image src="/first-session/pan.webp" alt="Pan" width="200px" height="200px"/>
                    <Image src="/first-session/ole.webp" alt="Ole Consignado" width="200px" height="200px"/>
                    <Image src="/first-session/agibank-logo.svg" alt="Agibank" width="200px" height="200px"/>
                    <Image src="/first-session/daycoval.svg" alt="Banco Daycoval" width="200px" height="200px"/>
                    <Image src="/first-session/banrisul.webp" alt="Banrisul" width="200px" height="200px"/>
                    <Image src="/first-session/bradesco.webp" alt="Bradesco" width="200px" height="200px"/>
                    <Image src="/first-session/cetelem.webp" alt="Cetelem" width="200px" height="200px"/>
                </div>
            </div>
            <div id="contador">
                <FiChevronLeft onClick={onClickLeft}/>
                <div>
                    <CirculoContador preencher={slider == 0}/>
                    <CirculoContador preencher={slider == 1}/>
                    <CirculoContador preencher={slider == 2}/>
                    <CirculoContador preencher={slider == 3}/>
                    <CirculoContador preencher={slider == 4}/>
                    <CirculoContador preencher={slider == 5}/>
                    <CirculoContador preencher={slider == 6}/>

                    {
                        isMobile ? 
                            (
                                <>
                                    <CirculoContador preencher={slider == 7}/>
                                    <CirculoContador preencher={slider == 8}/>
                                </>
                            ) :
                            (
                                <>
                                </>
                            )
                    }
                </div>
                <FiChevronRight onClick={onClickRight}/>
            </div>
        </StyledSlider>
    )
}

export default Slider