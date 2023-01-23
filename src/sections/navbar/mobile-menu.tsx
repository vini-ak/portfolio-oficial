import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import Colors from "../../shared/colors";
import SectionType from "../../shared/sections-type";
import * as C from "../../components";

const MenuContainer = styled.div`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.secondaryPurple};
`

const MenuLinks = styled.ul`
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 0;

    & > li {
        margin: 1rem;

        & a { 
            text-decoration: none;
            color: ${Colors.primaryBlue};
            font-size: 1.5rem;
            font-weight: bolder;
        }
    }
`

const Link = ({attrs, onClickLink: closeMobileMenu}) => {
    const ref = useRef(document.getElementById(attrs.id as string))
    const handleClick = () => {
        ref.current.scrollIntoView()
        console.log("acarao")
        closeMobileMenu()
    }

    return (
        <li className="link" onClick={() => handleClick()}><a>{attrs.text}</a></li>
    );
}

interface LinkParameters {
    text: string;
    id: string;
}

const Index = ({onClickLink: closeMobileMenu, ...props}) => {
    const links: LinkParameters[] = [
        {'text': 'Quem sou', 'id': SectionType.initial},
        {'text': 'O que faço', 'id': SectionType.skills},
        {'text': 'Portfolio', 'id': SectionType.portfolio},
        {'text': 'Contato', 'id': SectionType.contact},
    ];

    return (
        <MenuContainer>
            <MenuLinks>
                { links.map((item) => (<Link attrs={item} onClickLink={closeMobileMenu} />)) }
                <li><C.SocialMedia rounded={true}/></li>
            </MenuLinks>
        </MenuContainer>
    );
}

export default Index;