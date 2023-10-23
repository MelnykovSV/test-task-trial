import { Container } from "./StyledSelect.styled";
import TextField from "@mui/material/TextField";
import { ReactComponent as AngleIcon } from "./../../icons/chevron-down.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";

export const StyledSelect = ({
  options,
  placeholder,
  adornments,
  name,
  changeHandler,
  value,
  ...props
}) => {
  return (
    <Container
      disablePortal
      value={value}
      options={options}
      disableClearable
      onChange={(event, newValue) => {
        changeHandler(newValue);
      }}
      popupIcon={<AngleIcon />}
      getOptionLabel={(option) => (adornments ? option + "$" : option)}
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
        params.InputProps.startAdornment = (
          <InputAdornment position="start">To</InputAdornment>
        );

        return (
          <TextField
            {...params}
            name={name}
            // variant="standard"
            // label="Multiple values"

            placeholder={placeholder}
            fullWidth
          />
        );
      }}></Container>
  );
};
