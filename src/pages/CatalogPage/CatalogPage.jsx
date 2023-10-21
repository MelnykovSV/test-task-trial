import { Container } from "./CatalogPage.styled";
import { Outlet } from "react-router";

const CatalogPage = () => {
  return (
    <Container>
      <h1>Catalog page</h1>
      <Outlet />
    </Container>
  );
};

export default CatalogPage;
