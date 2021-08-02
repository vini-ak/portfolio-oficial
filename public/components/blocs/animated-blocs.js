import styled, { keyframes } from "styled-components";

export default function AnimatedBlocs() {
    return (
        <Blocs>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc ></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation1></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation3></BuildingBloc>
            <BuildingBloc animation2></BuildingBloc>
            <BuildingBloc animation4></BuildingBloc>
        </Blocs>
    );
}

const blocAnimation1 = keyframes`
    0% {
        background-color: #ffca00;
    } 50% {
        background-color: #0E0B98;
    } 100% {
        background-color: white;
    }
`

const blocAnimation2 = keyframes`
    0% {
        background-color: #0E0B98;
    } 50% {
        background-color: white;
    } 100% {
        background-color: #ffca00;
    }
`

const blocAnimation3 = keyframes`
    0% {
        background-color: #0E0B98;
    } 50% {
        background-color: #ffca00;
    } 100% {
        background-color: white;
    }
`

const blocAnimation4 = keyframes`
    0% {
        background-color: white;
    } 50% {
        background-color: #0E0B98;
    } 100% {
        background-color: #ffca00;
    }
`

const BuildingBloc = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    margin: 0.25rem;
    top: -20vh;
    animation: ${props => props.animation1 ? blocAnimation1 : props.animation2 ? blocAnimation2 : props.animation3 ? blocAnimation3 : blocAnimation4 ? props.animation4 : '' } linear infinite;
    animation-duration:  ${props => props.animation1 ? '1.6s' : props.animation2 ? '2.9s' : props.animation3 ? '2.3s' : '3.7s'  };
    bottom: 0;
`

const Blocs = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 12rem;
`

