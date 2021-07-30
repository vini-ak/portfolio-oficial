import styled from "styled-components";

const ProjectDescription = styled.div`
    background-color: ${props => props.yellow ? '#ffca00' : '#0E0B98'};
    border-radius: ${props => props.yellow ? '1.25rem 0 0 1.25rem' : '0 1.25rem 1.25rem 0'};
    color: ${props => props.yellow ? 'black' : 'white'};
    right: 0;
    margin: 1rem 0;
    padding: 5%;
    width: 40%;
    max-width: 600px;

    & .project-title {
        font-family: RedHatDisplay;
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    & .project-description {
        font-family: Raleway;
        font-size: 1rem;
    }
`

export default ProjectDescription;