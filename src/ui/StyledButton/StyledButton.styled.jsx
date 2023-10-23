import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled(Button)`
  border-radius: 12px;
  height: 44px;
  width: 100%;
  font-weight: 600;
  text-transform: none;
  color: ${({ theme }) => theme.bgMain};
  background-color: ${({ theme }) => theme.accentMain};
  transition: background-color ${({ theme }) => theme.transitions.time}
    ${({ theme }) => theme.transitions.cubic};
  &:hover {
    background-color: ${({ theme }) => theme.accentDark};
  }
`;
