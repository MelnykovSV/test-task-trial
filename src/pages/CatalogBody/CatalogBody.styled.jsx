import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Container = styled.div``;

export const LoadMoreButton = styled(Button)`
  display: block;
  border: none;
  margin: 0 auto;
  margin-bottom: 140px;
  background-color: ${({ theme }) => theme.bgMain};
  cursor: pointer;
  padding: 10px 20px;
  color: ${({ theme }) => theme.accentMain};
  font-family: "Manrope";
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;
`;

export const PageLoaderContainer = styled.div`
  height: 300px;
  position: relative;
`;
