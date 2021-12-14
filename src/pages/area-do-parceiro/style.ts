import styled from 'styled-components';

export const StyledAreaDoParceiro = styled.main`
    background-image: url("/area-do-parceiro/background.webp");
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
        margin: 0 1rem;
    }

    form {
        background-color: white;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        padding: 3.5rem 2.7rem;
        box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.4);

        h2 {
            font-size: 1.5rem;
        }

        input {
            font-size: 1.5rem;
            background: 0;
            border: 0;
            border-bottom: 2px solid rgb(0, 0, 0, 0.4);
            color: rgb(0, 0, 0, 0.4);

            :focus {
                border-bottom: 2px solid rgb(65,88,208);
                color:rgb(0, 0, 0, 0.8)
            }
        }

        label {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            margin-top: 1.5rem;
            color: rgb(0, 0, 0, 0.4);
            display: block;
        }

        button {
            margin-top: 2rem;
            font-size: 1.5rem;
            padding: 5px 10px;
            width: 60%;
            border: 0;
            background-color: #336699;
            color: white;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            cursor: pointer;

            svg {
                margin-left: 1rem;
            }
        }

        #line {
            border-bottom: 2px solid #336699;
            width: 30%;
            height: 2px;
            margin-left: 0;
            margin-bottom: 1rem;
        }

        > div > svg {
            position: absolute !important;
            width: 20px !important;
            height: 20px !important;
            margin-left: -20px !important;
            color: rgb(0, 0, 0, 0.4);
        }

        > div {
            position: relative;
            width: 100%;
            margin-left: 0;
        }

        > div > input:focus ~ svg {
            color: #336699;
        }
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        background-position: left;
        background-size: cover;
        margin: 0;

        > div {
            margin: 0;
        }

        > div > span {
            width: 300px !important;
            height: 300px !important;
        }

        form {
            width: 100vw;

            > div > svg {
                flex-wrap: nowrap;
                margin-left: 0 !important;
                top: 70px;
                right: 0px;
            }
        }
    }
`