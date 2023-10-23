import styled from "@emotion/styled";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    column-gap: 70px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: start;
    column-gap: 29px;
  }
`;
