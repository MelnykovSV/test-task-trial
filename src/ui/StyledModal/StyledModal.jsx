import { Container } from "./StyledModal.styled";

export const StyledModal = ({children,...props}) => {
  return <Container {...props}>{children}</Container>;
};
