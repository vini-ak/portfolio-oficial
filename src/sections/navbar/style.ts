import styled from "styled-components";
import Colors from "../../shared/colors";
import { Screens as R } from "../../shared/responsivity";

export const NavbarSection = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    transition: .5s ease-out;
    overflow: hidden;

    @media ${R.mobile} {
        position: fixed !important;
        background-color: ${Colors.primaryBlue};
    }
`

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    padding: .0125rem 10vw;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    & > .logo {
        width: 50px;
        height: 50px;
        background-color: ${Colors.primaryPurple};

        @media  ${R.mobile} {
            width: 2rem;
            height: 2rem;
        }
    }

    & > .links {
        /* text-decoration: none; */
        list-style-type: none;
        display: flex;
        width: fill;
        justify-content: space-between;

        & .link {
            margin-left: .875rem;
            color: white;
            transition: .2s ease-in;

            & a {
                text-decoration: none;
                color: white;
                transition: inherit;

                &:hover {
                    color: ${Colors.primaryPurple};
                }
            }
        }

        @media  ${R.mobile} {
            display: none;
        }
    }

    & > .is-mobile {
        display: none;

        @media ${R.mobile} {
            display: block;
        }
    }

    @media ${R.largeScreen} {
        padding: .5rem 0;
        max-width: 1920px;
        margin: 0 auto;
    }

`