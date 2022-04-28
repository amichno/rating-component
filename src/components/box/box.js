import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: black;
    width:100vw;
    height: 100vh;

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

const Box = () =>{
    return(
        <div>
            cokolwiek
        </div>
    )
    
}

export default Box;

 