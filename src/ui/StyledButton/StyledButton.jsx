import { Container } from "./StyledButton.styled";

export const StyledButton = ({ children, ...props }) => {
  return (
    <Container variant="contained" {...props}>
      {children}
    </Container>
  );
};


