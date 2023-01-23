import React, { useEffect, } from "react";
import * as S from "./style";
import SectionType from "../../shared/sections-type";
import { setInterval } from "timers";

const Index = ({...props}) =>  {
    useEffect(() => {
        const updateBackground = () => {
            let degrees = 0;

            setInterval(() => {
                // debugger;
                document.getElementById(SectionType.resume).style.background = 'transparent linear-gradient('+ degrees +'deg, rgba(88, 64, 216, 1) 0%, rgba(59, 208, 230, 1) 100%) 0% 0% no-repeat padding-box';
                ++degrees;
            }, 20);
        }

        updateBackground();
    }, []);

    return (
        <S.ResumeSection id={SectionType.resume}>
                <S.ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de Sistemas de Informação na Universidade Federal Rural de Pernambuco</p>
                </S.ResumeItem>
                <S.ResumeItem>
                    <h1>Experiência internacional</h1>
                    <p>Fiz um intercâmbio de seis meses nos Estados Unidos, mais precisamente no estado do Alaska</p>
                </S.ResumeItem>
                <S.ResumeItem>
                    <h1>CTO de Empresa Junior</h1>
                    <p>Tive a honra de ser diretor da Seed a Bit Tecnologia entre janeiro e maio de 2021</p>
                </S.ResumeItem>
            </S.ResumeSection>
    )
}

export default Index;