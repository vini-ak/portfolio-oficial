import React, { useEffect } from "react";
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

const Index = ({onClickLink, ...props}) => {
    return (
        <MenuContainer>
            <MenuLinks>
                <li className="link" onClick={() => onClickLink()} ><a href={`#${SectionType.initial}`}>Quem sou</a></li>
                <li className="link"><a href={`#${SectionType.skills}`}>O que faço</a></li>
                <li className="link"><a href={`#${SectionType.portfolio}`}>Portfólio</a></li>
                <li className="link"><a href={`#${SectionType.contact}`}>Contato</a></li>
                <li><C.SocialMedia rounded={true}/></li>
            </MenuLinks>
        </MenuContainer>
    );
}

export default Index;