import styled from "styled-components"

const NavLink = styled.a`
    font-family: Raleway;
    font-weight: 300;
    font-size: 1rem;
    color: rgba(0,0,0,0.75);
    text-decoration: none;
    margin-left: 1.25rem;
    transition: 0.3s ease-in;
    
    & :hover {
        color: blue;
    }
`

export default NavLink