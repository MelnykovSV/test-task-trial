import styled from "@emotion/styled";

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.textLogo}; */

  .container {
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    max-width: 320px;

    @media screen and (min-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
      max-width: 768px;
    }
    @media screen and (min-width: 1440px) {
      padding-left: 128px;
      padding-right: 128px;
      max-width: 1440px;
    }
  }
`;
