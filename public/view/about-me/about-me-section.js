import styled, { keyframes } from "styled-components";
import PortfolioDefaultButton from "../../components/buttons/default-button";
import { SECTION_HORIZONTAL_PADDING, SECTION_VERTICAL_MARGIN } from "../../utils/constants";

export default function AboutMeSection() {
    return (
        <AboutMeContainer>
            <AboutMeImageContainer>
                <AboutMeImage></AboutMeImage>
            </AboutMeImageContainer>
            <AboutMeDescription>
                <div>
                    <p className="about-me-text">Donec est sem, fermentum ac lacinia et, placerat vel sem. Mauris congue vel est sed consectetur. Morbi efficitur, justo non hendrerit varius, nunc elit facilisis risus, nec lacinia dui est eu enim. Donec vitae turpis volutpat, dapibus est in, accumsan nunc. </p>
                    <PortfolioDefaultButton blue>Ver currículo</PortfolioDefaultButton>
                </div>
            </AboutMeDescription>
        </AboutMeContainer>
    );
}

const AboutMeContainer = styled.section`
    height: 100vh;
    background-image: url("../../assets/images/banner-about-me.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin: ${SECTION_VERTICAL_MARGIN};
    margin-top: 10rem;
    padding: ${SECTION_HORIZONTAL_PADDING};
`

const AboutMeDescription = styled.div`
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-bottom: 5rem;

    & > div {
        transform: rotate(-8deg);
        margin: 0 20%;
    }

    & > div:hover {

    }

    & .about-me-text {
        font-weight: bold;
        margin-bottom: 1.5rem;
        line-height: 1.75rem;
        font-size: 1.125rem;
        font-family: Raleway;
    }
`

const AboutMeImageContainer = styled.div`
    grid-column: 1;
    grid-row: 1;
`

const AboutMeImage = styled.div`
    width: 70%;
    height: 80%;
    background-color: #c4c4c4;
    border: solid 5px black;
    box-shadow: 1.5rem 2rem 0px 3px #000000;
`