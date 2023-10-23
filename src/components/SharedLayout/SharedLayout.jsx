import * as S from "./SharedLayout.styled";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { StyledButton } from "../../ui";

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <S.Container>
      <header>
        <div className="container">
          <S.StyledNav>
            <StyledButton component={NavLink} to="/">
              Home
            </StyledButton>
            <StyledButton
              component={NavLink}
              to={location.state?.from ?? "/catalog"}>
              Catalog
            </StyledButton>
            <StyledButton
              component={NavLink}
              to="favorites"
              state={{ from: location }}>
              Favorites
            </StyledButton>
          </S.StyledNav>
        </div>
      </header>
      <Outlet />
    </S.Container>
  );
};
