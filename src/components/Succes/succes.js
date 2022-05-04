import styled from "styled-components";
import { congrats } from "../../data/congrat";
import { scores } from "../../data/rating";

const Congrat = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const Ikon = styled.div`
    width:100%;
    height: 8rem;
    background-image: url('./../../images/illustration-thank-you.svg');
    background-repeat: no-repeat;
    background-position: center;
`;

const Rates = styled.div`
    width: 60%;
    height: 1.5rem;
    font-size: 0.6rem;
    background-color: hsla(213, 19%, 18%, 0.3);
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    color:hsl(25, 97%, 53%);
    text-align: center;
    line-height:1.5rem;
    
    
`;

const Caption = styled.h2`
    color:white;
    padding-top: 2rem;

`;

const Paragraph = styled.p`
    color: hsl(217, 12%, 63%);
    font-size: 0.8rem;
    text-align: center;
    padding-top: 1rem;
`;

const Succes = (props)=>{

    return(
        
        <Congrat>
              <Ikon></Ikon>  
              <Rates>
                  You selected {props.rate} from {scores.length}
              </Rates>
              <Caption>
                     {congrats[0].caption}
              </Caption>
              <Paragraph>
                    {congrats[0].text}
              </Paragraph>
        </Congrat>
    )

}

export default Succes;