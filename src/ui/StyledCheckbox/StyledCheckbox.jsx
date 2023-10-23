import { Container } from "./StyledCheckbox.styled";
import { ReactComponent as CheckedIcon } from "./../../icons/heart-filled.svg";
import { ReactComponent as UncheckedIcon } from "./../../icons/heart.svg";

const label = { inputProps: { "aria-label": "Favorites checkbox" } };

export const StyledCheckbox = ({ ...props }) => {
  return (
    <Container
      {...label}
      {...props}
      icon={<UncheckedIcon />}
      checkedIcon={<CheckedIcon />}
    />
  );
};
