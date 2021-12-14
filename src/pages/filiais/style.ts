import styled from 'styled-components'

export const FiliaisStyled = styled.main`

    section:nth-child(2) {
        background-image: url('/filiais/background.png');
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
            color: #EF985A;
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
        }

        div > h2 {
            font-size: 2rem;
            color: #EF985A;
            font-weight: 700;
            margin-top: 1rem;
        }
    }

    @media only screen and (max-width: 600px) {
        section:nth-child(3) {
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