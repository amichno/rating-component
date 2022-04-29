import React from "react";
import styled from "styled-components";

const Back = styled.div`
    background-color: black;
    width:100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 375px){
        width:100vw;
        height: 100%;
    }
    @media (min-width: 375px) and (max-width: 992px){

    }
    @media (min-width:993px) and (max-width:1440px){

    }
    @media (min-width: 1440px){
        background-color: black;
        width:100vw;
        height: 100vh;
    }
`;

const Wrapper = styled.div`
    background-color:hsl(216, 12%, 8%);
    border-radius: 5%;
    @media (max-width: 375px) {
        width: 90%;
        height: 60%;
        overflow-y: scroll;
    }

    @media (min-width:375px) and (max-width: 992px) {
        width: 40%;
        max-width: 450px;
        height: 40%;
        
    }
    @media (min-width:992px){
        width: 30%;
        max-width: 350px;
        height: 50%;
        max-height: 350px;

    }

`;

const Box = () =>{
    return(
        <Back>
            <Wrapper>

            </Wrapper>
        </Back>
    )
    
}

export default Box;

 