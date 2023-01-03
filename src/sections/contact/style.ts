import styled from "styled-components";

export const ContactSection = styled.div`
    display: flex;
    height: 90vh;
    padding-right: 10vw;
    align-items: center;
    justify-content: space-between;
`

export const ImageContainer = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden;


    & > * {
        position: relative;
    }

    & > .social-media {
        position: absolute;
        bottom: 15%;
        left: 10vw;
    }
`

export const FormContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-flow: column nowrap;
`