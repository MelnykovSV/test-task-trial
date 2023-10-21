import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/" state={{ from: location }}>
            {" "}
            Home
          </NavLink>
          <NavLink to={location.state?.from ?? "/catalog"}>Catalog</NavLink>
          <NavLink to="favorites" state={{ from: location }}>
            Favorites
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
