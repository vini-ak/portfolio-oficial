import styled from "styled-components";
import Colors from "../../shared/colors";

export const PortfolioSection = styled.div`
    margin: 0 10vw;
    width: fill;
    margin-top: 5rem;
    margin-bottom: 60px;

    /* & > h1 {
        font-size: 3rem;
    } */

    @media only screen and (min-width:1920px) {
        margin: 100px 0;
        width: 100%;
    }
`;

export const Project = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    .image {
        background: ${Colors.primaryPurple};
        width: 50%;
        max-width: 650px;
        min-width: 300px;
        height: 80%;
    }

    .description {
        width: 40%;
        margin: 0 5%;

        & .label {
            font-size: .875rem;
        }

        & > .title-container > .title {
            font-size: 2rem;
            margin-top: .5rem;
            margin-bottom: 1.25rem;
            font-weight: bolder;
        }

        & > .description-container {
            & > .servico-title {
                font-weight: bolder;
                margin: .5rem 0;
            }

            & > .description-content {
                color: ${Colors.grey};
            }
        }  

        & > .external-link {
            margin-top: 2rem;

            & > .link {
                font-weight: bold;
                text-decoration: none;
                color: ${Colors.primaryPurple};
                transition: .3s ease-out;

                &:hover {
                    color: ${Colors.secondaryPurple};
                }
            }
        }
    }

    &:nth-child(odd) {
        flex-direction: row-reverse
        /* justify-content: end; */

    }


    @media screen and (max-width: 800px) {

        .image, .description {
            width: 100%;
            min-width: none;
            max-width: none;
        }
    }

`