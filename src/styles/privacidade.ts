import styled from 'styled-components'

export const PrivacidadeStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    margin: 0;

    section:nth-child(2){
        background-image: url("/privacidade/background.webp");
        height: 50vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: #fff;
            font-size: 2.5rem;
        }
    }

    section:nth-child(3){
        max-width: 1080px;
        padding: 1rem;

        li {
            font-weight: 700;
        }

        h2 {
            font-size: 2rem;
            color: rgb(65,88,208);
            font-weight: 700;
            margin: 2rem 0;
        }

        h3 {
            color: rgb(65,88,208);
            font-weight: 700;
            font-size: 1.2rem;
            margin: 1rem 0;
        }

        p {
            margin: 0.5rem 0;
        }

        br {
            display: block;
            content: "";
            line-height: 0.5rem;
            margin: 0.7rem 0;
        }

        article {
            font-weight: 700;
        }

        #anexos {
            display: flex;
            flex-direction: row;
            max-width: 1080px;
            justify-content: space-between;
            flex-wrap: wrap;

            a {
                display: flex;
                flex-direction: row;
                background-color: rgb(230, 230, 230);
                border-radius: 10px;
                padding: 1rem;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                width: 46%;
                margin: 1%;
            }

            div:hover svg{
                color: rgb(65,88,208);
            }

            p {
                width: 60%;
            }
            
            svg {
                font-size: 3rem;
                transition: color 0.2s linear;
            }

            @media only screen and (max-width: 600px) {
                a {
                    padding: 0;
                    width: 100%;
                }
            }
        }
    }
`