import styled from 'styled-components';

export const StyledSlider = styled.div`
    display: flex;
    height: 10rem;
    width: 80%;
    align-self: center;
    margin: 5rem 0;
    padding: 0 10px;

    > div {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    >div > button {
        background: 0;
        border: 0;
    }

    > div > button > svg {
        cursor: pointer;
        font-size: 2.5rem;
        z-index: 2;
        flex-shrink: 0;
    }

    div > div {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    div > div > span {
        flex-shrink: 0;
        z-index: -1;
        width: 300px;
    }
`