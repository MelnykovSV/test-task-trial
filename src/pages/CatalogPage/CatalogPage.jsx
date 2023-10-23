import { Container } from "./CatalogPage.styled";
import { Outlet } from "react-router";
import { SearchForm } from "../../components";

const CatalogPage = () => {
  return (
    <Container className="container">
      <SearchForm />
      <Outlet />
    </Container>
  );
};

export default CatalogPage;
