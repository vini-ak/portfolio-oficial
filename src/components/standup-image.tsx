import Image from "next/image";
import styled from "styled-components";

const Index = styled.img`
    max-width: 100%;
    max-height: 900px;
    position: relative;
    top: 0;
    overflow: hidden;

    @media only screen and (max-width:900px) {
        display: none;
    }

    /* @media only screen and (min-width:1920px) {
        height: 100%;
    } */
`

export default Index;

