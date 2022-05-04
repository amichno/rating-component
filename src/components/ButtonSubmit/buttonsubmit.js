import styled from "styled-components";

const Wrap = styled.div`
    width:100%;
    height:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 100%;
    height: 2rem;
    background-color: hsl(25, 97%, 53%);
    border: none;
    color: white;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        color:hsl(25, 97%, 53%);
        background-color: white;
    }
`;

const ButtonSubmit = (props)=>{
    return(
        <Wrap>
            <Button type='submit' {...props}>
                Submit
            </Button>
        </Wrap>
    )

}

export default ButtonSubmit;