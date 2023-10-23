import styled from "@emotion/styled";

export const Container = styled.form`
  display: flex;
  position: relative;
  align-items: end;
  justify-content: center;
  margin-bottom: 44px;
  &:after {
    /* content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    left: 160px;
    background-color: ${({ theme }) => theme.textLight}; */
  }
  .MuiInputBase-adornedStart {
    padding-left: 18px;
  }
  .MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot {
    padding-right: 30px;
  }
  .MuiAutocomplete-input.MuiInputBase-inputAdornedStart {
    padding-left: 0;
  }
  .MuiInputBase-fullWidth {
    padding-left: 18px;
  }
  .MuiOutlinedInput-input {
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }
  .MuiTypography-root {
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }
  gap: 18px;
  .search-form-block {
    .label {
      display: block;
      color: ${({ theme }) => theme.textLightSecondary};
      font-family: "Manrope";
      font-size: 14px;
      font-weight: 500;
      line-height: calc(18 / 14);
      margin-bottom: 8px;
    }
    .paired-inputs-container {
      display: flex;
      width: 320px;

      .MuiInputBase-adornedStart {
        padding-left: 24px;
      }

      .textfield-from fieldset {
        border-radius: 14px 0 0 14px;
      }

      .textfield-to fieldset {
        border-radius: 0 14px 14px 0;
      }
      .textfield {
        width: 160px;
        background: #f7f7fb;
      }
    }
    .select {
      width: 125px;
    }
  }
  .MuiButton-containedSizeMedium.MuiButton-containedPrimary {
    width: 136px !important;
  }
`;
