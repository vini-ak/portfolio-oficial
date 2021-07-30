import styled from "styled-components";
import Image from "next/image";
import together from "/public/assets/illustrations/together.svg";
import version_control from "/public/assets/illustrations/version_control.svg";
import ProjectDescription from "../../components/project-description/project-description";
import * as constants from "/public/utils/constants.js";


export default function ProjectsSection() {
    return (
        <section>
            <ProjectContainer blue>
                <ProjectDescription blue>
                    <p class="project-title">Web</p>
                    <p class="project-description">Donec est sem, fermentum ac lacinia et, placerat vel sem. Mauris congue vel est sed consectetur. Morbi efficitur, justo non hendrerit varius, nunc elit facilisis risus, nec lacinia dui est eu enim. Donec vitae turpis volutpat, dapibus est in, accumsan nunc.</p>
                </ProjectDescription>
                <SectionTitle>Projetos que eu <span>desenvolvo</span></SectionTitle>
            </ProjectContainer>
            <ProjectContainer yellow>
                <Image src={version_control} width={400} height={400}></Image>
                <ProjectDescription yellow>
                    <p class="project-title">Mobile</p>
                    <p class="project-description">Donec est sem, fermentum ac lacinia et, placerat vel sem. Mauris congue vel est sed consectetur. Morbi efficitur, justo non hendrerit varius, nunc elit facilisis risus, nec lacinia dui est eu enim. Donec vitae turpis volutpat, dapibus est in, accumsan nunc.</p>
                </ProjectDescription>
            </ProjectContainer>
        </section>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: ${props => props.blue ? '0' : '10%' };
    padding-right: ${props => props.yellow ? '0' : '10%'};
`

const SectionTitle = styled.p`
    font-family: RedHatDisplay;
    font-size: ${constants.MEDIUM_FONT_SIZE};
    width: 10rem;
    text-align: left;
    top: -50px;
    
    & span {
        text-align: right;
        float: right;
        font-size: 1.5rem;        
    }
`