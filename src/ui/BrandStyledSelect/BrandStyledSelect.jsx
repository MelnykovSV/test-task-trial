import { Container } from "./BrandStyledSelect.styled";
import TextField from "@mui/material/TextField";
import { ReactComponent as AngleIcon } from "./../../icons/chevron-down.svg";
import Box from "@mui/material/Box";

export const BrandStyledSelect = ({
  options,
  placeholder,
  adornments,
  name,
  value,
  changeHandler,
  ...props
}) => {
  return (
    <Container
      disablePortal
      options={options}
      name={name}
      value={value}
      disableClearable
      onChange={(event, newValue) => {
        changeHandler(newValue);
      }}
      popupIcon={<AngleIcon />}
      getOptionLabel={(option) => {
        console.log(option);
        return option;
      }}
      sx={{
        "& + .MuiAutocomplete-popper": { top: "100%" },
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
          color: "rgba(18, 20, 23, 0.20)",
        },
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
          {
            backgroundColor: "#4396e6",
          },
        "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected ='true'] .Mui-focused":
          {
            backgroundColor: "#3878b4",
          },
      }}
      {...props}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => {
        return <TextField {...params} placeholder={placeholder} fullWidth />;
      }}></Container>
  );
};
