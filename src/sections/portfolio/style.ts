import styled from "styled-components";
import Colors from "../../shared/colors";
import { Screens as R } from "../../shared/responsivity";

export const PortfolioSection = styled.div`
    margin: 0 10vw;
    width: fill;
    margin-top: 5rem;
    margin-bottom: 60px;

    & > h1 {
        margin-bottom: 3rem;
    }

    @media only screen and (min-width:1920px) {
        margin: 100px 0;
        width: 100%;
    }
`;

export const Project = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 3rem;

    .image {
        background: ${Colors.primaryPurple};
        width: 38vw;
        max-width: 650px;
        min-width: 300px;
        height: 50vh;
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

        & > .technologies-container {
            margin-top: 1rem;

            & > .technology-title {
                font-weight: bolder;
                margin: .5rem 0;
            }

            & > .technologies-content {
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

        @media ${R.mobile} {
            margin: 0;
            margin-top: 1.5rem;
            margin-bottom: 2.5rem;

            & > .title-container > .title {
                font-size: 1.5rem;
            }
        }
    }

    &:nth-child(odd) {
        flex-direction: row-reverse
        /* justify-content: end; */

    }


    @media ${R.mobile} {
        margin-bottom: 0 !important;

        .image, .description {
            width: 100%;
            min-width: none;
            max-width: none;
        }
    }

`