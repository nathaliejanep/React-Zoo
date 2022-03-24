import { Link, Outlet } from "react-router-dom"
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
            <main>
                <Outlet></Outlet>
                <div>Kolumn 1</div>
                <div>Kolumn 2</div>
                <div>Kolumn 3</div>
            </main>
            <footer>

            </footer>
        </>
    )
}