import { Dna } from "react-loader-spinner";
import { Container } from "./StyledLoader.styled";

const StyledLoader = () => {
  return (
    <Container>
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </Container>
  );
};

export default StyledLoader;
