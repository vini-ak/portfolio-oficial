import React from 'react';
import { NavbarSection } from "./style";
import SectionType from '../../shared/sections-type';
import * as C from '../../components';
import Colors from '../../shared/colors';

const Navbar = ({...props}) => {
    const [ initialSectionHeight, setInitialSectionHeight] = React.useState<number | undefined>(undefined);
    const [ showBg, setShowBg ] = React.useState<boolean>(false);

    if (typeof document !== "undefined") {
        React.useEffect(() => {
            let initialSection = document.getElementById(SectionType.initial);
            let offsetTop = initialSection.offsetTop;

            setInitialSectionHeight(offsetTop);

            let isGraterThan100px = initialSection.offsetTop > 100;
            console.log(document.body.offsetTop);

            setShowBg(isGraterThan100px);
        }, [initialSectionHeight, showBg]);
    }


    return (
        <NavbarSection 
            style={{backgroundColor: props.showBg ? Colors.primaryBlue : null, position: props.showBg ? 'fixed' : 'absolute'}}
        >
            <C.Logo style={{transform: 'scale(.75)', marginLeft: '-.5rem'}} />
            <ul className="links">
                <li className="link"><a href={`#${SectionType.initial}`}>Quem sou</a></li>
                <li className="link"><a href={`#${SectionType.skills}`}>O que faço</a></li>
                <li className="link"><a href={`#${SectionType.portfolio}`}>Portfólio</a></li>
                <li className="link"><a href={`#${SectionType.contact}`}>Contato</a></li>
                <li><C.SocialMedia /></li>
            </ul>
        </NavbarSection>
    );
}


export default Navbar;