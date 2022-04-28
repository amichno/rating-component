import React from "react";
import styled from "styled-components";

const wrapper = styled.div`
    background-color: black;
    width:100vw;
    height: 100%;
    @media (max-width: 375px){
        width:100vw;
        height: 100%;
    }
    @media (min-width: 375px) and (max-width: 992px){

    }
    @media (min-width:993px) and (max-width:1440px){

    }
    @media (min-width: 1440px){

    }
`;

const box = () =>{
    return(
        <wrapper>

        </wrapper>
    )
}

export default box;

 