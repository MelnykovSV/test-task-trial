import * as S from "./CarsListItem.styled";
import ImagePlaceholder from "./../../images/image-placeholder.jpeg";
import { StyledButton, StyledCheckbox } from "../../ui";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoriteCars } from "../../redux/favoriteCars/carsSlice";
import {
  addCarToFavorites,
  removeCarFromFavorites,
} from "../../redux/favoriteCars/carsSlice";
import { StyledModal } from "../../ui";
import { CarInfo } from "../CarInfo/CarInfo";
import Box from "@mui/material/Box";

export const CarsListItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(
    favoriteCars.some((car) => car.id === id)
  );

  const addDefaultSrc = (e) => {
    e.target.src = ImagePlaceholder;
  };

  const addToFavoritesHandler = () => {
    if (isFavorite) {
      dispatch(removeCarFromFavorites(car.id));
      setIsFavorite(!isFavorite);
    } else {
      dispatch(addCarToFavorites(car));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <S.CarCard>
      <S.ImageContainer>
        {img ? (
          <img
            src={img}
            onError={addDefaultSrc}
            alt={description || "Description not found"}
          />
        ) : (
          <img
            src={ImagePlaceholder}
            alt={description || "Description not found"}
          />
        )}
      </S.ImageContainer>
      <S.FavoritesIconButton>
        <StyledCheckbox checked={isFavorite} onChange={addToFavoritesHandler} />
      </S.FavoritesIconButton>
      <S.CarTitleBlock>
        <p className="mode">
          {make || "------"}, {year || "----"}
        </p>
        <p className="price">{rentalPrice || "--"}</p>
      </S.CarTitleBlock>
      <S.CarInfoBlock>
        <ul>
          <li>{address?.split(",")[1]?.trim() || "----"}</li>
          <li>{address?.split(",")[2]?.trim() || "----"}</li>
          <li>{rentalCompany || "-----"}</li>
          <li>{type || "---"}</li>
          <li>{model || "-----"}</li>
          <li>{id || "----"}</li>
          <li>{functionalities[0] || "-----"}</li>
        </ul>
      </S.CarInfoBlock>

      <StyledButton onClick={handleOpen}>Learn More</StyledButton>
      <StyledModal open={open} onClose={handleClose}>
        <Box>
          <CarInfo car={car} handleClose={handleClose} />
        </Box>
      </StyledModal>
    </S.CarCard>
  );
};
