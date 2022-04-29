import React from "react";
import styled from "styled-components";

const TextInvitation = styled.div`
    padding-top:2rem;
    width:100%;
    height: 55%;
    color: white;
    p {
        padding-top:1rem;
        color:hsl(217, 12%, 63%);
    }
`;
const Card = (props) => {
    const textCard = props;

    return(
        <TextInvitation>
            <h1>{textCard.inv[0].caption}</h1>
            <p>{textCard.inv[0].text}</p>
        </TextInvitation>
    )
};

export default Card;