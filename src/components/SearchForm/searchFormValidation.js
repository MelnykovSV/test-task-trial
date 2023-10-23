import { object, string } from "yup";

export const searchFormValidation = object({
  brand: string(),
  rentalPrice: string().nullable(true),
  // .matches(/^[0-9]+$/, {
  //   message: "Error message",
  //   // excludeEmptyString: true,
  // }),
  minMileage: string()
    .nullable(true)
    .matches(/^[0-9]+$/, {
      message: "Error message",
      excludeEmptyString: true,
    }),
  // .test("max", "Max 12", (val) => val <= 1000)
  // .test("min", "Min 8", (val) => val >= 1)
  maxMileage: string()
    .nullable(true)
    .matches(/^[0-9]+$/, {
      message: "Error message",
      excludeEmptyString: true,
    }),
  // .test("max", "Max 12", (val) => val <= 1000)
  // .test("min", "Min 8", (val) => val >= 1),
});
