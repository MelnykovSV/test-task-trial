export const generateQueryString = ({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
}) => {
  const data = Object.assign(
    {},
    brand === null || brand === "" ? null : { brand },
    rentalPrice === null || rentalPrice === "" ? null : { rentalPrice },
    minMileage === null || minMileage === "" ? null : { minMileage },
    maxMileage === null || maxMileage === "" ? null : { maxMileage }
  );

  const params = new URLSearchParams(data);

  return params.toString();
};
