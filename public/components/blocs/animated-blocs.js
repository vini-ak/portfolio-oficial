import styled, { keyframes } from "styled-components";

export default function AnimatedBlocs() {
    return (
        <Blocs>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
            <BuildingBloc></BuildingBloc>
        </Blocs>
    );
}

const blocAnimation1 = keyframes`
    0% {
        background-color: #ffca00;
    } 25% {
        background-color: white;

    } 50% {
        background-color: blue;

    } 75% {
        background-color: yellow;

    } 100% {
        background-color: red;

    }
`


const BuildingBloc = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    background-color: #c4c4c4;
    margin: 0.25rem;
    top: -20vh;
    animation: ${blocAnimation1} 2.2s linear infinite;
    bottom: 0;
`

const Blocs = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 12rem;
`

