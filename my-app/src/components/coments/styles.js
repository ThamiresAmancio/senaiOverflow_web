import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 5px;
    box-shadow: 0px 5px 20px rgb(0,0,0,0.25);
    padding: 10px;

    > header{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 18px;

        > img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }

        > p {
            font-size: 14px;
            color: var(--textGray);;
        }
    }

    > p {
        margin-top: 10px;
        padding: 10px 0px 10px 12px;
        border-left: 2px solid var(--primary);
   }
`;
