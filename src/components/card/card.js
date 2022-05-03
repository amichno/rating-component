import React from "react";
import styled from "styled-components";

const TextInvitation = styled.div`
    padding-top:1.5rem;
    width:100%;
    height: 55%;
    color: white;
    p {
        padding-top:1rem;
        color:hsl(217, 12%, 63%);
    }
`;
const Card = (props) => {
    const textCard = props.inv[0];

    return(
        <TextInvitation>
            <h1>{textCard.caption}</h1>
            <p>{textCard.text}</p>
        </TextInvitation>
    )
};

export default Card;