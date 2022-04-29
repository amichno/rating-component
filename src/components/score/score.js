import React from "react";
import styled from "styled-components";


const Scale = styled.div`
    width: 100%;
    height: 3rem;
    padding-top: 15%;
`;

const List = styled.ul`
    list-style: none;    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Rate =styled.li`
    width: 3rem;
    height: 3rem;
    background-color: hsl(213, 19%, 18%);    
    border-radius:100%;
    color: hsl(217, 12%, 63%);
    display: flex;
    justify-content:center;
    align-items: center;
`;

const Span = styled.span`
`;

const Score = (props) => {

    const ListScores = props;

    return(
        <Scale>
            <List>                
                    {ListScores.scores.map(score =>
                        <Rate><Span>{score}</Span></Rate>                       
                    )}               
            </List>
        </Scale>
    )

};

export default Score;