import styled from "styled-components";

export const StyledNav = styled.nav`
    height: 75px;
    margin-bottom: 1.25rem;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
`;

export const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
    justify-content: start;
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