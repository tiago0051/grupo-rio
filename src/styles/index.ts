import styled from 'styled-components';

interface StyledIndexProps {
    isMobile: boolean;
}

export const StyledIndex = styled.div<StyledIndexProps>`
    main > section{
        z-index: -1;
        display: flex;
        flex-direction: column;
    }

    main section:nth-child(2){

        > div:first-child {
            background-image: url(${props => props.isMobile ? './first-session/background-mobile.png' : './first-session/background.png'});
            background-attachment: fixed;
            width: 100%;
            height: ${props => props.isMobile ? '55vh' : '100vh'};
            margin: 0;
            padding: 0;
            background-size: ${props => props.isMobile ? 'contain' : 'cover'};
            background-repeat: no-repeat;
            background-position: top;
        }
    }

    main section:nth-child(4) {
        background-color: #f9fafb;
        margin-top: 12rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 3rem;

        ul {
            margin-top: 2rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            max-width: 1080px;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 20rem;
            width: calc(100% / 3);
            
            border-top: 1px solid rgb(220, 220, 220, 0.6);
            transition: border 0.2s linear;
        }

        li:hover {
            border-top: 1px solid rgb(65,88,208);
        }

        svg {
            margin-bottom: 1rem;
            font-size: 5rem;
            color: rgba(255,105,0,1);
        }

        h3 {
            margin-bottom: 1rem;
        }

        p {
            text-align: center;
            color: rgb(150, 150, 150);
            line-height: 2rem;
        }

        @media only screen and (max-width: 800px) {
            li {
                width: calc(100% / 2);
                border: 0;
            }
            
        }

        @media only screen and (max-width: 600px) {
            li {
                width: 100%;
                border: 0;
            }
            
        }
    }

    main section:nth-child(5){
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(20, 20, 60);
        margin-bottom: 3rem;

        article {
            width: 100%;
            height: 100vh;
            background-image: url(${props => props.isMobile ? './quem_somos_mobile.jpg' : './quem_somos_desktop.jpg'});
            background-size: cover;
            background-position: center;
            margin-bottom: 3rem;
        }

        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 1080px;
        }

        #maria-augusta {
            display: flex;
            flex-direction: column;
            width: 28rem;

            h3 {
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }

            span:nth-child(2){
                font-size: 1rem;
                margin-bottom: 1rem;
            }

            span:nth-child(3) {
                margin-top: 20px;
                align-self: center;
                margin: 20px;
            }

            p:last-child {
                font-size: 2rem;
                text-align: center;
                line-height: 1.8rem;
                margin-top: 1rem;
            }
        }

        #thiago-costa {
            width: 28rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            p{
                margin-top: 1rem;
                font-size: 1.9rem;
                text-align: center;
            }

            h3 {
                font-size: 2rem;
                margin: 1.5rem;
                align-self: flex-start;
            }
        }

        @media only screen and (max-width: 600px) {
            > div {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            #maria-augusta{
                width: 90%;
                text-align: center;
                margin-bottom: 4rem;

                span {
                    align-self: center;
                }
            }

            #thiago-costa {
                width: 90%;
                text-align: center;

                span {
                    order: 1;
                }

                p:first-child {
                    order: 2;
                    margin-top: 1rem;
                }

                h3 {
                    align-self: center;
                }
            }
        }
    }

    main section:nth-child(6) {
        padding: 2rem 0;

        h2{
            text-align: center;
            margin-bottom: 2rem;
            font-size: 5rem;
            font-weight: 700;
            text-shadow: 0 0 10px rgba(0,0,0,0.4);
        }

        form {
            background-image: url("./contato2.jpg");
            background-position: bottom;
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 2rem;
            color: white;
            font-weight: 700;
            align-items: center;
        }

        div {
            display: flex;
            flex-direction: column;
            font-size: 2rem;
        }

        input {
            font-size: 2rem;
            border: 2px solid white;
            border-radius: 3px;
            margin-bottom: 2rem;
        }

        button {
            font-size: 2rem;
            padding: 0.5rem 2rem;
            border: 0;
            border-radius: 4px;
            background-color: #ED7E36;
            color: white;
            box-shadow: 0 3px 5px 2px rgb(0, 0, 0, 0.3)
        }

        p {
            font-size: 4rem;
            width: 50%;
        }

        @media only screen and (max-width: 600px) {
            margin-top: 3rem;

            h2 {
                font-size: 3.5rem;
            }

            div {
                order: 2;
                width: 100%;
            }

            p{
                order: 1;
                font-size: 2.4rem;
                width: 90%;
                margin-bottom: 2rem;
            }

            form {
                width: 100%;
                padding: 1rem;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                order: 2;
            }

            input {
                width: 100%;
            }

            button {
                width: 100%;
            }
        }
    }

    main section:nth-child(7){
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #f9fafb;

        h2 {
            text-align: center;
        }

        > div {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 1080px;
            margin-bottom: 4rem;
        }

        > div > div:hover {
            box-shadow: 0 3px 10px 2px rgb(0, 0, 0, 0.3);
        }

        > div > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            border: 2px solid rgb(220, 220, 220, 0.8);
            background-color: white;
            padding: 2rem;
            transition: box-shadow 0.2s linear;
        }

        .Image {
            width: 20%;
            display: flex;
            justify-content: center;
        }

        .Image span {
            border-radius: 50%;
        }

        > div > div > div:last-child {
            width: 80%;
        }


        p {
            font-size: 1.1rem;
            line-height: 1.9rem;
            font-weight: 700;
            padding: 0.7rem;
        }

        h4 {
            margin-top: 1rem;
            color: rgb(80, 80, 80);
        }

        @media only screen and (max-width: 600px) {

            h2 {
                padding: 1rem;
                font-size: 2.7rem;
            }

            > div {
                flex-direction: column;
            }

            > div > div {
                flex-direction: column;
            }

            .Image {
                width: 100%;
                margin-bottom: 2rem;
            }

            > div > div > div:last-child {
                width: 100%;
            }
        }
    }
`

export const ButtonAreaDoCliente = styled.button`
    border: 2px solid white;
    border-radius: 3px;
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    background: 0;
    padding: 5px 10px;
    
    font-size: 1.2rem;

    z-index: 9999999999999;
    cursor: pointer;

    transition: all 0.2s linear;

    :hover {
        box-shadow: 0 3px 10px 2px rgb(0, 0, 0, 0.3);
    }

    @media only screen and (max-width: 600px) {
        width: 100px;
    }
`

export const ButtonVoltarInicio = styled.button`
    position: fixed;
    background-color: black;
    color: white;
    border-radius: 50%;
    z-index: 9999999999999999;
    top: 87vh;
    margin-left: 93vw;
    width: 3rem;
    height: 3rem;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        margin-left: 85vw;
    }
`