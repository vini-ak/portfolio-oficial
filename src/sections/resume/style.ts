import styled from "styled-components";
import { Screens as R } from "../../shared/responsivity";

interface Degrees{
    degrees?: number;
}

export const ResumeSection = styled.div<Degrees>`
    /* background: ${p => `transparent linear-gradient(${p.degrees}deg, rgba(88, 64, 216, 1) 0%, rgba(59, 208, 230, 1) 100%) 0% 0% no-repeat padding-box;`}  */
    border-radius: 10px;
    opacity: 1;
    margin: 0 10vw;
    width: 80%;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 60px;

    @media ${R.largeScreen} {
        max-width: 1920px;
        margin: 0 auto;       
        margin-bottom: 60px; 
    }

    @media  ${R.mobile} {
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-around;
        height: unset;
        min-height: 100vh;
        padding: 2rem 0;
    }

`

export const ResumeItem = styled.div`
    color: white;
    max-width: 25%;
    
    & > h1 {
        font-weight: bolder;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    @media  ${R.mobile} {
        max-width: 90%;
    }
`