import styled from "styled-components";

const PortfolioDefaultButton = styled.button`
    min-width: 75px;
    border: dashed 3px ;
    border-radius: 20px; 
    background-color: ${props => props.yellow ? '#FFCA00' : props.blue ? '#0E0B98' : 'white'};
    color: ${props => props.yellow ? 'black' : props.blue ? 'white' : 'black'};
    border-color: black;
    padding: 0.25rem 3rem;
    font-family: RedHatDisplay;
    font-weight: bold;
    font-size: 1.125rem;
`

export default PortfolioDefaultButton;