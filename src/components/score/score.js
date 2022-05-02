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

const ListItem =styled.li`
    width: 3rem;
    height: 3rem;
    background-color: hsl(213, 19%, 18%);    
    border-radius:100%;
    color: hsl(217, 12%, 63%);
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    z-index:2;
    &:hover{
        background-color: hsl(25, 97%, 53%);
        color: white;
    }
`;

const Butto = styled.button`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border:0;
    background-color: hsl(213, 19%, 18%);  
    &:hover{
        background-color: hsl(25, 97%, 53%);
        color: white;
    }
`;

const Score = (props) => {

    const ListScores = props.scores;
    //const SetRate = props.onClick;

    return(
        <Scale>
            <List>                
                    {ListScores.map(score =>
                        <ListItem >
                            <Butto onClick = {()=>props.onClick(score)}>{score}</Butto>
                            
                        </ListItem>                       
                    )}               
            </List>
        </Scale>
    )

};

export default Score;