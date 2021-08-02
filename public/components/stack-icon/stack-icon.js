import styled from "styled-components";

const StackIcon = styled.div`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-color: ${props => props.color || '#ffca00'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > img {
        width: 80%;
        top: -1.5rem;
        margin: 0 auto;
    }
`


export default StackIcon ;