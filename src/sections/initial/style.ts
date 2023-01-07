import styled from "styled-components";
import Colors from "../../shared/colors";

export const InitialSection = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: start;
    /* height: 85h; */
    position: relative;
    margin-bottom: 60px;

    & > * {
        display: block;
    }

    /* @media only screen and (min-width:1920px) {
        height: 90vh;
    } */

`

export const Description = styled.div`
    width: 470px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-left: 10vw;

    /* @media only screen and (min-width:1920px) {
        margin-left: 0;
    } */
`

export const PurpleBall = styled.div`
    border-radius: 50%;
    width: calc(100px + 10vw);
    height: calc(100px + 10vw);
    background: rgba(62, 6, 136, 1) 0% 0% no-repeat padding-box;
    opacity: 0.29;
    position: absolute !important;
    bottom: 0;
    left: calc(-30px - 1vw);

    /* @media only screen and (min-width:1920px) {
        top: calc(90vh - calc(200px + 5vw));
        right: calc(calc(200px + 10vw) + 5%);
    } */
`

export const RoundedBorderSquare = styled.div`
    width: 8.5rem;
    height: 3rem;
    border-radius: 60px 0px 60px 0px;
    background-color: ${Colors.primaryBlue};
    margin-left: 16px;
`

export const NameWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`

export const Name = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`;

export const Subtitle = styled.h3`
    font-size: 2.5rem;
    font-weight: 800;
`

export const DescriptionText = styled.p`
    font-size: 1rem;
    margin: 1rem 0;
`

export const SocialMediaContainer = styled.div`
    margin-left: -0.75rem;
    margin-top: 1rem;
`

export const ImageContainer = styled.div`
    position: relative;
    overflow: visible;
    display: flex;
    align-items: end;
    justify-content: flex-end;
    width: 41vw;
`