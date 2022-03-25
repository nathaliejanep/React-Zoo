import styled from "styled-components";

export const StyledNav = styled.nav`
    background-color: grey;
    margin-bottom: 1.25rem;
    margin: 0 auto;
    padding: 20px;
`;

export const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: center;
`;

export const StyledLi = styled.li`
    a{
        text-decoration: none;
        color: #000;
    }
 
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;