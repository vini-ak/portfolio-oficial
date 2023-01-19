import {createGlobalStyle} from "styled-components";
import * as Sections from "../sections";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Screens as R } from "../shared/responsivity";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Lato !important;
        margin: 0;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    button {
        border: none;
    }

    body, html {
        margin: 0 !important;
    }

    body {
        margin: 0 auto;
    }

    h1 {
        font-size: 2rem;
    }

    .is-mobile {
        display: none !important;

        @media  ${R.mobile} {
            display: block !important;
        }
    }
`

export default function Home() {
    const [offset, setOffset] = useState<number>();
    const [showNavbarBg, setShowNavbarBg] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            let previousOffset = offset;
            let currentOffset = window.scrollY;

            setShowNavbarBg(currentOffset > 600);
            
            setOffset(currentOffset);
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])
    
    
    return (
        <div>
            {/* Setting the global style... */}
            <Head>
                <link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel='stylesheet' type='text/css'></link>
            </Head>
            <GlobalStyle></GlobalStyle>

            <Sections.Navbar showBg={showNavbarBg} />

            <Sections.Initial handleBg={setShowNavbarBg} />
            <Sections.Resume />
            <Sections.Skills />
            <Sections.Portfolio />
            <Sections.Contact />
            <Sections.Footer />

        </div>
    );
}