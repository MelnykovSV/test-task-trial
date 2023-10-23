import { Container } from "./SearchForm.styled";
import { useNavigate } from "react-router";
import { generateQueryString } from "../../helpers";
import { useSearchParams } from "react-router-dom";
import { StyledSelect, BrandStyledSelect } from "../../ui";
import { makes, prices } from "../../constants";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { StyledButton } from "../../ui";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetCurrentPage } from "../../redux/favoriteCars/carsSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const make = searchParams.get("make");
  const rentalPrice = searchParams.get("rentalPrice");
  const minMileage = searchParams.get("minMileage");
  const maxMileage = searchParams.get("maxMileage");

  const [currentBrandValue, setCurrentBrandValue] = useState(make);
  const [currentRentalPriceValue, setCurrentRentalPriceValue] =
    useState(rentalPrice);
  const [currentMinMileageValue, setCurrentMinMileageValue] =
    useState(minMileage);
  const [currentMaxMileageValue, setCurrentMaxMileageValue] =
    useState(maxMileage);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(currentBrandValue);
    if (
      make === currentBrandValue &&
      rentalPrice === currentRentalPriceValue &&
      minMileage === currentMinMileageValue &&
      maxMileage === currentMaxMileageValue
    ) {
      return;
    }
    const queryString = generateQueryString({
      make: currentBrandValue,
      rentalPrice: currentRentalPriceValue,
      minMileage: currentMinMileageValue,
      maxMileage: currentMaxMileageValue,
    });
    console.log(queryString);
    dispatch(resetCurrentPage());

    navigate(queryString ? `?${queryString}` : "");
  };

  const brandChangeHandler = (brand) => {
    setCurrentBrandValue(brand);
  };
  const rentalPriceChangeHandler = (brand) => {
    setCurrentRentalPriceValue(brand);
  };
  const minMileageChangeHandler = (brand) => {
    setCurrentMinMileageValue(brand);
  };
  const maxMileageChangeHandler = (brand) => {
    setCurrentMaxMileageValue(brand);
  };

  return (
    <Container onSubmit={submitHandler}>
      <div className="search-form-block">
        <label htmlFor="brands-select" className="label">
          Car brand
        </label>
        <BrandStyledSelect
          value={currentBrandValue}
          options={makes}
          id="brands-select"
          placeholder="Enter the text"
          changeHandler={brandChangeHandler}
        />
      </div>
      <div className="search-form-block">
        <label htmlFor="rental-price-select" className="label">
          Price/ 1 hour
        </label>
        <StyledSelect
          options={prices}
          id="rental-price-select"
          placeholder={""}
          className={"select"}
          adornments={true}
          name="rentalPrice"
          value={currentRentalPriceValue}
          changeHandler={rentalPriceChangeHandler}
        />
      </div>
      <div className="search-form-block">
        <label htmlFor="min-mileage-input" className="label">
          Сar mileage / km
        </label>
        <div className="paired-inputs-container">
          <TextField
            className="textfield textfield-from"
            id="min-mileage-input"
            name="minMileage"
            value={currentMinMileageValue || ""}
            onChange={(e) => {
              minMileageChangeHandler(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">From</InputAdornment>
              ),
            }}
            label=""
            variant="outlined"
          />
          <TextField
            className="textfield textfield-to"
            id="max-mileage-input"
            name="maxMileage"
            value={currentMaxMileageValue || ""}
            onChange={(e) => {
              maxMileageChangeHandler(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">To</InputAdornment>
              ),
            }}
            label=""
            variant="outlined"
          />
        </div>
      </div>
      <StyledButton sx={{ width: 125 }} className="button-submit" type="submit">
        Search
      </StyledButton>
    </Container>
  );
};
