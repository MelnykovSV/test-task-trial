import { Container } from "./CarsList.styled";
import { CarsListItem } from "../CarsListItem/CarsListItem";

export const CarsList = ({ cars }) => {
  console.log("list rerender");
  return (
    <Container>
      {cars.map((car) => (
        <CarsListItem car={car} key={car.id} />
      ))}
    </Container>
  );
};
