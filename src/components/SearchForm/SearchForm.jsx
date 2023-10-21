import { Container } from "./SearchForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchFormValidation } from "./searchFormValidation";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { generateQueryString } from "../../helpers";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand");
  const rentalPrice = searchParams.get("rentalPrice");
  const minMileage = searchParams.get("minMileage");
  const maxMileage = searchParams.get("maxMileage");

  const {
    // getFieldState,
    register,
    handleSubmit,
    setValue,
    // control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(searchFormValidation) });

  const submitHandler = ({
    brand: formBrand,
    rentalPrice: formRentalPrice,
    minMileage: formMinMileage,
    maxMileage: formMaxMileage,
  }) => {
    if (
      brand === formBrand &&
      rentalPrice === formRentalPrice &&
      minMileage === formMinMileage &&
      maxMileage === formMaxMileage
    ) {
      return;
    }
    const queryString = generateQueryString({
      brand: formBrand,
      rentalPrice: formRentalPrice,
      minMileage: formMinMileage,
      maxMileage: formMaxMileage,
    });

    navigate(queryString ? `?${queryString}` : "");
  };

  useEffect(() => {
    setValue("brand", brand || null);
    setValue("rentalPrice", rentalPrice || null);
    setValue("minMileage", minMileage || null);
    setValue("maxMileage", maxMileage || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container onSubmit={handleSubmit(submitHandler)}>
      <input type="text" name="brand" {...register("brand")} required={false} />
      <input type="text" name="rentalPrice" {...register("rentalPrice")} />
      <input type="text" name="minMileage" {...register("minMileage")} />
      <input type="text" name="maxMileage" {...register("maxMileage")} />
      <button type="submit">Search</button>
    </Container>
  );
};
