import React from "react";
import * as S from './style';
import * as C from '../../components';
import SectionType from "../../shared/sections-type";
import dynamic from "next/dynamic";
import Image from "next/image";
import Utils from "../../shared/utils";

const MyImage = dynamic(() => import("../../components/standup-image"));

const Index = ({...props}) => {

    return (
        <S.InitialSection id={SectionType.initial}>
            <S.Description>
                <S.NameWrapper>
                    <S.Name>Vinícius Vieira</S.Name>
                    <S.RoundedBorderSquare></S.RoundedBorderSquare>
                </S.NameWrapper> 
                <S.Subtitle>Software Engineer</S.Subtitle>
                <S.DescriptionText>
                    Sou um Engenheiro de Software pernambucano caçando oportunidades por aí. Busco fazer parte de projetos que impactem a realidade de pessoas e empresas no Brasil e no mundo, entregando coisas de forma ágil e com foco no lado humano.
                </S.DescriptionText>
                <C.DefaultButton onClick={() => Utils.scrollTo(SectionType.contact)}>Solicite um orçamento</C.DefaultButton>
                <S.SocialMediaContainer>
                    <C.SocialMedia rounded={true} />
                </S.SocialMediaContainer>
            </S.Description>

            <S.ImageContainer>
                <MyImage src="/assets/main.png" />
                {/* <S.InitialSectionImg src="/assets/main.png" /> */}
                <S.PurpleBall />
            </S.ImageContainer>
        </S.InitialSection>
    )
}

export default Index;