import { Container } from "./CatalogPage.styled";
import { Outlet } from "react-router";
import { SearchForm } from "../../components";

const CatalogPage = () => {
  console.log('catalog rendered')
  return (
    <Container>
      <h1>Catalog page</h1>
      <SearchForm />
      <Outlet />
    </Container>
  );
};

export default CatalogPage;
