import styled, { keyframes } from "styled-components";
import AnimatedBlocs from "../../components/blocs/animated-blocs";
import * as constants from "/public/utils/constants.js";

export default function PresentationSection() {
    return (
        <Section>
            <PresentationText>Agilidade, comunicação e criatividade. Sou apaixonado por desenvolver soluções que favoreçam o crescimento de outras empresas. Juntos, tenho a certeza de que encontraremos a solução digital perfeita!</PresentationText>

            <AnimatedButtonContainer>
                <AnimatedButton>Fale comigo</AnimatedButton>
            </AnimatedButtonContainer>

            <AnimatedBlocs></AnimatedBlocs>
        </Section>
    )
}

const Section = styled.section`
    margin: ${constants.SECTION_VERTICAL_MARGIN};
`

const PresentationText = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    font-family: Raleway;
    width: 40%;
    min-width: 200px;
    margin: 0 auto;
`


const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const AnimatedButtonContainer = styled.div`
    height: 13rem;
    width: 13rem;
    border: dashed 1px rgba(0,0,0,0.5);
    margin: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin: 2.5rem auto;
    animation: ${Rotate} 2s linear infinite;
`

const AnimatedButton = styled.div`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    border-style: dashed;
    border-width: 2px;
    border-color: black;
    background: #333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 auto;
    transition: 0.5s ease-in-out;

    & :hover {
        background-color: white;
        color: #333;

    }
`
