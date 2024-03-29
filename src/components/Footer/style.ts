import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background-color: white;
    border-top: 5rem #2925f4 solid;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

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

    #copy a {
        border-bottom: 1px solid rgb(200, 200, 200);
        font-style: italic;
        transition: border 0.1s linear;
    }

    a:hover {
        border-bottom: 1px solid #2925f4;
    }

    ul {
        list-style: none;
    }

    #links {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #links a{
        font-weight: 400;
        font-style: normal;
        border: 0;
        
    }

    #links li {
        margin: 1rem;
    }

    #links ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 50%;
        justify-content: center;
        align-items: center;
    }

    #links a:hover {
        border-bottom: 1px solid #2925f4;
    }

    @media only screen and (max-width: 600px) {
        a{
            align-self: flex-start;
        }

        #endereco {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .linha {
            flex-direction: column;
            align-self: center;
        }

        #redes-sociais {
            margin-bottom: 4rem;
        }

        #links {
            margin-bottom: 3rem;
        }
    }
`