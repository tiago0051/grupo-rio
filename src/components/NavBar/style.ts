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
`