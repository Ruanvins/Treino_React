import { ButtonContainer } from "./styles";

const ButtonYellow = ({label, onclick}) => {
  return (
    <ButtonContainer onClick={onclick}>
      {label}
    </ButtonContainer>
  );
}

export default ButtonYellow;
