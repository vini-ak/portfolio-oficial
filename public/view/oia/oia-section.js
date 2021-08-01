import styled from "styled-components";
import { SECTION_HORIZONTAL_PADDING, SECTION_VERTICAL_MARGIN } from "../../utils/constants";
import Image from "next/dist/client/image";

import oia_logo from "/public/assets/images/oia/logo_oia.svg";
import oia_screen1 from "/public/assets/images/oia/oia_screen1.jpg";
import oia_screen2 from "/public/assets/images/oia/oia_screen2.jpg";
import oia_screen3 from "/public/assets/images/oia/oia_screen3.jpg";

import PortfolioDefaultButton from "../../components/buttons/default-button";

export default function OiaSection() {
    return (
        <OiaContainer>
            <OiaProjectImages>
                <OiaProjectImagesBackground></OiaProjectImagesBackground>
                <OiaProjectImagesPrints>
                    <div className="print1"><Image src={oia_screen1}></Image></div>
                    <div className="print2"><Image src={oia_screen2}></Image></div>
                    <div className="print3"><Image src={oia_screen3}></Image></div>
                </OiaProjectImagesPrints>
            </OiaProjectImages>
            <OiaProjectDescription>
                <OiaLogoContainer>
                    <OiaLogo>
                        <Image src={oia_logo} width={80}></Image>
                        <p>Smart Work</p>
                    </OiaLogo>
                </OiaLogoContainer>
                <OiaProjectDescriptionBody>
                    <p className="oia-project-description">Aplicativo que serve para encontrar prestadores de serviço.</p>
                    
                    <p>Features</p>
                    <ul className="features-list">
                        <li>Login com Google e Facebook</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>

                    <PortfolioDefaultButton yellow>Ver mais</PortfolioDefaultButton>
                </OiaProjectDescriptionBody>
            </OiaProjectDescription>
        </OiaContainer>
    );
}

const OiaContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    min-height: 75vh;
    padding: ${SECTION_HORIZONTAL_PADDING};
    margin: ${SECTION_VERTICAL_MARGIN};
`

const OiaProjectDescription = styled.div`
    grid-column: 2;
    grid-row: 1;
    font-family: RedHatDisplay;
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
`

const OiaLogoContainer = styled.div`
    align-self: flex-end;
`

const OiaLogo = styled.div`
    width: 13rem;
    margin-bottom: 5vh;

    & p {
        text-align: right;
        font-weight: bold;
        font-family: Raleway;
        font-size: 1.25rem;
    }
`

const OiaProjectDescriptionBody = styled.div`
    text-align: left;
    margin-left: 17%;

    & .oia-project-description {
        font-size: 1.125rem;
        font-weight: bold;
        margin: 5vh 0;

    }

    & .features-list {
        list-style: none;   
        list-style-image: url('../../assets/icons/fire.png');
        list-style-position: outside;
        font-family: Raleway;
        margin-bottom: 3rem;
    }
`

const OiaProjectImages = styled.div`
    grid-column: 1;
    grid-row: 1;

`

const OiaProjectImagesBackground = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-color: #E5E4FF;
    margin: auto auto;
    top: 25vh;
`

const OiaProjectImagesPrints = styled.div`
    position: absolute;
    top: 0;
    width: 100%;

    & .print1 {
        top: 0;
        left: 30%;
    }
    & .print3 {
        position: absolute;
        top: 10%;
        right: 18%;
        z-index: 3;
    }
`