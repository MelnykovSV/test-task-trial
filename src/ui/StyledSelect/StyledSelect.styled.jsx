import Autocomplete from "@mui/material/Autocomplete";
import styled from "@emotion/styled";

export const Container = styled(Autocomplete)`
  border-radius: 14px;
  background: ${({ theme }) => theme.bgSecondary};
  width: 224px;
  .MuiAutocomplete-inputRoot {
    border-radius: 14px;
  }
  .MuiAutocomplete-input::placeholder {
    color: ${({ theme }) => theme.textMain};

    z-index: 50;
    opacity: 1;

    font-family: "Manrope";
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
  .MuiAutocomplete-popper {
    color: ${({ theme }) => theme.textLight};

    font-family: "Manrope";
    font-size: 16px;
    font-weight: 500;
    line-height: calc(20 / 16);
  }
  .MuiAutocomplete-paper {
    transform: translateY(20px) !important; // Move the dropdown down by 20px
  }
`;
