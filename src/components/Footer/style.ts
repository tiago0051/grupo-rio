import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background-color: white;
    border-top: 5rem #2925f4 solid;
    margin-top: -9rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .linha {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 3rem 2rem;
        border-bottom: 1px solid rgb(200, 200, 200);
        align-items: center;
    }

    #redes-sociais {
        margin-top: 1rem;
    }

    #redes-sociais svg {
        margin-right: 1rem;
        font-size: 1.4rem;
        color: rgb(30, 30, 30);
    }

    #redes-sociais svg:hover {
        color: #2925f4;
    }

    h3 {
        margin-bottom: 1rem;
        font-size: 1.7rem;
        text-align: left;
    }

    @media only screen and (max-width: 600px) {
        .linha {
            flex-direction: column;
        }

        #redes-sociais {
            margin-bottom: 4rem;
        }
    }
`