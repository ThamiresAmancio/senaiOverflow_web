import styled from "styled-components";
import {  FaGithub, FaLinkedin} from "react-icons/fa";

export const GitsIcon = styled(FaGithub)`
        font-size: 40px;
        cursor: pointer;
        transition:.2s;

        :hover{
            color: var(--primary);
        }
`;


export const LinkedlnIcon = styled(FaLinkedin)`
    font-size: 40px;
            cursor: pointer;
            transition:.2s;
            margin-left: 15px;
            :hover{
                color: var(--primary);
    }
`;

export const Main = styled.main`
    margin-top: 60px;
    display: grid;
    //  Divide a tela em colunas 
    grid-template-columns: 20% 60% 20%;
`;

export const FeedContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px dashed gray;
    padding: 10px;
`;

export const Post = styled.article `
    width: 80%;
    min-height: 100px;
    padding:20px;
    box-shadow: 0px 10px 10px rgb(0,0,0,0.25);


    >header{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        >img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            
        }

        >div{
            font-size: 18px;

                >p{
                font-size: 14px;
                color: var(--textGray);
            }
        }
    }

    >main{
        margin-top: 10px;

        >div{
            >h1{
                font-size: 22px;
            }

        >p{

            margin-top: 5px;
            padding: 10px 0px 10px 12px;
            font-size: 18px;
           
            border-left: 2px solid var(--primary);
            }
        }
    
        >img{
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-top: 10px;
        }

        >section{
            margin-top: 10px;
            display: flex;
            gap: 10px;
            

            >p{
               padding: 5px;
                box-shadow: 0px 0px 10px rgb(0,0,0,0.25);
            }
        }
    }

    >footer{

       
        >h2{
            margin-top: 10px;
            font-size: 14px;
            transition: 0.2s;
            cursor: pointer;

            :hover{
                color: var(--primary);
            }
        }
    }

`;

export const Profile = styled.nav`

    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;


    >img{
        margin-top: 10px;
        width: 160px;
        height: 160px;
        border-radius: 50%;
    }


    >div{
        font-size: 18px;
        margin-top: 10px;
    }

`;

export const Actions = styled.aside `

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    >button{

        width: 150px;
        height: 50px;
        font-family: sans-serif;
        font-weight: bold;
        background-color: #34deeb;
        color: white;
        border: none;
        border-radius: 5px 5px 5px;
        text-align: center;
        margin-top: 25px;

        
        
    }
   
`;
