import * as S from "./CatalogBody.styled";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { carsEndpoint, carsPerPage } from "../../constants";
import { CarsList } from "../../components";
import { generateQueryString } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentPage } from "../../redux/favoriteCars/carsSlice";
import { incrementCurrentPage } from "../../redux/favoriteCars/carsSlice";
import StyledLoader from "../../ui/StyledLoader/StyledLoader";
import { toast } from "react-toastify";

const CatalogBody = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const [searchParams] = useSearchParams();
  const make = searchParams.get("make");
  const rentalPrice = searchParams.get("rentalPrice");
  const minMileage = searchParams.get("minMileage");
  const maxMileage = searchParams.get("maxMileage");

  const queryString = generateQueryString({
    make,
    rentalPrice,
    minMileage,
    maxMileage,
  });

  console.log(queryString);

  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isPageLast, setIsPageLast] = useState(true);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const filteredArray = filterArray(cars);

    setFilteredCars(filterArray(filteredArray));
    console.log(isFirstRun);

    if (filteredArray.length === 0 && !isFirstRun.current) {
      toast.warning("No result found!");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cars]);

  // useEffect(() => {
  //   if (isFirstRun.current) {
  //     isFirstRun.current = false;
  //     return;
  //   }
  // });

  const filterArray = (arr) => {
    if (!rentalPrice && !minMileage && !maxMileage && arr.length === 0) {
      return arr;
    }
    const filteredByRentalPrice = rentalPrice
      ? arr.filter(
          (item) =>
            Number(item.rentalPrice.replace("$", "")) <= Number(rentalPrice)
        )
      : [...arr];

    const filteredByMinMileage = minMileage
      ? filteredByRentalPrice.filter((item) => {
          console.log(Number(item.mileage));
          return Number(item.mileage) >= Number(minMileage);
        })
      : [...filteredByRentalPrice];

    const filteredByMaxMileage = maxMileage
      ? filteredByMinMileage.filter(
          (item) => Number(item.mileage) <= Number(maxMileage)
        )
      : [...filteredByMinMileage];

    return filteredByMaxMileage;
  };

  const fetchCarsData = async (page) => {
    setIsLoading(true);
    if (page === 1 || rentalPrice || minMileage || maxMileage) {
      setCars([]);
    }
    try {
      const response = await axios.get(
        rentalPrice || minMileage || maxMileage
          ? `${carsEndpoint}?page=1&limit=25${make ? `&make=${make}` : ""}`
          : `${carsEndpoint}?page=${page}&limit=${carsPerPage}${
              make ? `&make=${make}` : ""
            }`
      );

      setIsLoading(false);
      if (response.data.length === carsPerPage) {
        setIsPageLast(false);
      } else {
        setIsPageLast(true);
      }
      if (page === 1) {
        setCars([...response.data]);
      } else {
        setCars([...cars, ...response.data]);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCarsData(currentPage);
    if (isFirstRun.current) {
      isFirstRun.current = false;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, make, rentalPrice, minMileage, maxMileage]);

  const loadMoreHandler = () => {
    dispatch(incrementCurrentPage());
  };

  return (
    <S.Container>
      <CarsList cars={filteredCars} />

      {isLoading && (
        <S.PageLoaderContainer>
          <StyledLoader />
        </S.PageLoaderContainer>
      )}
      {(isPageLast && !isLoading) || (
        <S.LoadMoreButton onClick={loadMoreHandler}>Load more</S.LoadMoreButton>
      )}
    </S.Container>
  );
};

export default CatalogBody;
