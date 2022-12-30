import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Colors from "./shared/colors"
import { DefaultButton } from "./components/default-button";
import Image from "next/image";

const GlobalStyle = createGlobalStyle`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
        font-family: Lato !important;
        margin: 0;
    }

    button {
        border: none;
    }

    body {
        max-width: 1500px;
        margin: 0 auto;
    }
`

export default function Home() {
    return (
        <div>
            {/* Setting the global style... */}
            <GlobalStyle></GlobalStyle>

            <InitialSection>
                <Description>
                    <NameWrapper>
                        <Name>Vinícius Vieira</Name>
                        <RoundedBorderSquare></RoundedBorderSquare>
                    </NameWrapper> 
                    <Subtitle>Software Engineer</Subtitle>
                    <DescriptionText>
                        Sou um Engenheiro de Software pernambucano caçando oportunidades por aí. Busco fazer parte de projetos que impactem a realidade de pessoas e empresas no Brasil e no mundo, entregando coisas de forma ágil e com foco no lado humano.
                    </DescriptionText>
                    <DefaultButton>Solicite um orçamento</DefaultButton>
                </Description>

                <InitialSectionImg src="/assets/main.png" />
                <PurpleBall />
            </InitialSection> 

            <ResumeSection>
                <ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </ResumeItem>
                <ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </ResumeItem>
                <ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </ResumeItem>
            </ResumeSection>
           
        </div>
    );
}

const ResumeSection = styled.div`
    background: transparent linear-gradient(270deg, rgba(88, 64, 216, 1) 0%, rgba(59, 208, 230, 1) 100%) 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    margin: 0 10vw;
    width: 80%;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 60px;

    @media only screen and (min-width:1500px) {
        margin: 100px 0;
        width: 100%;
    }
`

const ResumeItem = styled.div`
    color: white;
    max-width: 25%;
    
    & > h1 {
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 3rem;
    }
`

const InitialSection = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: start;
    height: max(80vh, 750px);
    position: relative;

    & > * {
        display: block;
    }

    @media only screen and (min-width:1500px) {
        height: 90vh;
    }

`

const InitialSectionImg = styled.img`
    height: 90%;
    position: relative;
    top: 0;

    @media only screen and (min-width:1500px) {
        height: 100%;
    }
`

const Description = styled.div`
    width: 470px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-left: 10vw;

    @media only screen and (min-width:1500px) {
        margin-left: 0;
    }
`

const PurpleBall = styled.div`
    border-radius: 50%;
    width: calc(200px + 5vw);
    height: calc(200px + 5vw);
    background: rgba(62, 6, 136, 1) 0% 0% no-repeat padding-box;
    opacity: 0.29;
    position: absolute;
    top: calc(90% - calc(200px + 5vw));
    right: calc(calc(200px + 5vw) + 5%);

    @media only screen and (min-width:1500px) {
        top: calc(90vh - calc(200px + 5vw));
        right: calc(calc(200px + 10vw) + 5%);
    }
`

const RoundedBorderSquare = styled.div`
    width: 8.5rem;
    height: 3rem;
    border-radius: 60px 0px 60px 0px;
    background-color: ${Colors.primaryBlue};
    margin-left: 16px;
`

const NameWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`

const Name = styled.h1`
    font-size: 3rem;
    font-weight: bold;
`;

const Subtitle = styled.h3`
    font-size: 2.5rem;
    font-weight: 800;
`

const DescriptionText = styled.p`
    font-size: 1rem;
    margin: 1rem 0;
`