import styled from "styled-components";
import Colors from "../shared/colors";

const DefaultButton = styled.button`
    width: 100%;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 5px;
    background-color: ${Colors.primaryBlue};
    height: 3rem;
    transition: 0.2s ease-out;
    
    &:hover {
        cursor: pointer;
        background-color: ${Colors.secondaryPurple};
        color: white;
    }
`;

export default DefaultButton;