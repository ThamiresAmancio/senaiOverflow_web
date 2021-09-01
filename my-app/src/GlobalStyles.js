import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `

    :root{
        --primary: #fe0000;
        --textPrimary: #000000;
        --textGray:#b0aea9;
        

    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        color: var(---textPrimary);
        font-family: sans-serif;
    }


    button{
        padding: 10px;
        font-weight: bold;
        background-color: transparent;
        border: 2px solid var(-----textPrimary);
        color:  var(----textPrimary);
        cursor: pointer;
        transition: .2s;

        :hover{
            border: 2px solid var(---primary);
            color: var(--primary);
        }
        :active{
            transform: scale(0.95);
        }
    }

`;