import styled from "styled-components";
import{ default as I } from '../public/assets/icons';
import Colors from "../shared/colors";
import { Screens as R } from "../shared/responsivity";

const Container = styled.div`
    display: flex;

    & > * {
        margin-left: .75rem;
    }

    &.rounded > * > * {
        border-radius: 50%;
        background-color: ${Colors.primaryPurple};
        box-sizing: content-box;
        padding: .25rem;
        transition: .2s ease-in;

        &:hover {
            background-color: ${Colors.secondaryPurple}
        }
    }

    &.filled  > * > * {
        color: white;
        transition: .2s ease-in;
        overflow-x: hidden;

        /* &:hover {
            transform: scale(1.1)
        } */
    }

    @media ${R.mobile} {
        & > * {
            margin-right: .75rem;
        }
    }


`;

const Index = ({...props}) => (
    <Container className={props.rounded ? 'rounded' : 'filled'}>
        <a href="https://github.com/vini-ak"><I.GithubIcon /></a>
        <a href="https://www.linkedin.com/in/viniciusdesantana/"><I.LinkedinIcon /></a>
        <a href=""><I.WhatsappIcon /></a>
    </Container>
);

export default Index;