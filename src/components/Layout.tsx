import { Link, Outlet } from "react-router-dom"
import { Main } from "./styles/Main"
import { StyledLi, StyledNav, StyledUl } from "./styles/Nav"

export const Layout = () => {
    return (
        <>
            <header>
                <div className="logo-container"></div>
                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <Link to="/">Home</Link>
                        </StyledLi>
                        <StyledLi>
                            <Link to="/animals">Animals</Link>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>
            </header>
            <Main>
                <Outlet></Outlet>
            </Main>
            <footer>

            </footer>
        </>
    )
}