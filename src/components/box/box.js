import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
import Card from "../card/card";
import Score from "../score/score";
import { invitation } from "../../data/invitationText";
import { scores } from "../../data/rating";
import ButtonSubmit from "../ButtonSubmit/buttonsubmit";
import Succes from "../Succes/succes";

const Back = styled.div`
    background-color: black;
    width:100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 375px){
        min-width:375px;
        width:100vw;
        height: 100vh;
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
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    overflow-y: scroll;
    min-width: 350px;
    max-width: 450px;
    min-height: 400px;
    max-height: 550px;
    @media (max-width: 375px) {
        width: 95%;
        height: 50%;
        overflow-y: scroll;
    }

    @media (min-width:375px) and (max-width: 992px) {
        width: 40%;
        min-width: 350px;
        max-width: 450px;
        height: 50%;
        
    }
    @media (min-width:992px){
        width: 40%;
        max-width: 350px;
        height: 50%;
        max-height: 350px;

    }

`;

const Box = () =>{

    const [rate, setRate] = useState(0);
    const [voted, setVoted] = useState('none');

    function onClickRate(newRate){
       setRate(newRate)
    }

    function onClickVote(){
        setVoted('voted');
    }


    if(voted !== 'voted')
        return(    
            <Back>
                <Wrapper>
                    <Logo/>
                        <Card inv ={invitation}/>
                        <Score scores={scores} onClick={onClickRate} rate={rate}/>
                        <ButtonSubmit voted={voted} onClick={onClickVote}/>)
                        </Wrapper>
            </Back>)
    else 
            return( <Back>
                         <Wrapper>
                             <Succes rate ={rate}/>
                         </Wrapper>
                    </Back> )
}

export default Box;

 