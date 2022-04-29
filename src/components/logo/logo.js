import React from "react";
import styled from "styled-components";

const Star = styled.div`

    width: 2.5rem;
    height: 2.5rem;
    background-image:url('./../../images/icon-star.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: hsl(213, 19%, 18%);
    border-radius: 100%;
`;



const Logo = () =>{

    return(
        <Star>
        </Star>
    )

}

export default Logo;