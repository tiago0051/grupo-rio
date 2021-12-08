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
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            list-style: none;
            max-width: 1080px;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 20rem;
            width: calc(100% / 4);
            
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

    main section:nth-child(4){
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(20, 20, 60);

        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            max-width: 1080px;
        }

        #maria-augusta {
            display: flex;
            flex-direction: column;
            width: 28rem;

            h3 {
                font-size: 2rem;
                margin-bottom: 0.5rem;
            }

            span:nth-child(2){
                font-size: 1rem;
                margin-bottom: 1rem;
            }

            span:nth-child(3) {
                margin-top: 20px;
                align-self: center;
                margin: 20px;
            }

            p:last-child {
                font-size: 2rem;
                text-align: center;
                line-height: 1.8rem;
                margin-top: 1rem;
            }
        }

        #thiago-costa {
            width: 28rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            p:first-child{
                font-size: 1.9rem;
                text-align: center;
            }

            h3 {
                font-size: 2rem;
                margin: 1.5rem;
            }
        }
    }

    main section:nth-child(5) {
        padding: 2rem 0;

        h2{
            text-align: center;
            margin-bottom: 2rem;
            font-size: 5rem;
            font-weight: 700;
        }

        form {
            background-image: url("./background-form.png");
            background-position: top;
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 2rem;
            color: white;
            font-weight: 700;
            align-items: center;
        }

        div {
            display: flex;
            flex-direction: column;
            font-size: 2rem;
        }

        input {
            font-size: 2rem;
            border: 2px solid white;
            border-radius: 3px;
            margin-bottom: 2rem;
        }

        button {
            font-size: 2rem;
            padding: 0.5rem 2rem;
            border: 0;
            border-radius: 4px;
            background-color: #ED7E36;
            color: white;
            box-shadow: 0 3px 5px 2px rgb(0, 0, 0, 0.3)
        }

        p {
            font-size: 4rem;
            width: 50%;
        }
    }

    main section:nth-child(6){
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #f9fafb;

        > div {
            display: flex;
            flex-direction: row;
            width: 100%;
            max-width: 1080px;
            margin-bottom: 4rem;
        }

        > div > div:hover {
            box-shadow: 0 3px 10px 2px rgb(0, 0, 0, 0.3);
        }

        > div > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            border: 1px solid rgb(220, 220, 220, 0.8);
            background-color: white;
            padding: 2rem;
            transition: box-shadow 0.2s linear;
        }

        .Image {
            width: 20%;
            display: flex;
            justify-content: center;
        }

        .Image span {
            border-radius: 50%;
        }

        > div > div > div:last-child {
            width: 80%;
        }


        p {
            font-size: 1.1rem;
            line-height: 1.9rem;
            font-weight: 700;
            padding: 0.7rem;
        }

        h4 {
            margin-top: 1rem;
            color: rgb(80, 80, 80);
        }
    }
`