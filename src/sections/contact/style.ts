import styled from "styled-components";
import Colors from "../../shared/colors";

export const ContactSection = styled.div`
    display: flex;
    padding-right: 10vw;
    min-height: 100vh;
    align-items: bottom;
    justify-content: space-between;

   
`

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    overflow: hidden;
    width: 41vw;
    max-width: 700px;
    /* height: 100%; */



    & > .social-media {
        position: absolute;
        bottom: 15%;
        left: 10vw;
    }
`

export const FormContent = styled.div `
    display: flex;
    margin-bottom: 10vh;
    flex-flow: column nowrap;
    justify-content: flex-end;
    
    & h1 {
        margin-bottom: 2rem;
    }


`

export const FormContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    /* padding: 10vh 0; */

    & .button {
        margin-top: 1rem;
    }

`

export const FormField = styled.div`
    margin-top: .5rem;    

    & .input-label {
        color: ${Colors.darkGrey};
        margin-left: .4rem;
        margin-bottom: .75rem;
        font-size: .875rem;

        &.mandatory::after {
            content: '*';
            margin-left: .25rem;
        }
    }

    & > * {
        overflow: visible;
    }
`