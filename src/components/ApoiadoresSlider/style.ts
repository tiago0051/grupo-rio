import styled from 'styled-components';

export const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    height: 4rem;
    align-self: center;
    margin: 1rem 0;
    padding: 0 10px;

    > div {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    > div > svg {
        cursor: pointer;
        font-size: 2.5rem;
        z-index: 2;
        flex-shrink: 0;
        color: rgba(100, 100, 100);
    }

    div > div {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
    }

    div > div > span {
        flex-shrink: 0;
        z-index: -1;
        width: 300px;
    }

    #contador {
        display: flex;
        justify-content: center;
    }

    #contador > div {
        margin: 0 1rem;
    }

    #items > span {
        margin: 0 30px !important;
        scroll-snap-align: center;
    }

    @media only screen and (max-width: 600px) {
        width: 300px;

        #items > span {
            margin: 0 calc(50% - 75px) !important;
        }

        #contador svg {
            display: none;
        }
    }
`

interface CirculoContadorProps {
    preencher: boolean;
}

export const CirculoContador = styled.span<CirculoContadorProps>`
    flex-shrink: 0;
    max-width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 1rem 7px;
    background-color: ${props => props.preencher ? 'rgba(80, 80, 80);' : 'rgba(150, 150, 150)'};
`