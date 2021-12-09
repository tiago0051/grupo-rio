import styled from 'styled-components'

export const StyledCampanhas = styled.main`
    section:nth-child(1) {
        height: 50vh;
        width: 100%;
        background-image: url("/campanhas/index.jpg");
        background-position: center;
        background-size: cover;
        position: relative;

        div:nth-child(2) {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            align-items: center;
            color: white;
        }

        div:nth-child(2) h1 {
            font-size: 3rem;
        }
    }

    section:nth-child(2) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;

        h2 {
            font-size: 2rem;
            font-weight: 700;
        }

        > div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 2rem 1rem;
            max-width: 1080px;
            width: 100%;
            justify-content: space-between;
        }
    }
`
interface ArtigoProps {
    img: string
}

export const Artigo = styled.article<ArtigoProps>`
    margin-bottom: 2rem;
    width: 500px;
    height: 300px;
    border-radius: 10px;

    background-position: center;
    background-size: cover;

    position: relative;
    overflow: hidden;
    cursor: pointer;

    h3 {
        color: white;
        font-size: 2rem;
        text-align: center;
        white-space: nowrap;
        opacity: 1;
    }

    div:nth-child(1) {
        width: 100%;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-radius: 10px;
        position: absolute;
        overflow: hidden;
        transition: all 0.2s linear;
        opacity: 0;

        p {
            color: white;
            white-space: nowrap;
            opacity: 1;
        }
    }

    div:nth-child(2) {
        width: 100%;
        height: 100%;
        background-image: url(${props => props.img});
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        overflow: hidden;
    }

    :hover {
        div:nth-child(1) {
            height: 100%;
            opacity: 0.6;
        }
    }
`