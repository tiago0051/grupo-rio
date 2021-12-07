import styled from 'styled-components';

export const NavBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    padding: 2rem 2.5rem;
    width: 100%;
    z-index: 99999;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        flex-wrap: wrap;
    }

    ul > li {
        margin-right: 30px;
        padding: 5px;
    }

    a {
        color: #FFFFFF;
        font-weight: 700;
    }

    #mobile {
        display: none;
        z-index: 999999999;
    }

    #mobile > svg {
        color: #FFFFFF;
        font-size: 2rem;
    }

    #mobile ul {
        display: none;
        justify-content: center;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: rgb(50, 50, 50, 0.8);
        overflow: hidden;
    }

    #mobile li {
        margin: 0.8rem 0;
    }

    #fechar {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 3rem;
        color: white;
    }

    #mobile a {
        font-size: 2rem;
    }

    @media only screen and (max-width: 1350px) {
        width: 50%;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
        #desktop {
            display: none;
        }

        #mobile {
            display: block;
        }
    }

    @media only screen and (max-width: 600px) {

        ul {
            flex-direction: column;
        }

    }
`