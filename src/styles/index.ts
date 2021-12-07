import styled from 'styled-components';

export const StyledIndex = styled.div`
    main > section{
        z-index: -1;
        display: flex;
        flex-direction: column;
    }

    main section:nth-child(3) {
        background-color: #f9fafb;
        margin-top: 12rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        padding: 3rem;

        ul {
            margin-top: 2rem;
            width: 70%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
        }

        li {
            width: 18rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem 2rem;
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
    }
`