import * as S from "./CarInfo.styled";
import ImagePlaceholder from "./../../images/image-placeholder.jpeg";
import { StyledButton } from "../../ui";
import { nanoid } from "nanoid";
import { ReactComponent as CrossIcon } from "./../../icons/cross.svg";

export const CarInfo = ({ car, handleClose }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;

  const addDefaultSrc = (e) => {
    e.target.src = ImagePlaceholder;
  };

  return (
    <S.Container>
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
      <S.CarTitleBlock className="mode">
        {<span>{make.split(" ")[0]}</span> || "------"}&nbsp;
        {<span className="accent"> {make.split(" ")[1]}</span> || ""},{" "}
        {year || "----"}
      </S.CarTitleBlock>
      <S.CarInfoBlock className="first-list">
        <ul>
          <li>{address?.split(",")[1]?.trim() || "----"}</li>
          <li>{address?.split(",")[2]?.trim() || "----"}</li>
          <li>Id: {id || "----"}</li>
          <li>Year: {year || "----"}</li>
          <li>Type: {type || "---"}</li>
          <li>Fuel Consumption: {fuelConsumption || "---"}</li>
          <li>Engine Size: {engineSize || "-------"}</li>
        </ul>
      </S.CarInfoBlock>
      <S.StyledParagraph className="first-paragraph">
        {description || "Description not found"}
      </S.StyledParagraph>
      <S.StyledParagraph className="second-paragraph">
        Accessories and functionalities:
      </S.StyledParagraph>

      <S.CarInfoBlock className="second-list">
        <ul>
          {accessories.map((item) => (
            <li key={nanoid()}>{item}</li>
          ))}
          {functionalities.map((item) => (
            <li key={nanoid()}>{item}</li>
          ))}
        </ul>
      </S.CarInfoBlock>
      <S.StyledParagraph className="third-paragraph">
        Rental Conditions:
      </S.StyledParagraph>
      <S.StyledFeatures>
        {rentalConditions.split(/(?=[A-Z])/).map((item, i) => {
          if (i) {
            return (
              <li key={nanoid()}>
                {item.replace(/(\d)/g, '<span class="number">$1</span>')}
              </li>
            );
          }
          return (
            <li key={nanoid()}>
              {item.replace(/(\d)/g, "")}{" "}
              <span className="accent">{item.split(": ")[1]}</span>
            </li>
          );
        })}
        <li>
          Mileage:{" "}
          <span className="accent">
            {Number(mileage).toLocaleString("en-US")}
          </span>
        </li>
        <li>
          Price: <span className="accent">{rentalPrice.replace("$", "")}$</span>{" "}
        </li>
      </S.StyledFeatures>
      <StyledButton className="rent-car-button">Rental car</StyledButton>
      <button
        type="button"
        onClick={handleClose}
        aria-label="close-button"
        className="close-button">
        <CrossIcon />
      </button>
    </S.Container>
  );
};
