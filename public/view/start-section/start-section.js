import styled  from "styled-components"
import { keyframes } from "styled-components"
import { css } from "styled-components"
import banner1 from '/public/assets/images/banner-1.webp'
import banner2 from '/public/assets/images/banner-2.webp'
import moon from '/public/assets/images/thin-moon.png'
import Image from 'next/image'
import * as constants from '/public/utils/constants'

export default function StartSection() {
    return (
        <Section>
            <div className="start-page-text">
                <MyName>Vinícius Vieira</MyName>
                <Title>Front-end <span className="start-text-animation">creative</span> developer</Title>
            </div>

            <div className="start-page-images">
                <div className="banner-1" >
                    <Image src={banner1}></Image>
                </div>
                <div className="banner-2">
                    <Image src={banner2}></Image>
                </div>
                <div className="thin-moon">
                    <Image src={moon}></Image>
                </div>
            </div> 
            

            <style jsx>{`
                .start-page-text {
                    margin: 15% auto;
                    z-index: 2;
                }

                .start-page-images {
                    width: 60%;
                    height: 40vh;
                    position: absolute;
                    top: 30%;
                    right: 0;
                    overflow: visible;
                }

                .banner-1 {
                    position: absolute;
                    bottom: -40%;
                    z-index: 2;
                    left: -15%;
                    width: 35%;
                }

                .banner-2 {
                    position: absolute;
                    height: 120%;
                    overflow: hidden;
                }

                .thin-moon {
                    width: 3.5rem;
                    transform: rotate(-25deg);
                    right: -3%; top: -12%;
                    position: absolute;
                }

            `}
            </style>
        </Section>

    );
}

const Section = styled.section`
    position: relative;
    padding: 5rem 0;
    margin: ${constants.SECTION_HORIZONTAL_PADDING};
`

const MyName = styled.h2`
    font-size: 1.25rem;
    color: rgba(0,0,0,0.44);

`

const _moveTextUp = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);

    }
`

const Title = styled.h1`
    font-family: RedHatDisplay;
    font-weight: 200;
    font-size: 2.5rem;

    & .start-text-animation {
        animation: ${_moveTextUp} 0.5;
        animation-iteration-count: infinite;
    }
`
