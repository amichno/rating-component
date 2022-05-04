import styled from "styled-components";
import { congrats } from "../../data/congrat";

const Congrat = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
`;

const Ikon = styled.div`
    width:100%;
    height: 4rem;
    background-image: url('./../../images/illustration-thank-you.svg');
`;

const Rates = styled.div`
    width: 60%;
    height: 1rem;
    font-size: 0.6rem;
    background-color: hsl(213, 19%, 18%);
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
`;

const Succes = (props)=>{

    return(
        <Congrat>
              <Ikon></Ikon>  
              <Rates></Rates>
        </Congrat>
    )

}

export default Succes;