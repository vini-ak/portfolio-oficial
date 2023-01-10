import styled from "styled-components";
import Colors from "../../shared/colors";

export const Skills = styled.div`
    width: fill;
    min-height: 70vh;
    max-height: 500px;
    background-color:${Colors.primaryPurple};
    padding: calc(50px + 3vh) 10vw;
    color: #ffffff;

    & > h1 {
        /* margin-top: 100px; */
        margin-bottom: 3rem;
    }

    @media screen and (max-width: 900px) {
        & {
            
            max-height: unset;
            margin: 0 auto;
        }
    }
` 

export const SkillsContainer =  styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 900px) {
        & {
            justify-content: center;
        }
    }
    
`

export const SkillsCard = styled.div`
    background-color: #4C35C4;
    width: 17vw;
    min-width: 150px;
    max-width: 300px;
    height: 17vw;
    min-height: 150px;
    max-height: 300px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin-bottom: 1rem;

    transition: .2s ease-in;

    & > p {
        text-align: center;
        display: none;
        font-size: .9rem;
        line-height: 1.5rem;
    }

    &:hover {
        justify-content: start;

        & > p {
            display: inline;
        }
    }

    @media screen and (max-width: 900px) {
        & {
            width: 80vw;
            height: 80vw;
            justify-content: center !important;

            & > p {
                display: inline;
            }
        }
    }
`

export const SkillCardHeader = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-bottom: 1rem;

    & > svg {
        box-sizing: content-box;
        padding: .25rem;
        background: ${Colors.primaryBlue};
        border-radius: 50%;
        margin-bottom: .5rem;
    }
`