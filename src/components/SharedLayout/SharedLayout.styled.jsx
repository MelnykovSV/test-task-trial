import styled from "@emotion/styled";

export const Container = styled.div`
  header {
    background-color: ${({ theme }) => theme.textLightSecondary};
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 280px;
  gap: 10px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 500px;
    gap: 30px;
  }
  a.active {
    background-color: ${({ theme }) => theme.accentDark};
    pointer-events: none;
  }
`;
