import styled from "styled-components";
import Colors from "../../shared/colors";

export const NavbarSection = styled.nav`
    width: 100vw;
    display: flex;
    padding: .0125rem 10vw;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    transition: .5s ease-out;
    overflow: hidden;

    & > .logo {
        width: 50px;
        height: 50px;
        background-color: ${Colors.primaryPurple};
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
    }
`