import styled from "styled-components";
import StackCard from "../../components/stack-icon/stack-card";
import StackIcon from "../../components/stack-icon/stack-icon";
import { SECTION_HORIZONTAL_PADDING, SECTION_VERTICAL_MARGIN } from "../../utils/constants";

export default function StacksSection() {
    return (
        <StacksContainer>
            <StacksContainerTitle>Minhas <span>habilidades</span></StacksContainerTitle>
            
            <div className="stack-icons">

                <StackCard>
                    <StackIcon color="#00DEEC"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p> HTML + CSS</p>
                </StackCard>
                
                <StackCard>
                    <StackIcon color="#ffca00"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>Angular</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#ffca00"> 
                        <img src="../../assets/icons/stacks/flutter.png"></img>
                    </StackIcon>
                    <p>Flutter</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#00DEEC"> 
                        <img src="../../assets/icons/stacks/python.svg"></img>
                    </StackIcon>
                    <p>Python</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#ffca00"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>AWS</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#ffca00"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>Flask</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#00DEEC"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>Next.js</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#0E0B98"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>React</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#0E0B98"> 
                        <img src="../../assets/icons/stacks/nodejs.svg"></img>
                    </StackIcon>
                    <p>Node.js</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#00DEEC"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>GCP</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#ffca00"> 
                        <img src="../../assets/icons/stacks/ui.png"></img>
                    </StackIcon>
                    <p>UI Design</p>
                </StackCard>
                <StackCard>
                    <StackIcon color="#0E0B98"> 
                        <img src="../../assets/icons/stacks/css.svg"></img>
                    </StackIcon>
                    <p>Firebase</p>
                </StackCard>
            </div>
        </StacksContainer>
    );
}


const StacksContainer = styled.section`
    padding: ${SECTION_HORIZONTAL_PADDING};
    margin: ${SECTION_VERTICAL_MARGIN};

    & .stack-icons {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
    }
`

const StacksContainerTitle = styled.p`
    width: 10rem;
    margin-bottom: 5vh;
    font-family: Raleway;
    font-size: 1.25rem;
    font-weight: 500;

    text-align: left;
    
    & span {
        text-align: right;
        float: right;
        font-size: 1.5rem;  
        font-weight:bold;
    }
`