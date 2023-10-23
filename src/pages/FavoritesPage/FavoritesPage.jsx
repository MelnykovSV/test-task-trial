import { Container } from "./FavoritesPage.styled";
import { CarsList } from "../../components";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/favoriteCars/carsSlice";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <Container className="container">
      <h1>Favorites page</h1>
      <CarsList cars={favoriteCars} />
    </Container>
  );
};

export default FavoritesPage;
