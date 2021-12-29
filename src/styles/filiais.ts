import styled from 'styled-components'

export const FiliaisStyled = styled.main`

    section:nth-child(2) {
        background-image: url('/filiais/background.webp');
        height: 50vh;
        width: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            color: white;
            font-size: 3rem;
            font-weight: 700;
        }
    }

    section:nth-child(3) {
        margin: 3rem;

        h3 {
            font-size: 1.2rem;
            color: rgb(65,88,208);
            margin: 1rem 0;
        }

        p {
            width: 50%;
        }
    }

    section:nth-child(4) {
        margin: 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 2rem;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        div > h2 {
            font-size: 2rem;
            color: rgb(65,88,208);
            font-weight: 700;
            margin-top: 1rem;
        }
    }

    @media only screen and (max-width: 600px) {
        section:nth-child(3) {
            margin: 3rem 1rem;
            width: 90%;

            p {
                width: 100%;
            }
        }

        section:nth-child(4) {
            flex-direction: column;
            text-align: center;
            
            div {
                margin: 2rem 0;
            }
        }
    }

`

interface FilialProps {
    img?: string;
}

export const StyledFilial = styled.main<FilialProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    section:nth-child(2) {
        background-color: black;
        width: 100%;
        height: 50vh;
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            z-index: 3;
            color: white;
            font-weight: 700;
            font-size: 3rem;
        }
    }

    section:nth-child(2)::after {
        content: "";
        background: url("${props => props.img}");
        background-position: center;
        background-size: cover;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

    section:nth-child(3) {
        padding: 3rem;
        width: 70%;
        text-align: center;

        h2 {
            color: rgb(65,88,208);
            font-size: 2rem;
            margin: 1rem 0;
        }

        p {
            color: rgb(50,50,50);
            font-size: 1.2rem;
            margin: 0.5rem 0;
        }
    }

    section:nth-child(4) {
        width: 100%;
        height: 100vh;
    }

    section:nth-child(5){
        margin: 2rem 0;
        width: 100%;
        max-width: 1080px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        div {
            width: 30%;
        }
    }

    @media only screen and (max-width: 600px) {
            section:nth-child(2) {
                width: 100%;

                h1 {
                    font-size: 2rem;
                    text-align: center;
                }
            }

            section:nth-child(3) {
                width: 100%;

                h2 {
                    font-size: 1.5rem;
                }
            }

            section:nth-child(5) {
                padding: 1rem;

                > div {
                    width: 100%;
                    margin-bottom: 2rem;
                }
            }
        }
`