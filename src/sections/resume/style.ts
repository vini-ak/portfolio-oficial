import styled from "styled-components";

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

    @media only screen and (min-width:1920px) {
        margin: 100px 0;
        width: 100%;
    }

    @media only screen and (max-width:900px) {
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
        line-height: 3rem;
    }

    @media only screen and (max-width:900px) {
        max-width: 90%;
    }
`