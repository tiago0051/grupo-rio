import React from 'react';
import { NextPage } from "next"
import Image from "next/image"
import { useEffect } from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

import { StyledSlider, CirculoContador } from "./style"

const Slider: NextPage = () =>{
    const [slider, setSlider] = React.useState(0)

    useEffect(() => {
        setInterval(() => {
            if(!checkMaxScroll()){
                onClickRight()
            }
        }, 7000)
    }, [])

    function onClickLeft(){
        if(!checkMaxScroll()){
            document.getElementById("items")!.scrollLeft -= document.getElementById("item")!.offsetWidth
            setSlider(slide => (slide - 1) >= 0 ? slide - 1 : 0)
        }
    }

    function onClickRight(){
        if(!checkMaxScroll()){
            document.getElementById("items")!.scrollLeft += document.getElementById("item")!.offsetWidth
            setSlider(slide => (slide + 1) < 5 ? slide + 1 : 5)
        }
    }

    function checkMaxScroll(){
        if(document.getElementById("items")!.scrollLeft >= (document.getElementById("items")!.scrollWidth - document.getElementById("items")!.clientWidth)){
            document.getElementById("items")!.scrollLeft = 0
            setSlider(0)
            return true;
        }else{
            return false;
        }
    }

    return(
        <StyledSlider id="parcerias">
            <div>
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
                </div>
                <FiChevronRight onClick={onClickRight}/>
            </div>
        </StyledSlider>
    )
}

export default Slider