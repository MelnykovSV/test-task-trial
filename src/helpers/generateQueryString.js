export const generateQueryString = ({
  make,
  rentalPrice,
  minMileage,
  maxMileage,
}) => {
  const data = Object.assign(
    {},
    make === null || make === "" ? null : { make },
    rentalPrice === null || rentalPrice === "" ? null : { rentalPrice },
    minMileage === null || minMileage === "" ? null : { minMileage },
    maxMileage === null || maxMileage === "" ? null : { maxMileage }
  );

  const params = new URLSearchParams(data);

  return params.toString();
};
