import styled from "styled-components";
import Image from "next/image"
import * as constants from '/public/utils/constants'

/* IMAGES */
import instagram_logo from "/public/assets/icons/redes-sociais/instagram.svg"
import linkedin_logo from "/public/assets/icons/redes-sociais/linkedin.svg"
import whatsapp_logo from "/public/assets/icons/whatsapp.svg"
import email_logo from "/public/assets/icons/email.svg"

export default function Footer() {
    return (

        <footer>
            <SocialMediaContainerTitle>E aí, vamos conversar?</SocialMediaContainerTitle>
            <SocialMediaContainer>

                <SocialMediaComponent>
                    <SocialMediaIcon>
                        <Image src={instagram_logo} width={40} height={40}></Image>
                    </SocialMediaIcon>
                    <p>Email</p>
                </SocialMediaComponent>

                <SocialMediaComponent>
                    <SocialMediaIcon>
                        <Image src={linkedin_logo} width={40} height={40}></Image>
                    </SocialMediaIcon>
                    <p>Linkedin</p>
                </SocialMediaComponent>

                <SocialMediaComponent>
                    <SocialMediaIcon>
                        <Image src={linkedin_logo} width={40} height={40}></Image>
                    </SocialMediaIcon>
                    <p>Instagram</p>
                </SocialMediaComponent>

                <SocialMediaComponent>
                    <SocialMediaIcon>
                        <Image src={linkedin_logo} width={40} height={40}></Image>
                    </SocialMediaIcon>
                    <p>Whatsapp</p>
                </SocialMediaComponent>

            </SocialMediaContainer>

            <ContactContainer>
                <ContactContainerInfo>
                    <Image src={email_logo}></Image>
                    <p>vinicius.vdes@gmail.com</p>
                </ContactContainerInfo>
                <ContactContainerInfo>
                    <Image src={whatsapp_logo}></Image>
                    <p>(81) 98132-1095</p>
                </ContactContainerInfo>
            </ContactContainer>

            <Rodape>Desenvolvido por Vinícius Vieira © 2021</Rodape>

        </footer>
        
    )
}

const SocialMediaContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${constants.SECTION_HORIZONTAL_PADDING};
    margin: 5rem 10%;
`

const SocialMediaContainerTitle = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    font-family: Raleway;
    font-weight: 400;
    margin-top: 10%;

`

const SocialMediaComponent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & p {
        font-family: RedHatDisplay;
        font-size: 1.125rem;
        margin-top: 1rem;
    }
`

const SocialMediaIcon = styled.div`
    height: 5rem;
    width: 5rem;
    background: #c4c4c4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContactContainer = styled.div`
    padding: ${constants.SECTION_HORIZONTAL_PADDING};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    margin: ${constants.SECTION_HORIZONTAL_PADDING};
    margin-bottom: 5rem;
`

const ContactContainerInfo = styled.div`
    font-size: 1rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 0.5rem;

    & > p {
        margin-left: 1rem;
        font-family: RedHatDisplay;

    }
`
const Rodape = styled.div`
    width: 100vw;
    background: #c4c4c4;
    color: white;
    font-family: RedHatDisplay;
    text-align: center;
    color: black;
    padding: 0.5rem 0;
    font-size: 1rem;
`