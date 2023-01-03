import React, { useEffect, useState } from "react";
import * as S from "./style";
import Utils from "../../shared/utils";
import SectionType from "../../shared/sections-type";
import { setInterval } from "timers";

const Index = ({...props}) =>  {
    const [ degrees , setDegrees] = useState<number>(0);

    useEffect(() => {
        if (degrees <= 2000)  {
            const newDegrees = degrees + 1;
            setDegrees(newDegrees);
        }
    }, [ degrees ]);

    return (
        <S.ResumeSection id={SectionType.resume} degrees={degrees}>
                <S.ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </S.ResumeItem>
                <S.ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </S.ResumeItem>
                <S.ResumeItem>
                    <h1>Educação</h1>
                    <p>Estudante de XXX na Universidade Federal Rural de Pernambuco</p>
                </S.ResumeItem>
            </S.ResumeSection>
    )
}

export default Index;