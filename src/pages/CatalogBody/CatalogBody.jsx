import { Container } from "./CatalogBody.styled";
import { useSearchParams } from "react-router-dom";

const CatalogBody = () => {
  const [searchParams] = useSearchParams();

  const brand = searchParams.get("brand");
  const rentalPrice = searchParams.get("rentalPrice");
  const minMileage = searchParams.get("minMileage");
  const maxMileage = searchParams.get("maxMileage");

  console.log("catalog body rendered");

  return (
    <Container>
      <h2>Catalog body</h2>
      <ul>
        <li>{`Brand: ${brand}`}</li>
        <li>{`Rental price: ${rentalPrice}`}</li>
        <li>{`Min mileage: ${minMileage}`}</li>
        <li>{`Max mileage: ${maxMileage}`}</li>
      </ul>
    </Container>
  );
};

export default CatalogBody;
