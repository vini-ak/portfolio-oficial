import SectionType from '../../shared/sections-type';
import * as S from './style';
import { default as I } from '../../public/assets/icons';

const Index = ({...props}) => (
    <S.Skills id={SectionType.skills}>
        <h1>O que eu faço</h1>

        <S.SkillsContainer>
            <S.SkillsCard>
                <S.SkillCardHeader>
                    <I.MobileIcon />
                    <p>Aplicativo</p>
                </S.SkillCardHeader>
                <p className="card-description">Aplicações mobile que funcionam tanto para Android quanto para iOS, graças ao framework Flutter.</p>
            </S.SkillsCard>

            <S.SkillsCard>
                <S.SkillCardHeader>
                    <I.SystemIcon />
                    <p>Sistema Web</p>
                </S.SkillCardHeader>
                <p className="card-description">Utilizo as tecnologias de frontend e backend mais modernas do mercado para criar aplicações web completas.</p>
            </S.SkillsCard>
            <S.SkillsCard>
                <S.SkillCardHeader>
                    <I.WebIcon />
                    <p>Sites & landing pages</p>
                </S.SkillCardHeader>
                <p className="card-description">Crio sites simples e intuitivos para aumentar a presença digital da sua marca.</p>
            </S.SkillsCard>
            <S.SkillsCard>
            <S.SkillCardHeader>
                    <I.LandingPageIcon />
                    <p>Consultoria</p>
                </S.SkillCardHeader>
                <p className="card-description">Ainda não sabe o que quer? Podemos conversar para que eu entenda a necessidade do seu negócio e ofereça a solução ideal!</p>
            </S.SkillsCard>
        </S.SkillsContainer>
    </S.Skills>
)

export default Index;